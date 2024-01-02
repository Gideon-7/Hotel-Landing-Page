'use client'
import React, {useState} from 'react';
import SearchBar from "@/app/components/searchBar";
import Link from "next/link";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <header className="bg-gradient-to-r from-blue-500 to-blue-700 h-[500px] flex items-center justify-center text-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">
                    Enjoy Your Holiday at City's Best Hotels
                </h1>
                <p className="text-lg">
                    Search Best Hotels in your favourite destination
                </p>
                <button className="bg-white duration-500 text-blue-700 px-5 py-4 mt-4 rounded-2xl hover:bg-blue-700 hover:text-white" onClick={handleModalToggle}>
                    Sign/Register
                </button>
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
                        <div className="bg-white text-black p-4 rounded-lg">
                            <p className="text-lg font-bold mb-2">Sign In | Register</p>
                            {/* Your form elements for user id and password */}
                            <form className="grid grid-rows-3">
                                <label>
                                    <input className=" p-3 w-72 border-b-blue-950 rounded-xl bg-white border-2" placeholder="Email" type="text" />
                                </label>
                                <label>
                                    <input className="p-3 w-72 border-b-blue-950 rounded-xl bg-white border-2" placeholder="Password" type="password" />
                                </label>
                                <button
                                    type="submit"
                                    className="bg-blue-800 hover:bg-gray-500 duration-500 text-white p-2 mt-4 rounded"
                                >
                                    Submit
                                </button>
                            </form>
                            <div className="grid grid-rows-2"><Link href="#">Register Here</Link>
                                <button
                                    className="text-blue-500 mt-2"
                                    onClick={handleModalToggle}
                                >
                                    Close
                                </button>
                            </div>

                        </div>
                    </div>
                )}
                <SearchBar/>
            </div>
        </header>
    );
};

export default Header;
