import { Box, InputBase, styled } from "@mui/material";
import { useEffect } from "react";

import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import { uploadFile } from "../../../services/api.js";

const Wrapper = styled(Box)`
  height: 61px;
  background: #ededed;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;
  opacity: none;
  & > * {
    margin: 5px;
    color: #adadad;
  }
`;

const Search = styled(Box)`
  background: #ffffff;
  border-radius: 5px;
  width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
  width: 100%;
  height: 20px;
  padding: 20px;
  padding-left: 25px;
  font-size: 14px;
`;

const ClipIcon = styled(AttachFileIcon)`
  transform: rotate(40deg);
  cursor: pointer;
`;

function Footer({ sendText, setValue, value, setFile, file, setImage }) {
  useEffect(() => {
    const getFile = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setImage(response.data);
      }
    };
    getFile();
  }, [file]);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  };

  return (
    <Wrapper>
      <EmojiEmotionsOutlinedIcon />
      <label htmlFor="shareFile">
        <ClipIcon />
      </label>
      <input
        type="file"
        style={{ display: "none" }}
        id="shareFile"
        onChange={(e) => onFileChange(e)}
      />
      <Search>
        <InputField
          placeholder="Type a message"
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => sendText(e)}
          value={value}
        />
      </Search>
      <MicIcon />
    </Wrapper>
  );
}

export default Footer;
