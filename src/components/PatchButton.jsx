export default function PatchButton({ setShowPatch, setShow, setIsPopUp }) {
  return (
    <div>
      <button
        onClick={(evt) => {
          evt.preventDefault();
          setShowPatch(true);
          setShow(true);
          setIsPopUp(true);
        }}
      >
        Patch
      </button>
    </div>
  );
}
