import { Router } from 'next/router';
import { useRouter } from "next/router";
import React, { useState } from 'react';
import background from './../images/home-bg.jpeg'

function Home() {
    const [login, setLogin] = useState(false);
    const router = useRouter();

    return (
        <div className="flex flex-col relative">
            <div className="h-32 bg-cyan-600 w-full flex justify-center items-center">
                <p className="text-6xl font-bold text-white">School.io</p>
            </div>
            {
                login ?
                    <>
                    </>
                    :
                    <a href="#" >
                        <div className="absolute right-4 top-4 py-4 px-6 bg-blue-600 text-white font-bold" onClick={() => setLogin(true)}>Login</div>
                    </a>
            }
            <div className="h-screen bg-[url('../images/home-bg.jpeg')] bg-no-repeat bg-cover flex flex-col justify-center items-center">
                {
                    login ?
                    <>
                    <div className="w-36 py-6 px-8 bg-blue-600 my-4 text-white text-3xl font-bold">Tasks</div>
                    <div className="w-36 py-6 px-8 bg-blue-600 my-4 text-white text-3xl font-bold">Zoom Links</div>
                    <div className="w-36 py-6 px-8 bg-blue-600 my-4 text-white text-3xl font-bold" onClick={() => router.push("covid")}>COVID</div>
                    </>
                    :
                        <a href="#">
                            <div className="py-6 px-8 bg-blue-600 text-white text-3xl font-bold">Get Started</div>
                        </a>
                }
            </div>
        </div>
    )
}

export default Home;
