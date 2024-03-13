import { useEffect, useRef } from "react";
import Button from "../../ui/Button";

function AddReply({ cancelFn }) {
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div className="relative border-2 border-border rounded-3xl p-4 pb-12 ml-8 mt-4">
      <textarea
        className="bg-background w-full focus:outline-none resize-none"
        ref={ref}
      />
      <div className="absolute bottom-3 right-2 flex gap-2">
        <Button
          light
          onClick={(e) => {
            e.stopPropagation();
            cancelFn();
          }}
          z-index="9"
        >
          Cancel
        </Button>
        <Button className="bg-blue">Reply</Button>
      </div>
    </div>
  );
}

export default AddReply;
