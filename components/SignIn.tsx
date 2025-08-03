"use client";
import { SignInButton } from "@clerk/nextjs"

const SignIn = () => {
  return (
    <SignInButton mode="modal" >
            <button className="text-sm font-semibold hover:text-darkColor text-lightColor hoverEffect">
                Log In
            </button>
    </SignInButton>
  )
}

export default SignIn