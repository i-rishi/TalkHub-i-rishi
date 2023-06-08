import LoginDialoge from "./account/LoginDialogs";
import styled from "@emotion/styled";
import { AppBar, Toolbar, Box } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import ChatDialog from "../components/chat/ChatDialog";

const LoginHeaderbar = styled(AppBar)`
  height: 250px;
  box-shadow: none;
`;

const ChatHeaderbar = styled(AppBar)`
  height: 125px;
  box-shadow: none;
`;

const Component = styled(Box)`
  height: "100vh";
`;

function Messanger() {
  const { account } = useContext(AccountContext);
  return (
    <Component>
      {account ? (
        <ChatHeaderbar>
          <Toolbar />
          <ChatDialog />
        </ChatHeaderbar>
      ) : (
        <>
          <LoginHeaderbar>
            <Toolbar />
            <LoginDialoge></LoginDialoge>
          </LoginHeaderbar>
        </>
      )}
    </Component>
  );
}

export default Messanger;
