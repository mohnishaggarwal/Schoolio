import Image from "next/image";
import GeneralLayout from './../components/layouts/GeneralLayout';
import RosterDisplay from "../components/layouts/RosterDisplay";
import CovidGraphic from "./../images/covid.jpeg";
import first from './../images/first.jpg';
import second from './../images/second.jpg';
import third from './../images/third.jpg';
import { useRouter } from "next/router";
import { Router } from 'next/router';

function Demo3() {
    const router = useRouter();
    return (
        <Image src={third} onClick={() => router.push("home")}/>
    )
}

export default Demo3;
