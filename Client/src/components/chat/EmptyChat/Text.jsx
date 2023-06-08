import { Box, Typography, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { GetApp } from "@mui/icons-material";
import { iconPDF, iconDoc } from "../../../constantsImages/Images";

//import utils

import { formatDate, downloadFile } from "../../../utils/commonUtils";

const Own = styled(Box)`
  background: #87ceeb;
  max-width: 60%;
  margin-left: auto;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 8px;
  word-break: break-word;
`;

const Reciver = styled(Box)`
  background: #ffffff;
  max-width: 60%;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 8px;
  word-break: break-word;
`;

const TextMessage = styled(Typography)`
  font-size: 14px;
  padding: 0 25px 0 5px;
`;
const TimeStamp = styled(Typography)`
  font-size: 10px;
  color: #919191;
  margin-top: 10px;
  word-break: keep-all;
`;

function Text({ message }) {
  const { account } = useContext(AccountContext);
  return (
    <>
      {account.sub === message.senderId ? (
        <Own>
          {message.type === "file" ? (
            <ImageMessage message={message} />
          ) : (
            <TextMessages message={message} />
          )}
        </Own>
      ) : (
        <Reciver>
          {message.type === "file" ? (
            <ImageMessage message={message} />
          ) : (
            <TextMessages message={message} />
          )}
        </Reciver>
      )}
    </>
  );
}

const ImageMessage = ({ message }) => {
  return (
    <Box style={{ position: "relative" }}>
      {message?.text?.includes(".pdf") ? (
        <Box style={{ display: "flex" }}>
          <img src={iconPDF} alt="pdf/doc" style={{ width: 70 }} />
          <Typography style={{ fontSize: 14 }}>
            {message.text.split("/").pop()}
          </Typography>
        </Box>
      ) : message?.text?.includes(".doc") ? (
        <Box style={{ display: "flex" }}>
          <img src={iconDoc} alt="pdf/doc" style={{ width: 50 }} />
          <Typography style={{ fontSize: 14 }}>
            {message.text.split("/").pop()}
          </Typography>
        </Box>
      ) : (
        <img
          style={{
            width: 300,
            height: "100%",
            objectFit: "cover",
          }}
          src={message.text}
          alt={message.text}
        />
      )}
      <TimeStamp
        style={{ position: "absolute", bottom: 0, right: 0, margin: "5px" }}
      >
        <GetApp
          onClick={(e) => downloadFile(e, message.text)}
          style={{
            marginRight: 10,
            border: "1px solid grey",
            borderRadius: "50%",
            cursor: "pointer",
          }}
          fontSize="small"
        />
        {formatDate(message.createdAt)}
      </TimeStamp>
    </Box>
  );
};

const TextMessages = ({ message }) => {
  return (
    <>
      <TextMessage>{message.text}</TextMessage>
      <TimeStamp>{formatDate(message.createdAt)}</TimeStamp>
    </>
  );
};

export default Text;
