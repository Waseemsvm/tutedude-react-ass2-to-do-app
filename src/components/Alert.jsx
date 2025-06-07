import { useRef, useEffect } from "react";

export default function Alert(props) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (props.open) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [props.open]);

  return (
    <dialog ref={dialogRef} className="modal-dialog">
      <div className="modal">Please Enter a value to create todo</div>
      <button className="modal-close-btn"
        onClick={() => {
          props.onCloseModal();
        }}
      >
        OK
      </button>
    </dialog>
  );
}
