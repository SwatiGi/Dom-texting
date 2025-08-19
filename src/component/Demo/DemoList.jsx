import { useMemo, memo, useState } from "react";
import Button from "../Button";

const DemoList = ({ title, items }) => {
  const [isAsc, setIsAsc] = useState(true);

  // sorted list calculate with memo
  const sortedList = useMemo(() => {
    console.log("arr sorted");
    let newArr = [...items]; // copy banao
    return isAsc
      ? newArr.sort((a, b) => a - b) // ascending
      : newArr.sort((a, b) => b - a); // descending
  }, [items, isAsc]);

  const handleToggle = () => {
    setIsAsc((prev) => !prev);
  };

  console.log("DemoList running");

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Button onClick={handleToggle}>
        {isAsc ? "Descending" : "Ascending"}
      </Button>
    </div>
  );
};

export default memo(DemoList);
