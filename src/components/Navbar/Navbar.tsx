import Logo from "./Logo";
import Container from "../Container";
import UserMenu from "./UserMenu";
import Language from "./Language";

interface NavbarProps {
  currentUser?: any;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="">
      <div className="w-full bg-white border-b-[1px] z-10 shadow-sm">
        <div
          className="
                        py-4 
                        
                    "
        >
          <Container>
            <div
              className="
                            flex 
                            flex-row 
                            items-center 
                            justify-between
                            gap-3
                            md:gap-0
                        "
            >
              <Logo />
              <UserMenu />
              <Language />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
