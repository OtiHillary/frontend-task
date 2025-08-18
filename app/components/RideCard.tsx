import React from 'react';
import { MapPin } from 'lucide-react';
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
        


        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>

        {/* Card Content */}
        <div className="relative p-[11px] z-10">
            <div className="flex items-center text-sm text-gray-200 mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            {ride.location}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
            {ride.title}
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed mb-4">
            {ride.description}
            </p>
            <button className="w-10/12 text-xs me-auto bg-yellow-300 text-blue-900 font-bold py-3 px-6 rounded-xl hover:bg-yellow-300 transition-all duration-300 hover:shadow-lg hover:scale-105">
            RIDE DETAILS
            </button>
        </div>
        </div>

  );
};

export default RideCard;
