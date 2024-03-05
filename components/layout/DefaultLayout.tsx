import { ReactNode } from "react";
import { Navbar } from "../modules/Navbar";

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="bg-background text-text mt-10">{children}</main>
    </>
  );
};
