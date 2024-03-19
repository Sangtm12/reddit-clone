import { useState } from "react";

function CreateCommunity() {
  const [comName, setComName] = useState("");

  return (
    <div className=" w-[30rem] p-8">
      <h3 className="text-xl text-white py-3">Create a community</h3>
      <span className="text-text-neutral  border-b-[1px] border-border block pb-2">
        Build and grow a community about something you care about. We&lsquo;ll
        help you set things up.
      </span>
      <form className="pt-8">
        <div className="flex flex-col mb-4 relative">
          <label htmlFor="communityName" className="text-text-neutral pb-2">
            Community name
          </label>
          <input
            type="text"
            id="communityName"
            name="communityName"
            className="bg-background-dark p-2 pl-7 rounded-md"
            placeholder="communityname"
            value={comName}
            onChange={(e) => {
              setComName(e.target.value);
            }}
          />
          <span className="absolute left-4 top-1/2 translate-y-1">r/</span>
        </div>
        <div className="flex flex-col mb-8">
          <span htmlFor="description" className="text-text-neutral pb-2">
            Description
          </span>
          <textarea
            type="text"
            id="description"
            name="description"
            className="bg-background-dark p-2 rounded-md h-40 resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-orange w-full py-3 rounded-md overflow-hidden"
        >
          Create {comName === "" || "r/"}
          {comName}
        </button>
      </form>
    </div>
  );
}

export default CreateCommunity;
