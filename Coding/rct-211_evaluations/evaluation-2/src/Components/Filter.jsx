import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI

  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );

  const handleChange = (e) => {
    const option = e.target.value;
    let newCategoryOptions = [...category];

    if(category.includes(option)){
      newCategoryOptions.splice(newCategoryOptions.indexOf(option),1);
    }
    else{
      newCategoryOptions.push(option);
    }
    setCategory(newCategoryOptions);
  };

  useEffect(() => {
    if(category){
      setSearchParams({category});
    }
  }, [category, setSearchParams]);

  return (
    <div 
      style={{
        border: '2px solid black',
        borderRadius: '5px',
        marginLeft: '1rem',
        width: '290px',
      }}>
      <h3 style={{ textAlign: 'center' }}>Filters</h3>
      <div style={{ padding: '0 0 5px 5px', fontSize: '18px' }}>Category</div>
      <div style={{ paddingLeft: '15px' }} data-testid="filter-category">
        <div>
          <input 
            type="checkbox" 
            value="Analog" 
            onChange={handleChange}
            checked={category.includes('Analog')}
          />
          <label htmlFor="">Analog</label>
        </div>
        <div>
          <input 
            type="checkbox" 
            value="Digital" 
            onChange={handleChange}
            checked={category.includes('Digital')}
          />
          <label htmlFor="">Digital</label>
        </div>
        <div>
          <input  
            type="checkbox" 
            value="Chronograph" 
            onChange={handleChange}
            checked={category.includes('Chronograph')}
          />
          <label htmlFor="">Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
