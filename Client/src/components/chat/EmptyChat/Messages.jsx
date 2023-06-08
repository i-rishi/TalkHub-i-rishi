// conponents

import { Box, styled } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { newMessage, getMessages } from "../../../services/api";

//components
import Footer from "./Footer";
import Text from "./Text";

const Wrapper = styled(Box)`
  background-size: "50%";
`;

const Component = styled(Box)`
  background-image: url(${"https://shorturl.at/bovWZ"});
  height: 80vh;
  overflow-y: scroll;
`;

const TextBox = styled(Box)`
  padding: 2px 40px;
`;

function Messages({ person, conversationId }) {
  const { account, socket, setNewMessageFlag, newMessageFlag } =
    useContext(AccountContext);
  const [value, setValue] = useState("");
  const [texts, setTexts] = useState([]);
  const [file, setFile] = useState();
  const [image, setImage] = useState("");
  const [incomingMessage, setIncomingMessage] = useState(null);

  // this useEffet is for getting the messages
  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({
        ...data,
        createdAt: Date.now(),
      });
    });
  });

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversationId._id);
      setTexts(data);
    };
    conversationId._id && getMessageDetails();
  }, [person._id, conversationId._id, newMessageFlag]);

  useEffect(() => {
    incomingMessage &&
      conversationId?.members?.includes(incomingMessage.senderId) &&
      setTexts((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversationId]);

  async function sendText(e) {
    const code = e.keyCode || e.which;
    let message;

    if (code === 13) {
      if (!file) {
        message = {
          senderId: account.sub,
          reciverId: person.sub,
          conversationId: conversationId._id,
          type: "text",
          text: value,
        };
      } else {
        message = {
          senderId: account.sub,
          reciverId: person.sub,
          conversationId: conversationId._id,
          type: "file",
          text: image,
        };
      }

      socket.current.emit("sendMessage", message);

      await newMessage(message);

      setValue("");
      setImage("");
      setFile("");
      setNewMessageFlag((prev) => !prev);
    }
  }
  return (
    <Wrapper>
      <Component>
        {texts &&
          texts.map((message) => (
            <TextBox>
              <Text message={message} />
            </TextBox>
          ))}
      </Component>
      <Footer
        sendText={sendText}
        setValue={setValue}
        value={value}
        file={file}
        setFile={setFile}
        setImage={setImage}
      />
    </Wrapper>
  );
}

export default Messages;
