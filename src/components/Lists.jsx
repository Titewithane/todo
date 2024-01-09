import { useState } from "react";
import AddButton from "./AddButton";
import "./CSS/Lists.css";

export default function Lists({ isPopUp, setIsPopUp }) {
  const [Lists, setLists] = useState([]);

  const addList = (list) => {
    setLists((oldLists) => {
      return [...oldLists, list];
    });
  };

  return (
    <div className="lists">
      <AddButton addList={addList} isPopUp={isPopUp} setIsPopUp={setIsPopUp} />
      <form action="">
        {Lists.map((val, idx) => {
          return (
            <div
              className="list-item"
              style={{ backgroundColor: `${val.formData.priorities}` }}
              key={idx}
            >
              <h2>{val.formData.name}</h2>
              <p>{val.formData.desc}</p>
            </div>
          );
        })}
      </form>
    </div>
  );
}
