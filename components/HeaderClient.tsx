"use client";
import CartIcon from "./CartIcon";
import FavoriteButton from "./FavoriteButton";
import SearchBar from "./SearchBar1";
import SignIn from "./SignIn";
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";

type Props = {
  isSignedIn: boolean;
};

const HeaderClient = ({ isSignedIn }: Props) => (
  <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
    <SearchBar />
    <CartIcon />
    <FavoriteButton />
    <ClerkLoaded>
      <SignedIn>
        <UserButton />
      </SignedIn>
      {!isSignedIn && <SignIn />}
    </ClerkLoaded>
  </div>
);

export default HeaderClient;