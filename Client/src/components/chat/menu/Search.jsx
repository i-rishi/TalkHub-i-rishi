import { Box, InputBase, styled } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

//handling CSS of Components
const Container = styled(Box)`
  height: 45px;
  background: #fff;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
`;

const Wrapper = styled(Box)`
  position: relative;
  margin: 0 13px;
  width: 100%;
  background-color: #f0f2f5;
  border-radius: 8px;
`;

const Icon = styled(Box)`
  position: absolute;
  height: 100%;
  padding: 6px 10px;
  left: 5px;
  color: #919191;
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 16px;
  padding-left: 65px;
  height: 15px;
  font-size: 14px;
`;

function Search({ setText }) {
  return (
    <Container>
      <Wrapper>
        <Icon>
          <SearchIcon fontSize="small" />
        </Icon>
        <InputField
          placeholder="Search or start a new chat"
          onChange={(e) => setText(e.target.value)}
        />
      </Wrapper>
    </Container>
  );
}

export default Search;
