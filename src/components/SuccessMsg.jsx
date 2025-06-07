import { useEffect, useRef } from "react";

export default function SuccessMsg(props) {
  const dialogRef = useRef(null);
  const { open } = props;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open) {
      if (!dialog.open) {
        dialog.open = true;
        // setTimeout();
      }
    } else {
      if (dialog.open) dialog.open = false;
    }
  }, [open]);

  return (
    <dialog ref={dialogRef} className="success-modal">
      <p>Todo Added Successfully</p>
    </dialog>
  );
}
