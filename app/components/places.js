import React from 'react';
import Image from 'next/image'

const Place = ({ name, propertyCount, imageUrl }) => {
    return (
        <div className="relative group ">
            <Image
                src={imageUrl}
                alt={name}
                width={400}
                height={400}
                className="h-full sm:h-96 sm:w-full object-cover rounded-lg mt-5 transition-transform transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-white text-center backdrop-blur-sm">
                    <p className="text-6xl font-bold">{name}</p>
                    <p className="text-xl">{propertyCount} Properties</p>
                </div>
            </div>
        </div>
    );
};

export default Place;
