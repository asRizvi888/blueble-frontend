import * as React from "react";

const Select = ({ lable, value, onChange, name, items }) => {
  return (
    <div>
      <h3 style={{ marginBottom: 7 }}>{lable}</h3>
      <select
        key={name}
        name={name}
        value={value}
        onChange={onChange}
        style={{
          backgroundColor: "#fff",
          height: 68,
          width: 350,
          borderRadius: 5,
          borderColor: "darkblue",
          fontSize: 18,
          padding: 10,
        }}
      >
        {items.map((item) => <option value={item}>{item}</option>)}
      </select>
    </div>
  );
};

export default Select;
