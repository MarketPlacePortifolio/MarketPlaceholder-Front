import React, { useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

export function Carousel( products ) {
  const [index, setIndex] = useState(0); 
  const length = products.length;
  console.log(products[index]);

  function handlePrevious() {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  function handleNext() {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };
  
  return (
    <div className="carousel">
      <button className="prev" onClick={handlePrevious}>
        <GrFormPrevious size={ 30 } />
      </button>
      <button className="next" onClick={handleNext}>
        <GrFormNext size={ 30 } />
      </button>
      <div>{products[index]}</div>
    </div>
  );
};
