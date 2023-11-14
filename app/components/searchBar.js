import React, {useState} from 'react';

const SearchBar = () => {

    const [destination, setDestination] = useState('');
    const [dateRange, setDateRange] = useState('');
    const [dateToRange, setDateToRange] = useState('');
    const [adult, setAdult] = useState('');
    const [child, setChild] = useState('');
    const [room, setRoom] = useState('');

    const handleSearch = () => {
        console.log('Searching...');
    };

    return (
        <div>
            <div
                className="mt-8 border-amber-300 border-4 absolute top-[430px] bg-white text-blue-900 rounded-lg p-4 lg:flex md:items-center">
                <input
                    type="text"
                    placeholder="Where are you going?"
                    className="border-r-2 border-gray-300 md:p-2 outline-none flex-grow p-5"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
                <input
                    type="date"
                    placeholder="12-11-2023 "
                    className="border-none outline-none py-5 md:p-2"
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                />
                <input
                    type="date"
                    placeholder="12-11-2023 "
                    className="border-r-2 border-gray-300 outline-none p-5 md:p-2"
                    value={dateToRange}
                    onChange={(e) => setDateToRange(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Adults"
                    className="border-r-2 border-gray-300 w-20 outline-none p-5 md:p-2 flex-grow"
                    value={adult}
                    onChange={(e) => setAdult(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Children"
                    className="border-r-2 border-gray-300 w-20 outline-none p-5 md:p-2 flex-grow"
                    value={child}
                    onChange={(e) => setChild(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Rooms"
                    className="border-r-2 border-gray-300 w-20 outline-none p-5 md:p-2 flex-grow"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                />
                <button
                    className="bg-blue-700 duration-500 text-white md:px-5 px-7 py-2  ml-2 rounded-2xl hover:bg-gray-400"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
