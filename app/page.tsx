'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Ticket, Calendar, Gift, Car, Utensils } from 'lucide-react';
import ridesDataImport from './data/rides.json';
import { RidesData, Category } from './types/rides';
import CategorySidebar from './components/CategorySidebar';
import CarouselControls from './components/CarouselControls';
import RideCard from './components/RideCard';

const ridesData = ridesDataImport as RidesData;

// Main Rides Section Component
const RidesSection = () => {
  const [activeCategory, setActiveCategory] = useState<'land' | 'water' | 'kids'>('land');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const categories: Category[] = [
    { key: 'land', name: 'Land', count: ridesData.land.length },
    { key: 'water', name: 'Water', count: ridesData.water.length },
    { key: 'kids', name: 'Kids', count: ridesData.kids.length }
  ];

  const currentRides = ridesData[activeCategory];
  const ridesPerView = 3;
  const maxIndex = Math.max(0, currentRides.length - ridesPerView);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= maxIndex) {
          return 0; // Reset to beginning
        }
        return prevIndex + 1;
      });
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [maxIndex, isAutoScrolling]);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const handlePrev = () => {
    setIsAutoScrolling(false);
    setCurrentIndex(Math.max(0, currentIndex - 1));
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const handleNext = () => {
    setIsAutoScrolling(false);
    setCurrentIndex(Math.min(maxIndex, currentIndex + 1));
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const handleCategoryChange = (category: 'land' | 'water' | 'kids') => {
    setActiveCategory(category);
    setCurrentIndex(0);
    setIsAutoScrolling(true);
  };

  return (
    <div className="min-h-screen bg-[#262d4b] pt-[2.5rem]">
      {/* Header Navigation */}
      <div className="bg-white shadow-sm w-[87%] py-2 px-8 rounded-2xl mx-auto ">
        <div className="mx-auto px-1 py-2">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=40&h=40&fit=crop"
                alt="Wonderla Logo"
                className="w-10 h-10 rounded-lg mr-3"
              />
            </div>

            <nav className="hidden text-sm font-bold md:flex items-center space-x-8">
              <div className="flex items-center text-gray-700 hover:text-purple-700 cursor-pointer">
                <MapPin className="w-4 h-4 mr-1" />
                LOCATIONS
              </div>
              <div className="flex items-center text-gray-700 hover:text-purple-700 cursor-pointer">
                <Gift className="w-4 h-4 mr-1" />
                OFFERS
              </div>
              <div className="flex items-center text-gray-700 hover:text-purple-700 cursor-pointer">
                <Car className="w-4 h-4 mr-1" />
                RIDES
              </div>
              <div className="flex items-center text-gray-700 hover:text-purple-700 cursor-pointer">
                <Utensils className="w-4 h-4 mr-1" />
                RESTAURANTS
              </div>
              <div className="flex items-center text-gray-700 hover:text-purple-700 cursor-pointer">
                <Calendar className="w-4 h-4 mr-1" />
                EVENTS
              </div>

            </nav>


            <button className="text-sm text-blue-900 bg-yellow-300 font-bold px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors duration-300 flex items-center">
                <Ticket className="w-4 h-4 mr-2" />
                BOOK TICKETS
            </button>
          </div>
        </div>
      </div>

      <section className='flex justify-center items-center mt-8'>
        <div className='w-1/3 h-64 rounded-lg'>
            {/* Left Sidebar - Categories */}
            <CategorySidebar
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
              categories={categories}
            />
        </div>

        <div className='w-2/3 h-fit rounded-lg'>
          {/* Main Rides Section */}
          <div className="max-w-7xl mx-auto px-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-5xl font-bold text-white">
                  OUR ICONIC RIDES
                </h1>
              </div>
              <CarouselControls
                onPrev={handlePrev}
                onNext={handleNext}
                canPrev={currentIndex > 0}
                canNext={currentIndex < maxIndex}
              />
            </div>

                        {/* Right Content - Rides Carousel */}
            <div className="flex flex-col overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (320 + 24)}px)` // 320px card width + 24px gap
                }}
              >
                {currentRides.map((ride) => (
                  <div key={ride.id} className="mr-6">
                    <RideCard ride={ride} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Explore All Rides Button */}
            <div className="mt-12 text-center me-auto">
              <a
                className="bg-yellow-300 text-blue-900 font-bold px-12 py-4 rounded-full text-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Explore All Rides!
              </a>
            </div>
          </div>        
        </div>
      </section>
    </div>
  );
};

export default RidesSection;