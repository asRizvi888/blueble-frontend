import * as React from "react";

const Slot = ({ start, end, day, onEdit, onDelete }) => {
  return (
    <div
      style={{
        boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fffffe",
        height: 100,
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        paddingInline: 30,
      }}
    >
      <div>
        <h2>{day}</h2>
        <h3 style={{ color: "plum" }}>{`${start} - ${end}`}</h3>
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <button
          style={{
            backgroundColor: "blueviolet",
            fontSize: 20,
            fontWeight: "bold",
            color: "#fff",
            height: 50,
            width: 100,
            borderRadius: 5,
          }}
          onClick={onEdit}
        >
          Edit
        </button>
        <button
          style={{
            backgroundColor: "tomato",
            fontSize: 20,
            fontWeight: "bold",
            color: "#fff",
            height: 50,
            width: 100,
            borderRadius: 5,
          }}
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Slot;
