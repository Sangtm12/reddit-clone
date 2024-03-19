import { GrAnnounce } from "react-icons/gr";

function CreateRules() {
  return (
    <div className="bg-background-dark p-4 m-4 rounded-2xl">
      <h4 className="flex items-center gap-4 text-2xl mb-4">
        <GrAnnounce className="text-4xl" />
        Posting to Reddit
      </h4>
      <div className="py-4 border-t-[1px] border-border">
        1. Remember the human
      </div>
      <div className="py-4 border-t-[1px] border-border">
        2. Behave like you would in real life
      </div>
      <div className="py-4 border-t-[1px] border-border">
        3. Look for the original source of content
      </div>
      <div className="py-4 border-t-[1px] border-border">
        4. Search for duplicates before posting
      </div>
      <div className="py-4 border-t-[1px] border-border">
        5. Read the community’s rules
      </div>
      <div className="py-4 border-t-[1px] border-border">
        #. close fn not handled perfectly on children of ref
      </div>
      <div className="py-4 border-t-[1px] border-border">
        #. Close button messing things up for some reason
      </div>
    </div>
  );
}

export default CreateRules;
