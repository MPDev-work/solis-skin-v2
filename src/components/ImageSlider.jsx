import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import imageSlider1 from '../assets/imageSlider/imageSlider1.png';
import imageSlider2 from '../assets/Phka/phkabanner.webp';
import imageSlider3 from '../assets/weyoungProduct/weyoungbanner.jpg';
import imageSlider4 from '../assets/skin1004/skin1004-banner.webp';
import imageSlider5 from '../assets/gatsby/gatsbybanner.png';
// 1. Data array of original images
const originalSliderData = [
  { id: 1, src: imageSlider1, alt: 'image index 1', link: '/shopall' },
  { id: 2, src: imageSlider2, alt: 'image index 2', link: '/phka' },
  { id: 3, src: imageSlider3, alt: 'image index 3', link: '/weyoung' },
  { id: 4, src: imageSlider4, alt: 'image index 4', link: '/skin1004' },
  { id: 5, src: imageSlider5, alt: 'image index 5', link: '/explore' },
];

function ImageSlider() {
  // 2. State & Refs
  // For circular, 'current' maps to the array index, initialized to 1 (the first 'real' image).
  const [current, setCurrent] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null); // Ref to the container holding images

  // 3. Setup the augmented image array (cloning first and last)
  const imageSlider = [
    // Clone of the LAST image placed at the START
    { ...originalSliderData[originalSliderData.length - 1], id: 'clone-last' },
    // Original images
    ...originalSliderData,
    // Clone of the FIRST image placed at the END
    { ...originalSliderData[0], id: 'clone-first' },
  ];

  // Duration for the smoothness, should match CSS transition-duration
  const transitionDuration = 500;

  // 4. Slide Navigation
  const nextSlide = () => {
    // Prevent clicking while animation is running
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    // Prevent clicking while animation is running
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrent((prev) => prev - 1);
  };

  // 5. CRITICAL LOGIC FOR CIRCULAR BEHAVIOR
  // Listen for 'current' index change. When it lands on a clone, jump.
  useEffect(() => {
    const handleTransitionEnd = () => {
      // Logic for infinite loop *after* the animation finishes
      setIsAnimating(false); // Stop animation flag

      // If we are on the LAST 'clone', jump back to the FIRST 'real' image
      if (current === imageSlider.length - 1) {
        // TURN OFF TRANSITION TEMPORARILY
        sliderRef.current.style.transition = 'none';
        setCurrent(1); // The real first image is now at index 1
        // (Forced re-render ensures transition is off before it applies below)
      }
      // If we are on the FIRST 'clone', jump forward to the LAST 'real' image
      else if (current === 0) {
        // TURN OFF TRANSITION TEMPORARILY
        sliderRef.current.style.transition = 'none';
        setCurrent(imageSlider.length - 2); // Real last image is length-2
      }
    };

    // Before resetting transition, ensure it's on for normal sliding
    if (isAnimating && sliderRef.current) {
      sliderRef.current.style.transition = `transform ${transitionDuration}ms ease-in-out`;
    }

    // Modern best practice: Add event listener, remove it in cleanup.
    // However, for this approach, listening on 'current' state change in an
    // useEffect works well to time the jump properly *after* the transition completes.
    const intervalOnTransitionJump = setTimeout(
      handleTransitionEnd,
      transitionDuration + 10,
    );

    return () => clearTimeout(intervalOnTransitionJump);
  }, [current, isAnimating, imageSlider.length]);

  // Optional auto-slide (Circular friendly)
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAnimating]); // Restart interval if animation changes (prevents weird jumps)

  return (
    <section className="relative w-screen overflow-hidden mt-[100px]">
      {/* Slides (Container with Ref) */}
      <div
        ref={sliderRef}
        className="flex"
        // Initially set to translateX for standard movement,
        // but style.transition is controlled in useEffect
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {imageSlider.map((image, index) => (
          <Link
            key={image.id}
            to={image.link}
            className="w-screen h-[450px] flex-shrink-0"
          >
            <img
              src={image.src}
              alt={`${image.alt} (index: ${index})`}
              className="w-full h-full object-cover"
            />
          </Link>
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center transition-all hover:bg-gray-800/80"
        aria-label="Previous Slide"
      >
        <i className="bi bi-chevron-left text-white text-lg"></i>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center transition-all hover:bg-gray-800/80"
        aria-label="Next Slide"
      >
        <i className="bi bi-chevron-right text-white text-lg"></i>
      </button>
    </section>
  );
}

export default ImageSlider;
