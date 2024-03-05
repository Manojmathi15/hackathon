import { ReactNode } from "react";

export const LoginLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center h-full w-full">
      {children}
    </main>
  );
};
