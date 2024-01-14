import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./CSS/FormLIst.css";

export default function FormList({
  addList,
  setShow,
  isPopUp,
  setIsPopUp,
  name = "",
  desc = "",
  priorities = "",
  date = "",
  id = "",
  activate = false,
  type = "add",
  editList,
}) {
  const [formData, setFormData] = useState({
    name: name,
    desc: desc,
    priorities: priorities,
    date: date,
    id: uuid(),
    activate: activate,
  });
  const [isCheck, setIsCheck] = useState([]);

  const handleChange = (evt) => {
    const changeField = evt.target.name;
    const newValue = evt.target.value;
    setFormData((curr) => {
      return { ...curr, [changeField]: newValue };
    });
    !formData.activate && activateForm();
  };

  const activateForm = () => {
    setFormData((curr) => {
      return { ...curr, activate: true };
    });
  };

  return (
    <form
      className={type === "add" ? "container-add" : "container-patch"}
      style={{ opacity: isPopUp && "1" }}
      action=""
      method="post"
    >
      <div className="btn-exit-container">
        <button
          onClick={() => {
            setShow(false);
          }}
        >
          <span id="btn-exit">X</span>
        </button>
      </div>
      <div className="name-container">
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Task Name"
          onChange={handleChange}
        />
      </div>
      <div className="desc-container">
        <textarea
          name="desc"
          id="desc"
          cols="30"
          rows="7"
          placeholder="Description ..."
          onChange={handleChange}
          value={formData.desc}
        ></textarea>
      </div>
      <div className="date-priorities-container">
        <select
          name="priorities"
          id="priorities"
          value={formData.priorities}
          onChange={handleChange}
        >
          <option value="">--Select--</option>
          <option value="red">🔴 Priority</option>
          <option value="orange">🟠 Priority</option>
          <option value="yellow">🟡 Priority</option>
          <option value="green">🟢 Priority</option>
        </select>
        <input
          type="date"
          name="date"
          id="data"
          value={formData.date}
          onChange={handleChange}
        />
      </div>
      <div className="btn-container">
        <button
          type="submit"
          onClick={(evt) => {
            evt.preventDefault();
            setShow(false);
            setIsPopUp(false);
            {
              type === "add"
                ? addList({ formData })
                : editList(id, { formData });
            }
          }}
        >
          {type === "add" ? (
            <span id="add-task">Add Task</span>
          ) : (
            <span id="patch">Patch</span>
          )}
        </button>
      </div>
    </form>
  );
}
