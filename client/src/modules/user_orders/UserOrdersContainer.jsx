import React from "react";
import UserOrdersMap from "./components/UserOrdersMap";

const UserOrdersContainer = () => {
  //Aqui se consumira el servicio para el usuario
  return <UserOrdersMap me={1} />;
};

export default UserOrdersContainer;
