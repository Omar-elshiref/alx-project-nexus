import { currentUser } from "@clerk/nextjs/server";
import Container from "./Container";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import HeaderClient from "./HeaderClient";

const Header = async () => {
  const user = await currentUser();
  return (
    <header className="bg-white py-5 border-b border-b-black/20">
      <Container className="flex items-center justify-between text-lightColor">
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start">
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        <HeaderClient isSignedIn={!!user} />
      </Container>
    </header>
  );
};

export default Header;