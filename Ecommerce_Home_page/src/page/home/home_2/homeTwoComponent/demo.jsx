import { useEffect, useState } from "react";

function TextAnimation() {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 10); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1
        className={`transition-all duration-1000 ease-in-out ${
          animate ? "text-xl md:text-2xl" : "text-2xl md:text-4xl"
        }`}
      >
        chapters
      </h1>
      <h1
        className={`transition-all duration-1000 ease-in-out ${
          animate ? "text-xl md:text-2xl" : "text-2xl md:text-4xl"
        }`}
      >
        beginnings
      </h1>
    </div>
  );
}

export default TextAnimation;
