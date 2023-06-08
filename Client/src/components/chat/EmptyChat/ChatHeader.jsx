import { useContext } from "react";

import { Box, Typography, styled } from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";

import { AccountContext } from "../../../context/AccountProvider";

const Component = styled(Box)`
  display: flex;
  background: #ededed;
  height: 44px;
  padding: 8px 16px;
  align-items: center;
`;

const Image = styled("img")({
  height: 40,
  Width: 40,
  borderRadius: "50%",
});

const Name = styled(Typography)`
  margin-left: 12px !important;
`;

const Status = styled(Typography)`
  margin-left: 12px !important;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
`;

const IconBox = styled(Box)`
  margin-left: auto;
`;

const MoreVertIcon = styled(MoreVert)`
  margin: 8px;
  padding: 6px;
  color: #adadad;
  cursor: pointer;
`;

const SearchIcon = styled(Search)`
  margin: 8px;
  padding: 6px;
  color: #adadad;
  cursor: pointer;
`;

function ChatHeader({ person }) {
  const { activeUser } = useContext(AccountContext);

  return (
    <Component>
      <Box>
        <Image src={person.picture} alt="Profile_picture" />
      </Box>
      <Box>
        <Name>{person.name}</Name>
        <Status>
          {activeUser?.find((user) => user.sub === person.sub)
            ? "Online"
            : "Offline"}
        </Status>
      </Box>
      <IconBox>
        <SearchIcon />
        <MoreVertIcon />
      </IconBox>
    </Component>
  );
}

export default ChatHeader;
