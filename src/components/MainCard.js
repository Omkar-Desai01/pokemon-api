import Card from "./Cards";
import React, { useState, useEffect } from "react";

export default function MainCard() {
  let styles = {
    width: "100%",
    height: "70vh",
    backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "0 10px",
  };

  return (
    <>
      <div style={styles} className="mainCard">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
