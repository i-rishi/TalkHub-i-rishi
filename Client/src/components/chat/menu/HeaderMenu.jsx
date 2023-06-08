import { Menu, MenuItem, styled } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { useState } from "react";

const MenuIcon = styled(MenuItem)`
  font-size: 14px;
  color: #4a4a4a;
`;

function HeaderMenu({ setOpenDrawer }) {
  const [open, setOpen] = useState(null);

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  return (
    <>
      <MoreVert onClick={handleClick} />
      <Menu
        anchorEl={open}
        open={open}
        onClose={handleClose}
        keepMounted
        getContentAnchorE1={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuIcon
          onClick={() => {
            handleClose();
            setOpenDrawer(true);
          }}
        >
          Profile
        </MenuIcon>
      </Menu>
    </>
  );
}

export default HeaderMenu;
