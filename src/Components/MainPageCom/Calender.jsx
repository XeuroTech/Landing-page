import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import calender from '../../assets/mainpage/calender.png';

const SLICE_COUNT = 10;

const CalendarSliceUI = () => {
  const [showFullImage, setShowFullImage] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  // Check if component is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Start animation only when in view
          const timer = setTimeout(() => {
            setShowFullImage(true);
          }, 1500);
          return () => clearTimeout(timer);
        } else {
          setIsInView(false);
          // Reset animation state when leaving view
          setShowFullImage(false);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const slices = Array.from({ length: SLICE_COUNT });

  return (
    <Box
      ref={containerRef}
      sx={{
        width: 'auto',
        height: '100vh',
        backgroundColor: '#030014',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        px: 2,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: {
            xs: '100%',
            sm: '90%',
            md: '80%',
            lg: '850px',
            xl: '1200px',
          },
          aspectRatio: '3 / 2',
        }}
      >
        {isInView && !showFullImage ? (
          slices.map((_, index) => {
            const sliceWidth = 100 / SLICE_COUNT;
            const centerIndex = SLICE_COUNT / 2;
            const offsetIndex = index - centerIndex + 3.5;

            const delay = `${Math.abs(offsetIndex) * 0.1}s`;
            const offsetY = offsetIndex % -10000 === 0 ? '0px' : '10px';
            const translatePercent = sliceWidth * index;

            return (
              <Box
                key={index}
                sx={{
                  position: 'absolute',
                  top: offsetY,
                  left: `${translatePercent}%`,
                  width: `${sliceWidth}%`,
                  height: '500px',
                  overflow: 'hidden',
                  zIndex: SLICE_COUNT - Math.abs(offsetIndex),
                  animation: `fadeSlideIn 1s ease ${delay} forwards`,
                  opacity: 0,
                  maskImage:
                    index === 0
                      ? 'linear-gradient(to right, transparent, white 30%)'
                      : index === SLICE_COUNT - 1
                      ? 'linear-gradient(to left, transparent, white 30%)'
                      : 'none',
                }}
              >
                <Box
                  component="img"
                  src={calender}
                  alt="Calendar Slice"
                  sx={{
                    width: `${SLICE_COUNT * 100}%`,
                    height: '100%',
                    objectFit: 'cover',
                    transform: `translateX(-${translatePercent}%)`,
                  }}
                />
              </Box>
            );
          })
        ) : isInView && showFullImage ? (
          <Box
            component="img"
            src={calender}
            alt="Full Calendar"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: 2,
              boxShadow: '0 0 30px rgba(0,0,0,0.5)',
              transition: 'opacity 0.5s ease-in-out',
            }}
          />
        ) : null}
      </Box>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeSlideIn {
            from {
              opacity: 0;
              transform: translateY(60px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default CalendarSliceUI