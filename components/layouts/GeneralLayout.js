import { useEffect } from "react";
import router from "next/router";

const GeneralLayout = ({ children }) => {

  return (
    <>
      <div className="w-full h-24 flex justify-evenly items-center text-blue-600 border-b-2">
        <a href="">Schoolio</a>
        <a href="">Tasks</a>
        <a href="">Zoom links</a>
        <a href="">COVID</a>

      </div>
      <main>{children}</main>
    </>
  );
};

export default GeneralLayout;
