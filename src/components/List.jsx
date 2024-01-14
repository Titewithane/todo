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
      style={{
        border: `3px groove ${priorities}`,
        width: "50dvw",
      }}
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
      <div
        className="list-body"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span id="name" style={{ fontSize: "1em" }}>
          {name}
        </span>
        <span id="desc" style={{ fontSize: "0.8em", color: "slategrey" }}>
          {desc}
        </span>
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
