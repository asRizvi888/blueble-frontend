import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Unauthorized Access</h1>
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
        onClick={() => navigate("/")}
      >
        Login
      </button>
    </div>
  );
};

export default Unauthorized;
