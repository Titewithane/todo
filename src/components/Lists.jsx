import { useState, useEffect } from "react";
import AddButton from "./AddButton";
import List from "./List";
import "./CSS/Lists.css";

export default function Lists({ isPopUp, setIsPopUp }) {
  const [Lists, setLists] = useState([]);
  const [showSort, setShowSort] = useState(false);
  const colorOrder = {
    green: 1,
    yellow: 2,
    orange: 3,
    red: 4,
  };

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
        return val.formData.id === id
          ? { formData: { ...val.formData, ...data.formData } }
          : val;
      });
      localStorage.setItem("Lists", JSON.stringify(newLists));
      // console.log(`NewLists: ${JSON.stringify(newLists)}`);
      return newLists;
    });
  };

  const sortedByPriorities = () => {
    setLists((oldLists) => {
      const sortedLists = [...oldLists].sort(
        (a, b) =>
          colorOrder[b.formData.priorities] - colorOrder[a.formData.priorities]
      );
      localStorage.setItem("Lists", JSON.stringify(sortedLists));
      console.log(sortedLists);
      return sortedLists;
    });
    console.log("Array has been sorted");
  };

  return (
    <div className="body">
      <AddButton addList={addList} isPopUp={isPopUp} setIsPopUp={setIsPopUp} />
      <div className="lists-container">
        <div className="btn-sort">
          <button
            onClick={(evt) => {
              evt.preventDefault();
              sortedByPriorities();
            }}
          >
            sort
          </button>
        </div>

        <div className="lists">
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
        </div>
      </div>
    </div>
  );
}
