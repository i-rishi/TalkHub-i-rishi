import { Box, Typography, styled, Divider } from "@mui/material";
import { emptyChatImage } from "../../../constantsImages/Images";

const OuterComponent = styled(Box)`
  background: #f8f9fa;
  padding: 30px 0;
  text-align: center;
  height: 100vh;
`;

const InnerComponent = styled(Box)`
  padding: 0 200px;
`;

const Image = styled("img")({
  width: 400,
  marginTop: 100,
});

const Title = styled(Typography)`
  font-size: 32px;
  margin: 25px 0 10px 0;
  color: #41525d;
  font-family: inherit;
  font-weight: 300;
`;

const SubTitle = styled(Typography)`
  font-size: 14px;
  color: #667781;
  font-weight: 400;
  font-family: inherit;
`;

const StyledDivider = styled(Divider)`
  margin: 40px 60px;
  opacity: 0.8;
`;

function EmptyChat() {
  return (
    <Box style={{ overFlow: "hidden" }}>
      <OuterComponent>
        <InnerComponent>
          <Image src={emptyChatImage} alt="Empty_Chat_image" />
          <Title>TalkHub Web</Title>
          <SubTitle>
            Now send and recive messages without keeping your phone online.
          </SubTitle>
          <SubTitle>
            Use TalkHub to connect with your Beloved ones anytime anywhere.
          </SubTitle>
        </InnerComponent>
        <StyledDivider />
      </OuterComponent>
    </Box>
  );
}

export default EmptyChat;
