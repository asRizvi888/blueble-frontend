import * as React from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import Select from "../components/Select";
import Slot from "../components/Slot";
import {
  addAvailability,
  deleteAvailability,
  editAvailability,
  getAvailability,
} from "../api/availability";
import { toast } from "react-toastify";
import Unauthorized from "./Unauthorized";

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
  const [availabilities, setAvailabilities] = React.useState([]);

  const isAuthorized = localStorage.getItem("BLUEBLE_TOKEN");

  const getSlots = async () => {
    getAvailability().then((res) => {
      setAvailabilities(res?.availability);
    }).catch((err) => {
      console.error(err);
    });
  };

  const addSlot = async () => {
    addAvailability(formData).then(async (res) => {
      if (res?.success) {
        await getSlots();
        return toast(res?.message, { type: "success" });
      }
      return toast(res?.message, { type: "error" });
    }).catch((err) => {
      return toast(err?.message, { type: "error" });
    });
  };

  const editSlot = async () => {
    editAvailability(formData).then(async (res) => {
      if (res?.success) {
        await getSlots();
        return toast(res?.message, { type: "success" });
      }
      return toast(res?.message, { type: "error" });
    }).catch((err) => {
      return toast(err?.message, { type: "error" });
    });
  };

  const deleteSlot = async (id) => {
    deleteAvailability(id).then(async (res) => {
      if (res?.success) {
        await getSlots();
        return toast(res?.message, { type: "success" });
      }
      return toast(res?.message, { type: "error" });
    }).catch((err) => {
      return toast(err?.message, { type: "error" });
    });
  };

  const onChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  React.useEffect(() => {
    setTimeout(() => {
      if (isAuthorized) getSlots();
    }, [500]);
  }, []);

  return (
    isAuthorized
      ? (
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            alignItems: "center",
          }}
        >
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
                  marginBlock: 50,
                }}
                onClick={formData?._id ? editSlot : addSlot}
              >
                {formData?._id ? "Update" : "Add"}
              </button>
            </div>
            {availabilities.map((item) => (
              <Slot
                start={item?.startTime}
                end={item?.endTime}
                day={item?.dayOfWeek}
                onEdit={() => setFormData(item)}
                onDelete={() => deleteSlot(item?._id)}
              />
            ))}
          </div>
        </main>
      )
      : <Unauthorized />
  );
};

export default Schedule;
