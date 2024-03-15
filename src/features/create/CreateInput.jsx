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
        <SelectCommunity community={currentCommunity} />
      </form>
    </div>
  );
}

export default CreateInput;
