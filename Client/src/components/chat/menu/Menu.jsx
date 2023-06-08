import HeaderTop from "./HeaderTop";
import Search from "./Search";
import Conversations from "./Conversations";
import { useState } from "react";

function Menu() {
  const [text, setText] = useState("");
  return (
    <>
      <HeaderTop />
      <Search setText={setText} />
      <Conversations text={text} />
    </>
  );
}

export default Menu;
