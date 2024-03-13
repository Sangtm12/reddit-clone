import { Link, useParams } from "react-router-dom";
import { communities } from "../../data/communities";
import Button from "../../ui/Button";
import DropDown from "../../ui/DropDown";

function Container({ children }) {
  return (
    <div className="border-b-[1px] border-border py-2  px-4 pb-2">
      {children}
    </div>
  );
}

function CommunityInfo({ className }) {
  const { communityId } = useParams();

  const currentCommunity = communities.find(
    (item) => item.name === communityId
  );

  return (
    <div
      className={`bg-background-dark py-4 m-4 rounded-2xl h-min ${className}`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <Link to={`/r/${communityId}`} className="hover:underline">
            <h4>r/{communityId}</h4>
          </Link>
          <Button className="border-[1px]">Joined</Button>
        </div>
        <p className="font-bold text-text-neutral mt-2">
          {currentCommunity.name}
        </p>
        <p className="text-text-secondary whitespace-pre-line">
          {currentCommunity.description}
        </p>
      </Container>
      <Container>
        <h3 className="font-bold text-text-neutral mt-2">RULES</h3>
        {currentCommunity.rules.map((rule, index) => {
          return (
            <DropDown initialState="" key={rule.title}>
              <DropDown.Title>
                <div className="flex items-center">
                  <span className="pr-6">{index + 1}</span>
                  <h3>{rule.title}</h3>
                </div>
              </DropDown.Title>
              <DropDown.Content>
                <p className="px-2 text-text-secondary">{rule.description}</p>
              </DropDown.Content>
            </DropDown>
          );
        })}
      </Container>
    </div>
  );
}

export default CommunityInfo;
