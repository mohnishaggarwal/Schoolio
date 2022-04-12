import { useEffect } from "react";
import router from "next/router";

const GeneralLayout = ({ children }) => {

  return (
    <>
      <div className="w-full h-24 flex justify-evenly items-center text-blue-600 border-b-2">
        <a href="http://localhost:3000/home#">Schoolio</a>
        <a href="http://localhost:3000/tasks">Tasks</a>
        <a href="">Zoom links</a>
        <a href="http://localhost:3000/covid">COVID</a>

      </div>
      <main>{children}</main>
    </>
  );
};

export default GeneralLayout;
