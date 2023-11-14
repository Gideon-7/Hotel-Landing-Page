import Image from 'next/image'
import Header from "@/app/components/header";
import Place from "@/app/components/places";

export default function Home() {

    const places = [
        {
            name: 'Mumbai',
            propertyCount: 25,
            imageUrl: '/mumbai.jpg',
        },
        {
            name: 'Delhi',
            propertyCount: 18,
            imageUrl: '/delhi.jpg',
        },
        {
            name: 'Bangalore',
            propertyCount: 30,
            imageUrl: '/bangalore.jpg',
        },
    ];

  return (
    <div>
      <Header/>
        <div className="flex-row sm:flex sm:justify-center sm:items-center sm:gap-4 sm:space-x-4 m-5 sm:m-20 md:mt-32 mt-56">
            {places.map((place, index) => (
                <Place
                    key={index}
                    name={place.name}
                    propertyCount={place.propertyCount}
                    imageUrl={place.imageUrl}
                />
            ))}
        </div>
    </div>
  )
}
