import FormList from "./FormList";
import { useState } from "react";

export default function AddButton({ addList, isPopUp, setIsPopUp }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setShow(true);
          setIsPopUp(true);
        }}
      >
        Add task
      </button>
      {show && (
        <FormList
          addList={addList}
          setShow={setShow}
          isPopUp={isPopUp}
          setIsPopUp={setIsPopUp}
        />
      )}
    </div>
  );
}
