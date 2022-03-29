import Image from "next/image";
import GeneralLayout from './../components/layouts/GeneralLayout';

const teacherName = "Alex";

const schedule = [
    {
        day: "Monday",
        beforeClass: ["Prepare Verbs Lesson Slides", "Write Algebra HW"],
        duringClass: ["Prepare Verbs Lesson Slides", "Write Algebra HW"],
        afterClass: ["Grade Algebra HW"]
    },
    {
        day: "Tuesday",
        beforeClass: ["Prepare Nouns Lesson"],
        duringClass: [],
        afterClass: ["Grade nouns HW"]
    },
    {
        day: "Wednesday",
        beforeClass: [],
        duringClass: [],
        afterClass: ["Prepare Break HW"]
    },
]

function Tasks() {
    return (
        <div className="mx-16">
            <GeneralLayout/>

            <div className="flex justify-between mt-8">
                <p className="font-bold text-xl text-yellow-500 mr-8">
                    Hello {teacherName}, Today is Wednesday March 31, 2022
                </p>
            </div>

            <div className="mt-4">
                {schedule.map((day, index) => (
                    <div key={index}>
                        <p className="font-bold text-blue-500 my-2 text-xl">{day.day}</p>
                        <hr />
                        <div>
                            <p className="bg-blue-500 text-yellow-500 w-28 p-2 my-2">Before Class</p>
                            {day.beforeClass.map((task, index) => (
                                <div key={index} className="flex border-2 my-1 justify-between px-4 py-1">
                                    <p className="text-blue-500">{task}</p>
                                    <p className="font-bold text-yellow-500">{index + 1}</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            <p className="bg-blue-500 text-yellow-500 w-28 p-2 my-2">During Class</p>
                            {day.duringClass.map((task, index) => (
                                <div key={index} className="flex border-2 my-1 justify-between px-4 py-1">
                                    <p className="text-blue-500">{task}</p>
                                    <p className="font-bold text-yellow-500">{index + 1}</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            <p className="bg-blue-500 text-yellow-500 w-28 p-2 my-2">After Class</p>
                            {day.afterClass.map((task, index) => (
                                <div key={index} className="flex border-2 my-1 justify-between px-4 py-1">
                                    <p className="text-blue-500">{task}</p>
                                    <p className="font-bold text-yellow-500">{index + 1}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tasks;
