import GeneralLayout from "../components/layouts/GeneralLayout";
import Image from 'next/image';
import pikachu from './../images/pikachu.png';


function Profile() {
    return(
        <div className="mx-16">
            <GeneralLayout/>
            <div className="flex mx-32 justify-between">
                <div className="my-8 w-1/3">
                    <h1 className="text-3xl font-bold my-8">Profile</h1>
                    <h1 className="text-3xl font-bold my-8">Welcome, Alex</h1>
                    <div className="flex">
                        <p className="text-xl font-bold mt-2">Name:&nbsp;</p><p className="text-xl mt-2">Alex, Teacher</p>
                    </div>
                    <div className="flex">
                        <p className="text-xl font-bold">Email:&nbsp;</p><p className="text-xl">alex@schools.edu</p>
                    </div>
                    <div className="flex">
                        <p className="text-xl font-bold my-2">Name:&nbsp;</p><p className="text-xl my-2">Alex, Teacher</p>
                    </div>
                    <div className="flex my-4 justify-between items-center">
                        <button className="py-2 px-8 bg-red-500 rounded border-xl w-48">
                            <p className="font-semibold text-lg">Delete Profile</p>
                        </button>
                        <button className="py-2 px-8 bg-green-500 rounded border-xl w-48">
                            <p className="font-semibold text-lg">Edit Profile</p>
                        </button>
                    </div>
                </div>
                <div className="mb-8 w-1/3">
                    <div>
                        <Image src={pikachu} height={350} width={300}/>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex my-4 justify-evenly items-center">
                <p className="text-xl font-medium">Classes:</p>
                <p className="text-xl font-medium">Alex&apos;s Elementary 4th Grade</p>
                <p className="text-xl font-medium">Alex&apos;s Elementary 5th Grade</p>
            </div>
            <div className="grid grid-cols-2 justify-items-center">
                <button className="py-4 px-12 bg-blue-500 rounded border-xl my-8 w-96">
                    <p className="font-semibold text-lg">Import Class Roster From CSV</p>
                </button>
                <button className="py-4 px-12 bg-blue-500 rounded border-xl my-8 w-96">
                    <p className="font-semibold text-lg">Import Class Roster From CSV</p>
                </button>
                <button className="py-4 px-12 bg-red-500 rounded border-xl my-8 w-96">
                    <p className="font-semibold text-lg">Delete Class</p>
                </button>
                <button className="py-4 px-12 bg-red-500 rounded border-xl my-8 w-96">
                    <p className="font-semibold text-lg">Delete Class</p>
                </button>
            </div>
        </div>
    );
}

export default Profile;