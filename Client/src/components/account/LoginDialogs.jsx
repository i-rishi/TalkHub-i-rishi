import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../../constantsImages/Images";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useContext } from "react";

//components
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../services/api";

const Container = styled(Box)`
  display: flex;
`;

const LableList = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const QrCode = styled("img")`
  margin: 50px 0 0 50px;
  height: 264;
  width: 264;
`;

const Title = styled(Typography)`
  font-size: 26px;
  margin-bottom: 25px;
  color: #525252;
  font-family: Segoe UI, Helvetica Neue, Helvetica, Lucida Grande, Arial, Ubuntu,
    Cantarell, Fira Sans, sans-serif;
  font-weight: 300;
`;

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
`;

const dialogStyle = {
  height: "96%",
  marginTop: "18%",
  width: "70%",
  maxWidth: "100%",
  maxHeight: "100%",
  overFlow: "hidden",
  boxShadow: 10,
};

function LoginDialoge() {
  const { setAccount } = useContext(AccountContext);
  const onLoginSuccess = async (res) => {
    const Decode = jwt_decode(res.credential);
    setAccount(Decode);
    await addUser(Decode);
  };

  const onLoginError = (res) => {
    console.log("Login Failed", res);
  };

  return (
    <>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
        <Container>
          <LableList>
            <Title>Use TalkHub on your computer</Title>
            <StyledList>
              <ListItem>1. Open TalkHub URL on your Device.</ListItem>
              <ListItem>2. Tap on your Sign in as Gmail.</ListItem>
              <ListItem>3. Select your email to Sign in.</ListItem>
              <ListItem>4. Press continue if ask for permission.</ListItem>
            </StyledList>
          </LableList>
          <Box
            style={{
              position: "relative",
              marginLeft: 100,
            }}
          >
            <QrCode src={qrCodeImage} alt="QRcode"></QrCode>
            <Box
              style={{
                position: "absolute",
                top: "50%",
                left: "30%",
                transform: "transform(50%)",
              }}
            >
              <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
            </Box>
          </Box>
        </Container>
      </Dialog>
    </>
  );
}

export default LoginDialoge;
