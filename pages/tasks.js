import {useState} from "react";
import GeneralLayout from './../components/layouts/GeneralLayout';
import addTaskModalTsx from "../components/AddTaskModal.tsx";
import AddTaskModalTsx from "../components/AddTaskModal.tsx";

const teacherName = "Alex";

function Tasks() {
    const [schedule, setSchedule] = useState([
        {
            day: "Monday",
            "beforeClass": ["Prepare Verbs Lesson Slides", "Write Algebra HW"],
            "duringClass": ["Prepare Verbs Lesson Slides", "Write Algebra HW"],
            "afterClass": ["Grade Algebra HW"]
        },
        {
            day: "Tuesday",
            "beforeClass": ["Prepare Nouns Lesson"],
            "duringClass": [],
            "afterClass": ["Grade nouns HW"]
        },
        {
            day: "Wednesday",
            "beforeClass": [],
            "duringClass": [],
            "afterClass": ["Prepare Break HW"]
        }
    ]);
    const [modalOpen, setModelOpen] = useState(false);

    return (
        <div className="mx-16">
            <GeneralLayout/>

            <div className="flex justify-between mt-8">
                <p className="font-bold text-xl text-yellow-500 mr-8">
                    Hello {teacherName}, Today is Wednesday March 31, 2022
                </p>
                <button onClick={() => setModelOpen(true)} className="rounded-lg bg-green-500 py-2 px-4">
                    <p className="font-semibold">Add Task</p>
                </button>
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
            <AddTaskModalTsx open={modalOpen} close={() => setModelOpen(false)} setSchedule={setSchedule} schedule={schedule} />
        </div>
    )
}

export default Tasks;
