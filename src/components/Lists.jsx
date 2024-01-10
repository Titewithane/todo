import { useState, useEffect } from "react";
import AddButton from "./AddButton";
import List from "./List";
import "./CSS/Lists.css";

export default function Lists({ isPopUp, setIsPopUp }) {
  const [Lists, setLists] = useState([]);

  //! render Lists from localStorage
  useEffect(() => {
    const lists = JSON.parse(localStorage.getItem("Lists"));
    setLists(lists);
  }, []);

  const addList = (list) => {
    setLists((oldLists) => {
      const newLists = oldLists ? [...oldLists, list] : [list];
      localStorage.setItem("Lists", JSON.stringify(newLists));
      return newLists;
    });
    console.log(Lists);
  };
  const changeActivate = (id) => {
    setLists((oldLists) => {
      const newLists = oldLists.map((val) => {
        return val.formData.id === id
          ? { ...val, formData: { ...val.formData, activate: false } }
          : val;
      });
      localStorage.setItem("Lists", JSON.stringify(newLists));
      return newLists;
    });
  };
  const editList = (id, data) => {
    setLists((oldLists) => {
      const newLists = oldLists.map((val) => {
        val.formData.id === id
          ? { formData: { ...val.formData, ...data } }
          : val;
      });
      localStorage.setItem("Lists", JSON.stringify(newLists));
      return newLists;
    });
  };

  return (
    <div className="lists">
      <AddButton addList={addList} isPopUp={isPopUp} setIsPopUp={setIsPopUp} />
      <form action="">
        {Lists &&
          Lists.map((val, idx) => {
            return (
              val.formData.activate && (
                <List
                  key={val.formData.id}
                  addList={addList}
                  isPopUp={isPopUp}
                  setIsPopUP={setIsPopUp}
                  {...val.formData}
                  changeActivate={changeActivate}
                  editList={editList}
                />
              )
            );
          })}
      </form>
    </div>
  );
}
