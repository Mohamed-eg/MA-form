import { Container } from "@mui/material";
import React from "react";
import Contaner from "./contaner";
import Logo from "./logo";
import "./styles/main.css";

export default function Main() {
  return (
    <div>
      <Container>
        <Contaner />
      </Container>
      {/* <Logo></Logo> */}
    </div>
  );
}
