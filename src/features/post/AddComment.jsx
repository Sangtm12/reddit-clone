import { useEffect, useRef, useState } from "react";
import Button from "../../ui/Button";

function AddComment({ className }) {
  const [focus, setFocus] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (focus) {
      ref.current.focus();
    }
  }, [focus]);

  return (
    <div
      className={`relative border-2 border-border rounded-3xl p-4 ${
        focus && "pb-12"
      } ${className}`}
      onClick={() => {
        setFocus(true);
      }}
    >
      <div className={`${focus ? "" : "hidden"}`}>
        <textarea
          className="bg-background w-full focus:outline-none"
          ref={ref}
        />
        <div className="absolute bottom-3 right-2 flex gap-2">
          <Button
            light
            onClick={(e) => {
              e.stopPropagation();
              setFocus(false);
              console.log(2);
            }}
            z-index="9"
          >
            Cancel
          </Button>
          <Button className="bg-blue">Comment</Button>
        </div>
      </div>
      {focus || "Write a comment..."}
    </div>
  );
}

export default AddComment;
