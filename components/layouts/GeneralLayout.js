import {useEffect} from "react";
import {useRouter} from "next/router";

const GeneralLayout = ({children}) => {
    const router = useRouter();

    return (
        <>
            <div className="w-full h-24 flex justify-evenly items-center text-blue-600 border-b-2">
                <a onClick={() => router.push("home")}>Schoolio</a>
                <a onClick={() => router.push("tasks")}>Tasks</a>
                <a onClick={() => router.push("zoom-links")}>Zoom links</a>
                <a onClick={() => router.push("covid")}>COVID</a>

            </div>
            <main>{children}</main>
        </>
    );
};

export default GeneralLayout;
