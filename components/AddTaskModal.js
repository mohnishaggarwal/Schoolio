import {Fragment, useCallback, useEffect, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import {useRouter} from "next/router";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
const times = ["Before Class", "During Class", "After Class"];

const AddTaskModal = (props) => {
    const [selectDays, setSelectDays] = useState([]);
    const [input, setInput] = useState("");
    const [selectTime, setSelectTime] = useState([]);
    const closeModal = useCallback(() => {
        props.close();
    }, [props]);

    function handleDayClick(day) {
        let wasThere = false;
        for (const dayIn of selectDays) {
            if (dayIn === day) {
                setSelectDays(selectDays.filter((dayFilter) => dayFilter !== day));
                wasThere = true;
            }
        }
        if (!wasThere) {
            setSelectDays([...selectDays, day]);
        }
    }

    function handleTimeClick(time) {
        let wasThere = false;
        for (const timeIn of selectTime) {
            if (timeIn === time) {
                setSelectTime(selectTime.filter((timeFilter) => timeFilter !== time));
                wasThere = true;
            }
        }
        if (!wasThere) {
            setSelectTime([...selectTime, time]);
        }
    }

    function hasDay(option) {
        for (const day of selectDays) {
            if (day === option) return true
        }
        return false;
    }

    function hasTime(option) {
        for (const time of selectTime) {
            if (time === option) return true
        }
        return false;
    }

    function handleSubmit() {
        const time = selectTime[0];
        const day = selectDays[0];
        let dayIdx = 0;
        let timeSchedule = "";
        const tempSchedule = props.schedule;

        if (time === "Before Class") {
            timeSchedule = "beforeClass";
        } else if (time === "During Class") {
            timeSchedule = "duringClass";
        } else if (time === "After Class") {
            timeSchedule = "afterClass";
        }

        if (day === "Monday") {
            dayIdx = 0;
        } else if (day === "Tuesday") {
            dayIdx = 1;
        } else {
            dayIdx = 2;
        }

        closeModal();
        tempSchedule[dayIdx][timeSchedule].push(input);
        props.setSchedule(tempSchedule);
    }

    return (
        <Transition.Root show={props.open} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={closeModal}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div
                            className="inline-block align-bottom bg-white rounded-lg px-8 pt-5 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6">
                            <div>
                                <div className="mt-3 text-center sm:mt-5">
                                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                        What task would you like to add, Alex?
                                    </Dialog.Title>
                                    <div className="grid grid-cols-3 justify-items-center">
                                        {
                                            days.map((day, index) => (
                                                <button key={index} onClick={() => handleDayClick(day)} className={classNames("hover:bg-green-700 py-2 w-32 px-4 m-2 rounded-lg", hasDay(day) ? "bg-gray-400" : "bg-green-500")}>
                                                    {day}
                                                </button>
                                            ))
                                        }
                                    </div>
                                    <div className="grid grid-cols-3 justify-items-center">
                                        {
                                            times.map((time, index) => (
                                                <button key={index} onClick={() => handleTimeClick(time)} className={classNames("hover:bg-yellow-700 py-2 w-32 px-4 m-2 rounded-lg", hasTime(time) ? "bg-gray-400" : "bg-yellow-500")}>
                                                    {time}
                                                </button>
                                            ))
                                        }
                                    </div>
                                    <div className="flex justify-center items-center my-2 mb-4">
                                        <input
                                            type="text"
                                            onChange={(e) => {
                                                setInput(e.target.value);
                                            }}
                                            value={input}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={handleSubmit}
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Add Task
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default AddTaskModal;