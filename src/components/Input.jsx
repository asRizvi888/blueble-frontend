import * as React from "react";

const Input = ({ type, lable, value, onChange, placeholder, name }) => {
  return (
    <div>
      <h3 style={{ marginBottom: 7 }}>{lable}</h3>
      <input
        key={name}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        style={{
          backgroundColor: "#fff",
          height: 45,
          width: 325,
          borderRadius: 5,
          borderColor: "darkblue",
          fontSize: 18,
          padding: 10,
          outline: "none",
        }}
      />
    </div>
  );
};

export default Input;
