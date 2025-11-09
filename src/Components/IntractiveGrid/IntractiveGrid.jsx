// import React, { useState, useEffect } from "react";

// export default function InteractiveGridPattern({
//   width = 24,
//   height = 24,
//   className = "",
//   squares = [80, 80],
//   squaresClassName = "",
// }) {
//   const [hovered, setHovered] = useState(null);
//   const [cols, rows] = squares;
//   const squaresArray = [];

//   useEffect(() => {
//     if (hovered) {
//       const timeout = setTimeout(() => {
//         setHovered(null);
//       }, 1000);
//       return () => clearTimeout(timeout);
//     }
//   }, [hovered]);

//   for (let y = 0; y < rows; y++) {
//     for (let x = 0; x < cols; x++) {
//       const key = `${x}-${y}`;
//       const isHovered = hovered && hovered.x === x && hovered.y === y;

//       squaresArray.push(
//         <rect
//           key={key}
//           width={width}
//           height={height}
//           x={x * width}
//           y={y * height}
//           className={`transition-all duration-300 ${
//             isHovered ? "fill-blue-500" : "fill-transparent"
//           } ${squaresClassName}`}
//           onMouseEnter={() => setHovered({ x, y })}
//           onTouchStart={() => setHovered({ x, y })}
//         />
//       );
//     }
//   }

//   return (
//     <svg
//       className={`h-full w-full ${className}`}
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <g stroke="currentColor" strokeWidth="0.5">
//         {squaresArray}
//       </g>
//     </svg>
//   );
// }
