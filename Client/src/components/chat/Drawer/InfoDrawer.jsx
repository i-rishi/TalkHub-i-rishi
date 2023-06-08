import { ArrowBack } from "@mui/icons-material";
import { Drawer, Typography, Box, styled } from "@mui/material";

//Component Import
import Profile from "./Profile";

const drawerStyle = {
  left: 15,
  top: 15,
  height: "96%",
  width: "29.4%",
  boxShadow: "none",
};

const Header = styled(Box)`
  background-color: #2986cc;
  height: 110px;
  color: #ffffff;
  display: flex;
  & > svg,
  & > p {
    margin-top: auto;
    padding: 13px;
    font-weight: 400;
  }
`;

const Body = styled(Box)`
  background: #ededed;
  height: 85%;
`;

function InfoDrawer({ open, setOpen }) {
  const handleClose = () => {
    setOpen(null);
  };
  return (
    <>
      <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: drawerStyle }}
        style={{ zIndex: 1500 }}
        hideBackdrop={true}
      >
        <Header>
          <ArrowBack
            onClick={() => setOpen(false)}
            style={{ cursor: "pointer" }}
          />
          <Typography>Profile</Typography>
        </Header>
        <Body>
          <Profile />
        </Body>
      </Drawer>
    </>
  );
}

export default InfoDrawer;
