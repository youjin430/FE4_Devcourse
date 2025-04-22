import { twMerge } from "tailwind-merge";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <>
      <button
        className={twMerge(
          "w-[77px] h-[44px] text-white bg-[#4f4f4f] rounded-lg cursor-pointer"
        )}
      >
        {children}
      </button>
    </>
  );
}
