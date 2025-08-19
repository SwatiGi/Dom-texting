import React, { useMemo, memo, useState } from "react";
import Button from "./Button";

const DemoList = ({ listTitle, listItems }) => {
  console.log("demo render");

  const [isDescending, setIsDescending] = useState(false);

  let sortList = useMemo(() => {
    console.log(isDescending?"descending":"ascending");
    let sorted = [...listItems].sort((a, b) => a - b);
    if (isDescending) {
      sorted.reverse();
    }
    return sorted;
  }, [listItems, isDescending]);

  const handleChange = () => {
    setIsDescending((prev) => !prev); // toggle ascending/descending
  };

  return (
    <div>
      <h1>{listTitle?"My Title":"New Title"}</h1>
      {sortList.map((item, i) => {
        return (
          <ul key={i}>
            <li>{item}</li>
          </ul>
        );
      })}
      <Button onClick={handleChange}>
        {isDescending ? "Ascending" : "Descending"}
      </Button>
    </div>
  );
};

export default memo(DemoList);
