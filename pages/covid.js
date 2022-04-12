import Image from "next/image";
import GeneralLayout from './../components/layouts/GeneralLayout';
import RosterDisplay from "../components/layouts/RosterDisplay";
import CovidCount from "../components/layouts/CovidCount";
import CovidGraphic from "./../images/covid.jpeg";

const classes = ["Parson's Elementary 4th Grade"];
const covidCount = 4;
var classRoster = [];

function Covid() {
    var response = getClass();
    console.log(response);
    return (
        <div className="mx-16">
            <GeneralLayout/>
            <RosterDisplay/>
        </div>
    )
}

export async function getClass() {

    try{
        const response = await fetch('/api/class/get_roster?class_id=Class%202');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export default Covid;
