import { Box, Typography, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;

const Image = styled("img")({
  width: 200,
  height: 200,
  borderRadius: "50%",
  padding: "25px 0",
});

const BoxWrapper = styled(Box)`
  background: #fff;
  padding: 12px 30px 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14);
  & :first-child {
    font-size: 13px;
    color: #2986cc;
    font-weight: 200;
  }
  & :last-child {
    margin: 14px 0;
    color: #4a4a4a;
  }
`;

const DescritpionWrapper = styled(Box)`
  padding: 15px 20px 28px 30px;
  & > p {
    font-size: 13px;
    color: #8696a0;
  }
`;

function Profile() {
  const { account } = useContext(AccountContext);
  return (
    <>
      <ImageContainer>
        <Image src={account.picture} alt="Profile_Picture" />
      </ImageContainer>
      <BoxWrapper>
        <Typography>Your name</Typography>
        <Typography>{account.name}</Typography>
      </BoxWrapper>
      <DescritpionWrapper>
        <Typography>
          This is not your username or pin. This name will be visible to your
          TalkHub contacts.
        </Typography>
      </DescritpionWrapper>
      <BoxWrapper>
        <Typography>About</Typography>
        <Typography>Hello! I'm using TalkHub</Typography>
      </BoxWrapper>
    </>
  );
}

export default Profile;
