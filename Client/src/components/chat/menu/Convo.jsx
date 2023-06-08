import { Box, Typography, styled } from "@mui/material";

import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { setConversation, getConversation } from "../../../services/api";
import { formatDate } from "../../../utils/commonUtils";

const Component = styled(Box)`
  display: flex;
  height: 45px;
  padding: 23px 0;
  cursor: pointer;
`;

const Image = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
  padding: "0 14px",
});

const Container = styled(Box)`
  display: flex;
`;

const TimeStamp = styled(Typography)`
  font-size: 12px;
  margin-left: auto;
  color: #0000099;
  margin-right: 20px;
`;

const Text = styled(Typography)`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.9);
`;

function Convo({ user }) {
  const { setPerson, account, newMessageFlag } = useContext(AccountContext);

  const [message, setMessage] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      const data = await getConversation({
        senderId: account.sub,
        reciverId: user.sub,
      });
      setMessage({ text: data?.messages, timestamp: data?.updatedAt });
    };
    getConversationDetails();
  }, [newMessageFlag]);

  const getUsers = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, reciverId: user.sub });
  };
  return (
    <Component
      onClick={() => {
        getUsers();
      }}
    >
      <Box>
        <Image src={user.picture} alt="Profile_Picture" />
      </Box>
      <Box style={{ width: "100%" }}>
        <Container>
          <Typography>{user.name}</Typography>
          {message?.text && (
            <TimeStamp>{formatDate(message?.timestamp)}</TimeStamp>
          )}
        </Container>
        <Box>
          <Text>
            {message?.text?.includes("localhost") ? "media" : message.text}
          </Text>
        </Box>
      </Box>
    </Component>
  );
}

export default Convo;
