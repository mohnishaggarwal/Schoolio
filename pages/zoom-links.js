import {useState} from "react";
import GeneralLayout from './../components/layouts/GeneralLayout';
import AddLinkModal from "../components/AddLinkModal";

const teacherName = "Alex";

function ZoomLinks() {
    const [links, setLinks] = useState({
        monday: [
            {
                label: "Morning Admin Meeting",
                link: "https://juni.zoom.us/j/93936069901"
            },
            {
                label: "Afternoon Teacher Meeting",
                link: "https://juni.zoom.us/j/93936069901"
            }
        ],
        friday: [
            {
                label: "Poker Night with the Squad",
                link: "https://juni.zoom.us/j/93936069901"
            }
        ]
    });
    const [modalOpen, setModelOpen] = useState(false);

    return (
        <div className="mx-16">
            <GeneralLayout/>

            <div className="flex justify-between mt-8">
                <p className="font-bold text-xl text-yellow-500 mr-8">
                    Hello {teacherName}, Today is Wednesday March 31, 2022
                </p>
                <button onClick={() => setModelOpen(true)} className="rounded-lg bg-green-500 py-2 px-4">
                    <p className="font-semibold">Add Link</p>
                </button>
            </div>

            <div className="mt-4">
                <div>
                    <p className="font-bold text-blue-500 my-2 text-xl">Monday</p>
                    <hr/>
                    <div>
                        {links.monday.map((link, index) => (
                            <div key={index}>
                                <p className="bg-blue-500 text-yellow-500 p-2 w-60 my-2">{link.label}</p>
                                <div key={index} className="flex border-2 my-1 justify-between px-4 py-1">
                                    <a href={link.link} className="text-blue-500">{link.link}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="font-bold text-blue-500 my-2 text-xl">Friday</p>
                    <hr/>
                    <div>
                        {links.friday.map((link, index) => (
                            <div key={index}>
                                <p className="bg-blue-500 text-yellow-500 p-2 w-60 my-2">{link.label}</p>
                                <div key={index} className="flex border-2 my-1 justify-between px-4 py-1">
                                    <p className="text-blue-500">{link.link}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <AddLinkModal open={modalOpen} close={() => setModelOpen(false)} setLinks={setLinks}
                             links={links}/>
        </div>
    )
}

export default ZoomLinks;
