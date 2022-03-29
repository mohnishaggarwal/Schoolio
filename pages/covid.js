import Image from "next/image";
import GeneralLayout from './../components/layouts/GeneralLayout';
import CovidGraphic from "./../images/covid.jpeg";

const classes = ["Parson's Elementary 4th Grade", "Parson's Elementary 5th Grade"];
const covidCount = 4;
const classRoster = [
    {
        name: "John Appleseed",
        notes: "",
        exposure: true
    },
    {
        name: "John Appleseed",
        notes: "",
        exposure: true
    },
    {
        name: "John Appleseed",
        notes: "",
        exposure: true
    },
    {
        name: "John Appleseed",
        notes: "",
        exposure: false
    },
    {
        name: "John Appleseed",
        notes: "",
        exposure: false
    }, {
        name: "John Appleseed",
        notes: "",
        exposure: false
    },
    {
        name: "John Appleseed",
        notes: "",
        exposure: false
    },
    {
        name: "John Appleseed",
        notes: "",
        exposure: false
    },
    {
        name: "John Appleseed",
        notes: "",
        exposure: false
    },
    {
        name: "John Appleseed",
        notes: "",
        exposure: false
    },
    {
        name: "John Appleseed",
        notes: "",
        exposure: false
    },
    {
        name: "John Appleseed",
        notes: "",
        exposure: false
    },
    {
        name: "John Appleseed",
        notes: "",
        exposure: false
    },

];

function Covid() {
    return (
        <div className="mx-16">
            <GeneralLayout/>
            <div className="flex justify-between mt-8">
                <div className="flex">
                    {classes.map((classIn) => (
                        <p className="font-bold text-lg text-yellow-500 mr-8">{classIn}</p>
                    ))}
                </div>
                <div className="flex">
                    <p className="font-bold text-lg mr-2">{covidCount}</p>
                    <Image alt="Gitlab" src={CovidGraphic} width={30} height={10}/>
                </div>
            </div>

            <p className="font-bold text-blue-500 mt-8">Class Roster</p>
            <hr className="mt-2"/>

            <div>
                {classRoster.map((student) => (
                    <div className="flex border-2">
                        <div className="border-2 w-1/4">
                            <p>{student.name}</p>
                        </div>
                        <div className="border-2 w-3/4">
                            <p>Notes: {student.notes}</p>
                        </div>
                        <div className="border-2 w-1/4">
                            {
                                student.exposure ?
                                    <div className="flex items-center">
                                        <button className="w-32 py-2 bg-blue-500">
                                            <p className="text-white">Mark Exposure</p>
                                        </button>
                                        <p className="font-bold text-red-600 ml-2">Positive</p>
                                    </div>
                                    :
                                    <div className="flex items-center">
                                        <button className="w-32 py-2 bg-blue-500">
                                            <p className="text-white">Mark Clear</p>
                                        </button>
                                        <p className="font-bold text-blue-300 ml-2">Negative</p>
                                    </div>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Covid;
