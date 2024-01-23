import { useNavigate } from "react-router-dom";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { FaShower } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";

function HouseListing() {
  const searchResult = {};
  const navigate = useNavigate();
  const houses = [
    {
      id: 1,
      name: "House 1",
      img: img1,
      location: "Lagos",
      price: "200,000",
      bedrooms: "3",
      bathrooms: "2",
      added: "2 days ago",
    },
    {
      id: 2,
      name: "House 2",
      img: img2,
      location: "NYC",
      price: "500,000",
      bedrooms: "3",
      bathrooms: "2",
      added: "3 days ago",
    },
    {
      id: 3,
      name: "House 3",
      img: img3,
      location: "London",
      price: "300,000",
      bedrooms: "3",
      bathrooms: "2",
      added: "4 days ago",
    },
    {
      id: 4,
      name: "House 4",
      img: img4,
      location: "Paris",
      price: "400,000",
      bedrooms: "3",
      bathrooms: "2",
      added: "5 days ago",
    },
  ];

  const renderedList =
    searchResult.length > 0
      ? searchResult.map((house) => {
          return (
            <div
              key={house.id}
              className="bg-white border-2 border-red-600/40 rounded-xl"
            >
              <img
                src={house.img}
                alt="house"
                className="w-[400px] h-40 rounded-t-xl"
              />
              <div className="p-2">
                <p className="font-bold">{house.name}</p>
                <p className=" flex flex-row gap-2 underline underline-offset-1 text-blue-600/50 ">
                  <FaLocationDot className=" text-blue-600/60 mt-1 text-xl " />
                  {house.location}
                </p>
                <p className=" flex flex-row space-x-2">
                  <p>Added:</p>
                  <p className=" text-slate-500">{house.added}</p>
                </p>

                <div className=" grid grid-cols-2 gap-x-2">
                  <div className=" grid grid-rows-2">
                    <p> Bedrooms</p>
                    <p className=" flex flex-row gap-2 text-xl ">
                      <IoBed className=" text-slate-600/50 mt-1" />
                      {house.bedrooms}
                    </p>
                  </div>
                  <div className="grid grid-rows-2">
                    <p>Bathrooms</p>
                    <p className=" flex flex-row gap-2 text-xl ">
                      <FaShower className=" text-slate-600/50 mt-1" />
                      {house.bathrooms}
                    </p>
                  </div>
                  <p className=" text-green-500 font-medium">${house.price}</p>
                </div>
              </div>
            </div>
          );
        })
      : houses.map((house) => {
          return (
            <div
              key={house.id}
              className="bg-white border-2 border-red-600/40 rounded-xl"
            >
              <img
                src={house.img}
                alt="house"
                className="w-[400px] h-40 rounded-t-xl"
              />
              <div className="p-2">
                <p className="font-bold">{house.name}</p>
                <p className=" flex flex-row gap-2 underline underline-offset-1 text-blue-600/50 ">
                  <FaLocationDot className=" text-blue-600/60 mt-1 text-xl " />
                  {house.location}
                </p>
                <p className=" flex flex-row space-x-2">
                  <p>Added:</p>
                  <p className=" text-slate-500">{house.added}</p>
                </p>

                <div className=" grid grid-cols-2 gap-x-2">
                  <div className=" grid grid-rows-2">
                    <p> Bedrooms</p>
                    <p className=" flex flex-row gap-2 text-xl ">
                      <IoBed className=" text-slate-600/50 mt-1" />
                      {house.bedrooms}
                    </p>
                  </div>
                  <div className="grid grid-rows-2">
                    <p>Bathrooms</p>
                    <p className=" flex flex-row gap-2 text-xl ">
                      <FaShower className=" text-slate-600/50 mt-1" />
                      {house.bathrooms}
                    </p>
                  </div>
                  <p className=" text-green-500 font-medium">${house.price}</p>
                </div>
              </div>
            </div>
          );
        });

  return (
    <div>
      <div className=" p-4 text-3xl text-blue-900/85 font-semibold">
      {searchResult && searchResult.length > 0 ? (
        <div className=" text-center">
          <h1>Your Search results</h1>
        </div>
      ) : (
        <div className=" text-center">
          <h1>Recent</h1>
        </div>
      )}
      </div>
      <h1 className=" text-4xl text-center p-2 pb-4 font-bold">
        Properties
      </h1>

      <div className=" flex items-center justify-center gap-4 ">
     
        {renderedList}
      </div>
      <div className="text-center pt-5 mb-10">
        <button className=" text-white  bg-red-800/90 p-4 border-2 border-slate-300/25 rounded-md" onClick={ () => navigate('property') }> View More</button>
      </div>
    </div>
  );
}

export default HouseListing;
