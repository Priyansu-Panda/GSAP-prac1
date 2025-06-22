import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
// TODO: Import the ScrollTrigger plugin from GSAP
// TODO: Create a component that uses the ScrollTrigger plugin
// TODO: Implement the gsap scroll trigger
// TODO: Create a ref to the scroll container
const GsapScrollTrigger = () => {
  const scrollRef = useRef();
  // TODO: Implement the gsap scroll trigger
  useGSAP(() => {
    // ACeessing the boxes and animate them based on the scroll position and Gettinng childreng using react ref
    const boxes = gsap.utils.toArray(scrollRef.current.children); // Get all children of the scroll container using useRef and gsap.utils.toArray() method and store them in a variable called boxes variable 
    boxes.forEach((box) => {
      gsap.to(box, {
        x: 200 * (boxes.indexOf(box) + 1),
        y: 200,
        scale: 2,
        rotation: 360,
        duration: 2,
        ease: "power4.inOut",
        borderRadius: "50%",
        scrollTrigger: {
          trigger: box, // Trigger the animation when the box is scrolled into view
          // start: "top center",
          // end: "bottom center",
          start: "bottom bottom", // Start the animation when the bottom of the box reaches the bottom of the viewport
          end: "top 20%", // End the animation when the top of the box reaches 20% of the viewport height
          scrub: 1, // Scrub the animation as the user scrolls the box 
          // scrub: true,
        },
        easel: "power4.inOut",
      });
    })
  }, {SCOPE: "scrollRef"});  // Passing the scrollRef to the useGSAP hook to automatically update the animation when the scroll container is scrolled  
  return (
    <main>
      <h1>GsapScrollTrigger</h1>

      <p className="mt-5 text-gray-500">
        Gsap Scroll Trigger is a plugin that allows you to create animations
        that are triggered by the scroll position of the page.
      </p>

      <p className="mt-5 text-gray-500">
        With ScrollTrigger, you can define various actions to be triggered at
        specific scroll points, such as starting or ending an animation,
        scrubbing through animations as the user scrolls, pinning elements to
        the screen, and more.{" "}
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap scroll trigger
        </a>{" "}
        method.
      </p>

      <div className="w-full h-[70vh] flex justify-center items-center flex-col">
        <p className="text-center text-gray-500">
          Scroll down to see the animation
        </p>

        <svg
          className="animate-bounce mt-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>
      </div>

      <div className="mt-20 w-full h-screen" ref={scrollRef}>   
      {/* attactaching scrollRef to the main component */}
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
        />
        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
        />
      </div>
    </main>
  );
};

export default GsapScrollTrigger;
