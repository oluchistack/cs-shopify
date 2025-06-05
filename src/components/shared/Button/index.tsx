import { ReactNode } from "react";

const Button = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: object;
}) => {
  return (
    <div className="flex justify-center my-5">
      <button
        className="bg-[#EE6F4B] hover:bg-[#EE6F4B] w-1/2 text-white font-semibold rounded h-[48px]"
        style={style}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
