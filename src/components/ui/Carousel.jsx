import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const Carousel = ({ slides, autoPlay = true, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, interval, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-lg">
      {/* 轮播图片 */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 w-full h-full ${
              index === currentSlide ? 'z-10' : 'z-0'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <motion.h2
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4"
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl lg:text-2xl mb-6"
                >
                  {slide.description}
                </motion.p>
                {slide.link && (
                  <motion.a
                    href={slide.link}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    了解更多
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 导航按钮 */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* 播放/暂停按钮 */}
      <button
        onClick={togglePlayPause}
        className="absolute top-4 right-4 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </button>

      {/* 指示器 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

