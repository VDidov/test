import React, { useEffect } from "react";
import { useActions } from "./hooks/useActions";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/NavBar";
import UsersItem from "./components/UserItem/UsersItem";
import { Container } from "@material-ui/core";

function App() {
  const { getUsers } = useActions();

  const usersList = useSelector((state) => state.usersList.filterList);
  const isLoading = useSelector((state) => state.usersList.isLoading);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "20px",
        }}
      >
        {usersList.length === 0 && !isLoading ? (
          <p>No items</p>
        ) : (
          usersList.map((item) => (
            <UsersItem
              key={item.name}
              name={item.name}
              lastName={item.lastname}
              age={item.age}
              sex={item.sex}
            />
          ))
        )}
      </Container>
    </>
  );
}

export default App;
