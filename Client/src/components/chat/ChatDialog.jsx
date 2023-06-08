import { useContext } from "react";
import { Box, Dialog, styled } from "@mui/material";
import Menu from "./menu/Menu";
import EmptyChat from "./EmptyChat/EmptyChat";
import ChatBox from "./EmptyChat/ChatBox";
import { AccountContext } from "../../context/AccountProvider";

const DialogBox = styled(Box)`
  display: flex;
  overflow: hidden;
`;

const LeftDialog = styled(Box)`
  min-width: 450px;
`;

const RightDialog = styled(Box)`
  width: 73%;
  min-width: 300px;
  height: 100vh;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`;
const dialogStyle = {
  height: "96%",
  margin: "15px",
  width: "100%",
  maxWidth: "100%",
  maxHeight: "100%",
  overFlow: "hidden",
  borderRadius: 0,
  boxShadow: 10,
};

function ChatDialog() {
  const { person } = useContext(AccountContext);

  return (
    <Box>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
        <DialogBox>
          <LeftDialog>
            <Menu />
          </LeftDialog>
          <RightDialog>
            {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
          </RightDialog>
        </DialogBox>
      </Dialog>
    </Box>
  );
}

export default ChatDialog;
