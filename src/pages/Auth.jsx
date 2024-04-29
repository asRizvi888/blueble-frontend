import * as React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { login, signup } from "../api/auth";
import logo from "../assets/blueble.png";
import Input from "../components/Input";

const Auth = () => {
  const [focused, setFocused] = React.useState("login");
  const [formData, setFormData] = React.useState({});

  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage?.getItem("BLUEBLE_TOKEN")) {
      navigate("/schedule");
      toast("Welcome back!", { type: "success" });
    }
  }, []);

  const onChangeText = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const toggleFocused = () => {
    setFocused(focused === "login" ? "signup" : "login");
  };

  const handleSignup = async () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData?.email || !formData?.password) {
      return toast("Please fill up all the information", { type: "warning" });
    }

    if (!regex.test(formData?.email)) {
      return toast("Please use a valid email", { type: "warning" });
    }

    signup(formData).then((res) => {
      if (res?.success) {
        return toast(res?.message, { type: "success" });
      }
      return toast(res?.message, { type: "error" });
    }).catch((err) => {
      console.error(err);
      return toast("Something went wrong", { type: "error" });
    });
  };

  const handleLogin = async () => {
    if (!formData?.email || !formData?.password) {
      return toast("Please fill up all the information", { type: "warning" });
    }

    login(formData).then((res) => {
      if (res?.success) {
        localStorage.setItem("BLUEBLE_TOKEN", res?.token);
        navigate("/schedule");

        return toast(res?.message, { type: "success" });
      }
      return toast(res?.message, { type: "error" });
    }).catch((err) => {
      console.error(err);
      return toast("Something went wrong", { type: "error" });
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <img
        src={logo}
        style={{ height: 75, width: 150 }}
      />

      <h1 style={{ color: "darkblue" }}>
        {focused === "login" ? "Log in" : "Sign up"}
      </h1>
      <form>
        <Input
          type={"text"}
          lable={"Email"}
          name={"email"}
          placeholder={"Enter email here"}
          value={formData?.email}
          onChange={onChangeText}
        />
        <Input
          type={"password"}
          lable={"Password"}
          name={"password"}
          placeholder={"Enter password here"}
          value={formData?.password}
          onChange={onChangeText}
        />
      </form>

      {focused === "login"
        ? (
          <div style={{ display: "flex" }}>
            <h5>Don't have an account?</h5>
            <h5
              style={{ color: "plum", marginLeft: 5, cursor: "pointer" }}
              onClick={toggleFocused}
            >
              Create One
            </h5>
          </div>
        )
        : (
          <div style={{ display: "flex" }}>
            <h5>Already have an account?</h5>
            <h5
              style={{ color: "plum", marginLeft: 5, cursor: "pointer" }}
              onClick={toggleFocused}
            >
              Login
            </h5>
          </div>
        )}
      <button
        style={{
          backgroundColor: "plum",
          fontSize: 20,
          fontWeight: "bold",
          color: "#fff",
          height: 60,
          width: 350,
          borderRadius: 5,
        }}
        onClick={focused === "login" ? handleLogin : handleSignup}
      >
        {focused === "login" ? "Log in" : "Sign up"}
      </button>
    </div>
  );
};

export default Auth;
