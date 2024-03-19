import CreateInput from "../features/createPost/CreateInput";
import CreateRules from "../features/createPost/CreateRules";

function Create() {
  return (
    <div className="grid grid-cols-[auto_370px] w-full">
      <div className=" mt-8 ">
        <CreateInput />
      </div>
      <div className="overflow-y-auto">
        <CreateRules />
      </div>
    </div>
  );
}

export default Create;
