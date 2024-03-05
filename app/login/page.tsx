import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";
import { LoginLayout } from "@/components/layout/LoginLayout";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signInWithOAuth = async () => {
    "use server";
    const supabase = createClient();
    //const supabase = useSupabaseClient();

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
        scopes: "https://www.googleapis.com/auth/calendar",

        redirectTo: `http://localhost:3000/auth/callback`,
      },
    });

    if (data.url) {
      redirect(data.url);
    }

    console.log(data, "data ", error, "error");

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/protected");
  };

  return (
    <LoginLayout>
      <div className="flex-1 min-h-screen flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
        <Link
          href="/"
          className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>{" "}
          Back
        </Link>

        <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
          <SubmitButton
            formAction={signInWithOAuth}
            className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
            pendingText="Signing In..."
          >
            Google auth
          </SubmitButton>
          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
        </form>
      </div>
    </LoginLayout>
  );
}
