"use client";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

export const LoginForm = () => {
  return (
    <div>
      <Button
        onClick={() => {
          signIn("google");
        }}
      >
        Login with google
      </Button>
    </div>
  );
};

export default LoginForm;
