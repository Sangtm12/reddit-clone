import { users } from "../../data/users";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { useParams } from "react-router-dom";
import Modal from "../../ui/Modal";
import ChangeUsername from "./ChangeUsername";
import ChangePassword from "./ChangePassword";
import Logout from "./Logout";

function SettingRow({ children, title, description, onClick }) {
  return (
    <div
      className="px-4 h-16 w-full border-b-[1px] border-border flex justify-between items-center hover:bg-background-hover rounded text-text-secondary select-none"
      onClick={onClick}
    >
      <div>
        <p className=" text-white font-semibold text-base">{title}</p>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}

function UserSettings() {
  const { userId } = useParams();

  const currentUser = users.find((user) => user.name === userId);

  return (
    <div>
      <Modal>
        <Modal.Open opens="username">
          <SettingRow title="Username" description={currentUser.name}>
            <p className="text-text-secondary flex items-center gap-1">
              Change <MdKeyboardArrowRight />
            </p>
          </SettingRow>
        </Modal.Open>
        <Modal.Open opens="password">
          <SettingRow
            title="Password"
            description="Passwords must be at least 8 characters long"
          >
            <p className="text-text-secondary flex items-center gap-1">
              Change <MdKeyboardArrowRight />
            </p>
          </SettingRow>
        </Modal.Open>
        <Modal.Open opens="logout">
          <SettingRow title="Logout">
            <FiLogOut className="text-xl" />
          </SettingRow>
        </Modal.Open>
        <Modal.Window name="username">
          <ChangeUsername />
        </Modal.Window>
        <Modal.Window name="password">
          <ChangePassword />
        </Modal.Window>
        <Modal.Window name="logout">
          <Logout />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default UserSettings;
