import React from "react";
import { Map, Camera, Gift } from "lucide-react";
import Image from "next/image";
import { Category } from "../types/rides";

interface CategorySidebarProps {
  activeCategory: "land" | "water" | "kids";
  onCategoryChange: (category: "land" | "water" | "kids") => void;
  categories: Category[];
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({
  activeCategory,
  onCategoryChange,
  categories,
}) => {
  const categoryIcons = {
    land: <Map className="w-10 h-10" />,
    water: <Camera className="w-10 h-10" />,
    kids: <Gift className="w-10 h-10" />,
  };

  // Define angular positions for each category (degrees on circle)
  const angles: Record<"land" | "water" | "kids", number> = {
    land: -39,   // top-right
    water: 0,    // right-center
    kids: 39,    // bottom-right
  };
  const translate: Record<"land" | "water" | "kids", number> = {
    land: 247,   // top-right
    water: 255,    // right-center
    kids: 242,    // bottom-right
  };

  const rotateAngle = {
    land: -45,
    water: 0,
    kids: 47
  }

  const translateAngle = {
    land: 255,
    water: 250,
    kids: 250
  }


  return (
    <div className="relative w-[800px] h-full flex items-center justify-center -translate-x-[55%]">
      {/* Outer yellow arc */}
      <div className="absolute w-[500px] h-[500px] rounded-full 
                      bg-gradient-to-b from-yellow-300 via-yellow-200 to-white"></div>

      {/* Inner dark circle */}
      <div className="absolute w-[340px] h-[340px] rounded-full bg-[#262d4b]"></div>
        
        {/* circle */}
        {/* Active highlight circle that follows the tab */}
        <div
          className="absolute rounded-full border-[8px] border-[#e6e658] shadow-xl w-33 h-33 bg-white transition-transform duration-500"
          style={{
            transform: `rotate(${rotateAngle[activeCategory] }deg) translate(${Number(translateAngle[activeCategory]) - 44 }px) rotate(${Number(rotateAngle[activeCategory])}deg)`,
          }}
        ></div>


      {/* Categories along the ring */}
      {categories.map((category) => {
        const angle = angles[category.key];
        const radius = translate[category.key]; // distance from center (between the two circles)

        return (
          <div
            key={category.key}
            style={{
              transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
            }}
            className="absolute flex items-center space-x-4 cursor-pointer transition-all duration-300"
            onClick={() => onCategoryChange(category.key)}
          >
            {/* Icon Circle */}
            <div
              className={`flex items-center justify-center w-30 h-30 rounded-full transition-all duration-300 ${
                activeCategory === category.key
                  ? "scale-110"
                  : "hover:scale-105"
              }`}
            >
              <Image src={category.image} alt={category.name} width={70} height={70} className="rounded-full" />
            </div>

            {/* Text */}
            <div className="flex flex-col">
              <h3 className="text-lg font-thin text-white">
                {category.name}
              </h3>
              <span className="text-xs font-medium bg-[#5151c6] text-white px-4 py-0.5 rounded-full">
                {category.count} Rides
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySidebar;
