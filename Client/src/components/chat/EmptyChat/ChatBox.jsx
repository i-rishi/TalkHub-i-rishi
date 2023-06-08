import { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { AccountContext } from "../../../context/AccountProvider";
import { getConversation } from "../../../services/api";

function ChatBox() {
  const { person, account } = useContext(AccountContext);
  const [conversationId, setConversationId] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        reciverId: person.sub,
      });
      setConversationId(data);
    };
    getConversationDetails();
  }, [person.sub, account.sub]);

  return (
    <Box>
      <ChatHeader person={person} />
      <Messages person={person} conversationId={conversationId} />
    </Box>
  );
}
export default ChatBox;
