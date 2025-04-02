import React, { useState, useEffect } from "react";
import "./Matrix.css"; // Import the CSS file for styling

const Matrix = () => {
  const initialGrid = Array(9).fill("white"); // Initial grid
  const [grid, setGrid] = useState(initialGrid);
  const [clickedOrder, setClickedOrder] = useState([]);

  const handleClick = (index) => {
    if (grid[index] === "white") {
      setGrid((prevGrid) => {
        const newGrid = [...prevGrid];
        newGrid[index] = "green";
        return newGrid;
      });

      setClickedOrder((prevOrder) => {
        const newOrder = [...prevOrder, index];
        if (newOrder.length === 9) {
          changeToOrange(newOrder);
        }
        return newOrder;
      });
    }
  };

  const changeToOrange = (order) => {
    order.forEach((idx, i) => {
      setTimeout(() => {
        setGrid((prevGrid) => {
          const newGrid = [...prevGrid];
          newGrid[idx] = "orange";
          return newGrid;
        });
      }, i * 500);
    });
  };

  const resetGrid = () => {
    setGrid(initialGrid); 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div className="outer_div">
        {grid.map((color, index) => (
          <div className="inner_div" style={{backgroundColor:color}} key={index}
          onClick={() => handleClick(index)}/>
        ))}
      </div>
      <button className="Btn_style" onClick={resetGrid}>Reset</button>
    </div>
  );
};

export default Matrix;
