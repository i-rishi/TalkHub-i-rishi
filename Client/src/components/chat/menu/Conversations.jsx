import { getUser } from "../../../services/api";
import { useEffect, useState, useContext } from "react";
import { Box, styled, Divider } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";

import Convo from "./Convo";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;

const StyleDivider = styled(Divider)`
  margin: 0 70px 0 70px;
  background: #e9edef;
  opacity: 0.6;
`;

// components

const Conversations = ({ text }) => {
  const [users, setUsers] = useState([]);

  const { account, socket, setActiveUser } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      let response = await getUser();
      const filterData = response.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filterData);
    };
    fetchData();
  }, [text]);

  useEffect(() => {
    socket.current.emit("addUsers", account);
    socket.current.on("getUsers", (user) => {
      setActiveUser(user);
    });
  }, [account]);

  return (
    <>
      <Component>
        {users.map((user) => {
          return (
            user.sub !== account.sub && (
              <>
                <Convo user={user} />
                <StyleDivider />
              </>
            )
          );
        })}
      </Component>
    </>
  );
};

export default Conversations;
