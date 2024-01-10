import FormList from "./FormList";
import AddButton from "./AddButton";
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
      <div className="settings">
        <AddButton
          addList={addList}
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
      </div>
    </div>
  );
}
