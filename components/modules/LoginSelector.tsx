import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export const LoginSelector = ({
  setSelected,
  setIsDoctor,
}: {
  setSelected: Dispatch<SetStateAction<boolean>>;
  setIsDoctor: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex justify-center flex-wrap items-center gap-9">
      <button
        className="max-w-[400px] py-4 w-[80%] mx-auto aspect-square border-2 border-secondary rounded-xl hover:scale-105 transition-all ease-in-out"
        onClick={() => {
          setIsDoctor(true);
          setSelected(true);
        }}
      >
        <Image
          src={"/doctor.png"}
          alt="Doctor"
          width={1080}
          height={1080}
          className="object-contain w-full h-full"
        />
        <h3 className="mt-2">Login as doctor</h3>
      </button>
      <button
        className="max-w-[400px] py-4 w-[80%] mx-auto aspect-square border-2 border-secondary rounded-xl hover:scale-105 transition-all ease-in-out"
        onClick={() => {
          setIsDoctor(false);
          setSelected(true);
        }}
      >
        <Image
          src={"/patient.png"}
          alt="Doctor"
          width={1080}
          height={1080}
          className="object-contain w-full h-full"
        />
        <h3 className="mt-2">Login as patient</h3>
      </button>
    </div>
  );
};
