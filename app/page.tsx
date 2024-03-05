import Image from "next/image";
import { LoginLayout } from "@/components/layout/LoginLayout";
import Link from "next/link";

export default async function Index() {
  return (
    <LoginLayout>
      <div className="flex justify-center w-full max-w-[1200px] items-center gap-9">
        <Link
          href={"/login?type=doctor"}
          className="max-w-[400px] py-4 w-[80%] mx-auto aspect-square border-2 border-secondary rounded-xl hover:scale-105 transition-all ease-in-out"
        >
          <Image
            src={"/doctor.png"}
            alt="Doctor"
            width={1080}
            height={1080}
            className="object-contain w-full h-full"
          />
          <h3 className="mt-2">Login as doctor</h3>
        </Link>
        <Link
          href={"/login?type=patient"}
          className="max-w-[400px] py-4 w-[80%] mx-auto aspect-square border-2 border-secondary rounded-xl hover:scale-105 transition-all ease-in-out"
        >
          <Image
            src={"/patient.png"}
            alt="Doctor"
            width={1080}
            height={1080}
            className="object-contain w-full h-full"
          />
          <h3 className="mt-2">Login as patient</h3>
        </Link>
      </div>
    </LoginLayout>
  );
}
