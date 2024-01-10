import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./CSS/FormLIst.css";

export default function FormList({
  addList,
  changeActivate,
  setShow,
  isPopUp,
  setIsPopUp,
}) {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    priorities: "",
    date: "",
    id: uuid(),
  });
  const [isCheck, setIsCheck] = useState([]);

  const handleChange = (evt) => {
    const changeField = evt.target.name;
    const newValue = evt.target.value;
    setFormData((curr) => {
      return { ...curr, [changeField]: newValue };
    });
  };

  const activateForm = () => {
    setFormData((curr) => {
      return { ...curr, activate: true };
    });
  };

  return (
    <div className="container" style={{ opacity: isPopUp && "1" }}>
      <button
        className="exit"
        onClick={() => {
          setShow(false);
        }}
      >
        X
      </button>
      <form action="" method="post">
        <div className="Name">
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Task Name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="desc">
          <label htmlFor="desc"></label>
          <textarea
            name="desc"
            id="desc"
            cols="30"
            rows="10"
            placeholder="Description..."
            onChange={handleChange}
            value={formData.desc}
          ></textarea>
        </div>
        <div className="priorities">
          <input
            type="date"
            name="date"
            id="data"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <select
            name="priorities"
            id="priorities"
            value={formData.priority}
            onChange={handleChange}
            required
          >
            <option value="">--Select--</option>
            <option value="red">🔴 Priority</option>
            <option value="orange">🟠 Priority</option>
            <option value="yellow">🟡 Priority</option>
            <option value="green">🟢 Priority</option>
          </select>
        </div>
        <button
          onClick={(evt) => {
            evt.preventDefault();
            setShow(false);
            setIsPopUp(false);
            activateForm();
            addList({ formData });
          }}
        >
          + Add Task
        </button>
      </form>
    </div>
  );
}
