import React from 'react';
import { Ride } from '../types/rides';

interface RideCardProps {
  ride: Ride;
}

const RideCard: React.FC<RideCardProps> = ({ ride }) => {
  return (
        <div
        className=" flex flex-col justify-end w-60 h-[20rem] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group relative"
        style={{
            backgroundImage: `url(${ride.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        >
        


        {/* Dark gradient overlay for readability */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#262d4b] 
                    group-hover:from-black/70 group-hover:via-black/50 group-hover:to-[#262d4b] 
                    transition-colors duration-300">
        </div>

        {/* Card Content */}
        <div className="relative p-[11px] z-10">
            <div className="flex font-bold items-center text-lg text-gray-200">
            {ride.location}
            </div>
            <h3 className="text-xs mb-1.5 font-slim text-white group-hover:text-yellow-300 transition-colors duration-300">
            {ride.title}
            </h3>
            <p className="text-gray-200 text-xs font-slim leading-relaxed mb-1">
            {ride.description}
            </p>
            <button className="w-9/12 text-xs me-auto bg-yellow-300 text-blue-900 font-extrabold py-2 px-5 rounded-xl hover:bg-yellow-300 transition-all duration-300 hover:shadow-lg hover:scale-105">
            RIDE DETAILS
            </button>
        </div>
        </div>

  );
};

export default RideCard;
