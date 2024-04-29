import * as React from "react";
import logo from "../assets/blueble.png";

const Header = () => {
  const handleLogout = () => {
    // console.log("Logout");
  };

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 25,
        backgroundColor: "#fff",
      }}
    >
      <img src={logo} style={{ height: 75, width: 150 }} />
      <button
        style={{
          backgroundColor: "plum",
          fontSize: 20,
          fontWeight: "bold",
          color: "#fff",
          height: 60,
          width: 150,
          borderRadius: 50,
        }}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
