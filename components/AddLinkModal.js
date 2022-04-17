import {Fragment, useCallback, useEffect, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import {useRouter} from "next/router";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const AddLinkModal = (props) => {
    const [selectDays, setSelectDays] = useState([]);
    const [link, setLink] = useState("");
    const [label, setLabel] = useState("");
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

    function hasDay(option) {
        for (const day of selectDays) {
            if (day === option) return true
        }
        return false;
    }

    function handleSubmit() {
        const day = selectDays[0];
        let dayFormat = "";
        let tempLinks = props.links

        if (day === "Monday") {
            dayFormat = "monday";
        } else if (day === "Friday") {
            dayFormat = "friday";
        }

        closeModal();
        tempLinks[dayFormat].push({ label: label, link: link });
        props.setLinks(tempLinks);
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
                                        What link would you like to add, Alex?
                                    </Dialog.Title>
                                    <div className="grid grid-cols-3 justify-items-center">
                                        {
                                            days.map((day, index) => (
                                                <button key={index} onClick={() => handleDayClick(day)}
                                                        className={classNames("hover:bg-green-700 py-2 w-32 px-4 m-2 rounded-lg", hasDay(day) ? "bg-gray-400" : "bg-green-500")}>
                                                    {day}
                                                </button>
                                            ))
                                        }
                                    </div>

                                    <div className="flex justify-center items-center my-2 mb-4">
                                        <p className="mr-2 font-semibold">Label: </p>
                                        <input
                                            type="text"
                                            onChange={(e) => {
                                                setLabel(e.target.value);
                                            }}
                                            value={label}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="flex justify-center items-center my-2 mb-4">
                                        <p className="mr-2 font-semibold">Link: </p>
                                        <input
                                            type="text"
                                            onChange={(e) => {
                                                setLink(e.target.value);
                                            }}
                                            value={link}
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

export default AddLinkModal;