import { useParams } from "react-router-dom";
import { communities } from "../../data/communities";
import SelectCommunity from "./SelectCommunity";

function CreateInput() {
  const { communityId } = useParams();
  const currentCommunity = communities.filter(
    (com) => com.name === communityId
  )[0];

  return (
    <div className="p-4">
      <h3 className="pb-4 text-white text-xl border-b-[1px] border-border">
        Create a post
      </h3>
      <form>
        <SelectCommunity community={currentCommunity?.name} />
        <label htmlFor="title" className="block mt-4 text-text-secondary">
          TITLE
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="w-full bg-background-dark rounded p-2 mt-2"
        />

        <label htmlFor="text" className="block mt-4 text-text-secondary">
          TEXT
        </label>
        <textarea
          className="w-full mt-2 bg-background-dark rounded-lg p-4 h-72"
          id="text"
          name="text"
        ></textarea>
        <div className="flex justify-between">
          <button
            type="button"
            className="bg-background-light py-3 px-4 mt-5 font-bold rounded block"
          >
            Upload image
          </button>
          <button
            type="submit"
            className="bg-blue py-3 px-4 mt-5 font-bold rounded block"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateInput;
