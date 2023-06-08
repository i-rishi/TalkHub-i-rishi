import { Box, styled } from "@mui/material";
import { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { Chat as ChatIcon } from "@mui/icons-material";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../Drawer/InfoDrawer";

const Header = styled(Box)`
  height: 44px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

const Image = styled("img")`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const Icon = styled(Box)`
  margin-left: auto;
  & > * {
    margin: 8px;
    padding: 6px;
    color: #adadad;
    cursor: pointer;
  }
`;

const Chat = styled(ChatIcon)`
  font-size: 22px;
  margin-top: 3px;
  margin-right: 8px;
`;

function HeaderTop() {
  const [openDrawer, setOpenDrawer] = useState(null);
  const { account } = useContext(AccountContext);

  const toggleDrawer = () => {
    setOpenDrawer(true);
  };
  return (
    <>
      <Header>
        <Image
          src={account.picture}
          alt="Profile_Picture"
          onClick={() => toggleDrawer()}
        />
        <Icon>
          <Chat />
          <HeaderMenu setOpenDrawer={setOpenDrawer} />
        </Icon>
      </Header>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
}

export default HeaderTop;
