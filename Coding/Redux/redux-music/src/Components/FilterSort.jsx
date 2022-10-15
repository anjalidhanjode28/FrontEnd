import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


const FilterSort = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.getAll("genre"));
    const [category, setCategory] = useState(searchParams.getAll("genre") || []);
    const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "");


    const handleFilter = (e) => {
        const option = e.target.value;
        let newCategory = [...category];
        //if the option is present in the category array remove it else add it to category array
        if(newCategory.includes(option)){
            //remove it
            newCategory.splice(newCategory.indexOf(option),1);
        }else{
            //add it
            newCategory.push(option);
        }
        setCategory(newCategory);
        console.log(newCategory);
    };


    const handleSortBy = (e) => {
        setSortBy(e.target.value);
    };
    // console.log(sortBy);


    useEffect(() => {
        const params = {};
        category && (params.genre = category);
        sortBy && (params.sortBy = sortBy);
        setSearchParams(params);

    },[category, setSearchParams, sortBy]);
    

    return (
        <div>
            <h1>Filter</h1>
            <div>
                <input 
                    type="checkbox" 
                    defaultChecked={category.includes("K-Pop")}
                    onChange={handleFilter} 
                    value="K-Pop"
                    />
                <label>K-Pop</label>
            </div>
            <div>
                <input 
                    type="checkbox"
                    defaultChecked={category.includes("Country")}
                    onChange={handleFilter} 
                    value="Country"
                    />
                <label>Country</label>
            </div>
            <div>
                <input 
                    type="checkbox" 
                    defaultChecked={category.includes("Pop")}
                    onChange={handleFilter} 
                    value="Pop"
                    />
                <label>Pop</label>
            </div>
            <div>
                <input 
                    type="checkbox" 
                    defaultChecked={category.includes("Heavy Metal")}
                    onChange={handleFilter} 
                    value="Heavy Metal"
                    />
                <label>Heavy Metal</label>
            </div>

            <h1>Sort</h1>

            <div onChange={handleSortBy}>
                <div>
                    <input 
                        defaultChecked={sortBy === 'asc'} 
                        type="radio" 
                        name="sortBy" 
                        value="asc" 
                        />
                    <label>Ascending</label>
                </div>
                <div>
                    <input 
                        defaultChecked={sortBy === 'desc'} 
                        type="radio" 
                        name="sortBy" 
                        value="desc" 
                        />
                    <label>Descending</label>
                </div>
            </div>
        </div>
    );
};

export default FilterSort;