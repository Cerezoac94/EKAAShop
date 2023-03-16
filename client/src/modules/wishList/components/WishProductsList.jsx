import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import WishItem from "./WishItem"

const WishProductsList = ( { w } ) => {
  // console.log("🚀 ~ file: WishProductsList.jsx:9 ~ WishProductsList ~ w:", w)

  return (
      <WishItem/>
  );
};

export default WishProductsList;
