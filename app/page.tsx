'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Ticket, Calendar, Gift, Utensils, FerrisWheel, Menu } from 'lucide-react';
import ridesDataImport from './data/rides.json';
import { RidesData, Category } from './types/rides';
import CategorySidebar from './components/CategorySidebar';
import CarouselControls from './components/CarouselControls';
import RideCard from './components/RideCard';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const ridesData = ridesDataImport as RidesData;

// Main Rides Section Component
const RidesSection = () => {
  const [activeCategory, setActiveCategory] = useState<'land' | 'water' | 'kids'>('land');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const categories: Category[] = [
    { key: 'land', name: 'Land', count: ridesData.land.length, image: '/ferris-removebg-preview.png' },
    { key: 'water', name: 'Water', count: ridesData.water.length, image: '/waterslide-removebg-preview.png' },
    { key: 'kids', name: 'Kids', count: ridesData.kids.length, image: '/horseride-removebg-preview.png' },
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
      <div className="bg-white shadow-sm w-[87%] px-6 rounded-2xl mx-auto ">
        <div className="mx-auto px-1 py-2">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <Image
                src="/wonderla.PNG"
                alt="Wonderla Logo"
                width={150}
                height={10}
                className="rounded-lg mr-2"
              />
            </div>

            <nav className="hidden text-xs font-extrabold md:flex items-center space-x-6">
              <div className="flex items-center text-gray-500 hover:text-blue-900 cursor-pointer">
                <MapPin className="w-4 h-4 mr-1" />
                LOCATIONS
              </div>
              <div className="flex items-center text-gray-500 hover:text-blue-900 cursor-pointer">
                <Gift className="w-4 h-4 mr-1" />
                OFFERS
              </div>
              <div className="flex items-center text-gray-500 hover:text-blue-900 cursor-pointer">
                <FerrisWheel className="w-4 h-4 mr-1" />
                RIDES
              </div>
              <div className="flex items-center text-gray-500 hover:text-blue-900 cursor-pointer">
                <Utensils className="w-4 h-4 mr-1" />
                RESTAURANTS
              </div>
              <div className="flex items-center text-gray-500 hover:text-blue-900 cursor-pointer">
                <Calendar className="w-4 h-4 mr-1" />
                EVENTS
              </div>

            </nav>

            <div className="flex items-center space-x-4">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#fcd34d" }}
                whileTap={{ scale: 0.95 }}
                className="text-sm text-blue-900 bg-yellow-300 font-extrabold px-4 py-2 rounded-lg flex items-center"
              >
                  BOOK TICKETS
                  <motion.div
                    initial={{ x: -5 }}
                    animate={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    <Ticket className="w-6 h-4" />
                  </motion.div>
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                className="text-sm text-blue-900 font-extrabold px-6 py-2 rounded-lg"
              >
                  <Menu className='w-8 h-8 text-blue-900' />
              </motion.button>
            </div>

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
              <motion.div
                className="flex"
                animate={{
                  x: -currentIndex * (240 + 24) // 240px card width + 24px gap
                }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 20
                }}
              >
                <AnimatePresence mode="wait">
                  {currentRides.map((ride) => (
                    <motion.div 
                      key={ride.id} 
                      className="mr-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }}
                    >
                      <RideCard ride={ride} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
            
            {/* Explore All Rides Button */}
            <div className="mt-12 text-start me-auto">
              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#fcd34d",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-300 text-blue-900 font-extrabold px-16 py-3 rounded-full text-xs inline-block cursor-pointer"
              >
                Explore All Rides!
              </motion.a>
            </div>
          </div>        
        </div>
      </section>
    </div>
  );
};

export default RidesSection;