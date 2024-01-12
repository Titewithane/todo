import FormList from "./FormList";
import { useState } from "react";
import "./CSS/AddButton.css";

export default function AddButton({
  addList,
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
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="btn">
        <button
          className={type === "add" ? "add-btn" : "patch-btn"}
          style={{ backgroundColor: `${priorities}` }}
          onClick={(evt) => {
            evt.preventDefault();
            setShow(true);
            setIsPopUp(true);
          }}
        >
          {type === "add" ? "Add task" : "Patch"}
        </button>
      </div>
      <div className="form">
        {show && (
          <FormList
            addList={addList}
            setShow={setShow}
            isPopUp={isPopUp}
            setIsPopUp={setIsPopUp}
            name={name}
            desc={desc}
            priorities={priorities}
            date={date}
            id={id}
            activate={activate}
            type={type}
            editList={editList}
          />
        )}
      </div>
    </div>
  );
}
