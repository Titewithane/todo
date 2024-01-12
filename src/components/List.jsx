import { useState } from "react";
import FormList from "./FormList";
import AddButton from "./AddButton";
import "./CSS/List.css";
import PatchButton from "./PatchButton";
export default function List({
  addList,
  isPopUp,
  setIsPopUP,
  name,
  desc,
  priorities,
  date,
  id,
  activate,
  changeActivate,
  editList,
}) {
  const [show, setShow] = useState(false);
  const [showPatch, setShowPatch] = useState(false);
  return (
    <div
      className="list-item"
      style={{ backgroundColor: `${priorities}` }}
      key={id}
    >
      <div className="checkBox">
        <input
          type="checkbox"
          onClick={() => changeActivate(id)}
          name=""
          id=""
        />
      </div>
      <div className="listBody">
        <h1>{name}</h1>
        <h3>{desc}</h3>
      </div>
      <div className="patch">
        <PatchButton
          setShowPatch={setShowPatch}
          setShow={setShow}
          setIsPopUp={setIsPopUP}
        />
      </div>
      <div className="form-list">
        {show && showPatch && (
          <FormList
            addList={addList}
            setShow={setShow}
            isPopUp={isPopUp}
            setIsPopUp={setIsPopUP}
            name={name}
            desc={desc}
            priorities={priorities}
            date={date}
            id={id}
            activate={activate}
            type={"Patch"}
            editList={editList}
          />
        )}
      </div>
    </div>
  );
}
