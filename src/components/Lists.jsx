import { useState, useEffect } from "react";
import AddButton from "./AddButton";
import "./CSS/Lists.css";

export default function Lists({ isPopUp, setIsPopUp }) {
  const [Lists, setLists] = useState([]);

  useEffect(() => {
    const lists = JSON.parse(localStorage.getItem("Lists"));
    const newLists = lists.map((val) => val.formData.activate && val);
    setLists(newLists);
  }, [Lists]);

  const addList = (list) => {
    setLists((oldLists) => {
      const newLists = [...oldLists, list];
      localStorage.setItem("Lists", JSON.stringify(newLists));
      return newLists;
    });
  };
  const changeActivate = (id) => {
    setLists((oldLists) => {
      return oldLists.map((val) =>
        val.formData.id === id ? !val.formData.activate : val.formData.activate
      );
    });
  };

  return (
    <div className="lists">
      <AddButton
        addList={addList}
        delList={delList}
        isPopUp={isPopUp}
        setIsPopUp={setIsPopUp}
      />
      <form action="">
        {Lists &&
          Lists.map((val) => {
            return (
              <div
                className="list-item"
                style={{ backgroundColor: `${val.formData.priorities}` }}
                key={val.formData.id}
              >
                <div className="checkBox">
                  <input type="checkbox" name="" id="" />
                </div>
                <div className="listBody">
                  <h1>{val.formData.name}</h1>
                  <small>{val.formData.desc}</small>
                </div>
              </div>
            );
          })}
      </form>
    </div>
  );
}
