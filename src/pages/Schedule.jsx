import * as React from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import Select from "../components/Select";

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Schedule = () => {
  const [formData, setFormData] = React.useState({});
  const onChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  console.log(formData);
  return (
    <main>
      <Header />
      <div
        style={{
          marginTop: 150,
          paddingInline: 25,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 7,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Input
            type={"time"}
            lable={"Start"}
            name={"startTime"}
            placeholder={"Start time"}
            value={formData?.startTime}
            onChange={onChange}
          />
          <Input
            type={"time"}
            lable={"End"}
            name={"endTime"}
            placeholder={"End time"}
            value={formData?.endTime}
            onChange={onChange}
          />
          <Select
            lable={"Weekday"}
            name={"dayOfWeek"}
            items={DAYS}
            value={formData?.dayOfWeek}
            onChange={onChange}
          />
          <button
            style={{
              backgroundColor: "plum",
              fontSize: 20,
              fontWeight: "bold",
              color: "#fff",
              height: 60,
              width: 150,
              borderRadius: 5,
              alignSelf: "center",
              marginTop: 45,
            }}
            // onClick={handleLogout}
          >
            Add
          </button>
        </div>
      </div>
    </main>
  );
};

export default Schedule;
