import { useEffect, useRef } from "react";

const CursorFollower = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor-follower"
      style={{
        position: "fixed",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        // backgroundColor: "rgba(0, 255, 255, 0.9)",
        backgroundColor: "#eee",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        mixBlendMode: "difference"
      }}
    />
  );
};


export default CursorFollower;
