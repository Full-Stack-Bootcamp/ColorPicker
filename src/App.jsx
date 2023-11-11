// Add state to represent selectedColor and function setSelectedColor
// Add click function to pass selectedColor up
import { useState } from "react";

//
// Write your Color component here
const Color = ({ color, setSelectedColor, selectedColor }) => {
  let namesForClasses = ``;
  selectedColor === color
    ? (namesForClasses = `selected ${color}`)
    : (namesForClasses = `${color}`);
  return (
    <div
      className={namesForClasses}
      onClick={() => {
        setSelectedColor(color);
      }}
    ></div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("violet");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color
          color="violet"
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
        <Color
          color="yellow"
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
        <Color
          color="red"
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
      </div>
    </div>
  );
};

export default App;
