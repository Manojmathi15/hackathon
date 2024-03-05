"use client";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { Dispatch, SetStateAction } from "react";

export const Login = ({
  isSignUp,
}: {
  isDoctor: boolean;
  isSignUp: boolean;
  setIsSignUp: Dispatch<SetStateAction<boolean>>;
}) => {
  const supabase = new createClient();
  const handleGoogleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
    console.log(data, error);
  };
  return (
    <div>
      <h2 className="h-full ">{isSignUp ? "Sign up" : "Sign in"}</h2>
      <button
        onClick={() => {
          handleGoogleSignIn();
        }}
      >
        Sign In with google
      </button>
    </div>
  );
};
