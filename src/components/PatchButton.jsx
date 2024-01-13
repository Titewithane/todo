import { useState } from "react";
import "./CSS/PatchButton.css";
import editLogo from "../assets/editLogo.svg";
import editLogoHover from "../assets/editLogoHover.svg";

export default function PatchButton({ setShowPatch, setShow, setIsPopUp }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="container"
    >
      <button
        onClick={(evt) => {
          evt.preventDefault();
          setShowPatch(true);
          setShow(true);
          setIsPopUp(true);
        }}
        // onMouseEnter={() => setIsHover(true)}
        // onMouseLeave={() => setIsHover(false)}
      >
        {isHover ? (
          <img src={editLogo} alt="edit" width={20} height={20} />
        ) : (
          <img src={editLogoHover} alt="editHover" width={20} height={20} />
        )}
      </button>
    </div>
  );
}
