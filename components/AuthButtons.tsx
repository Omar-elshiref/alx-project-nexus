"use client";

import { ClerkLoaded, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import SignIn from "./SignIn";

export default function AuthButtons() {
  return (
    <ClerkLoaded>
      <SignedIn>
        <UserButton  />
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </ClerkLoaded>
  );
}