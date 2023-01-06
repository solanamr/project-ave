import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchProduct } from "../../redux/states/productsSlice";


const SearchBar = () => {

    const dispatch = useDispatch()

    const [name, setName] = useState("");


    useEffect(() => {
        dispatch(searchProduct());
      }, [dispatch]);

      const handleInputChange = (e)=> {
            dispatch(searchProduct(e));
      }

     
    return(
        <div className="flex justify-around ">
            <input onChange={(e) => {setName(e.target.value); handleInputChange(e.target.value)}} 
            type="text" placeholder="Search product" value={name} className="w-40 lg:w-56 rounded-lg mt-3 mb-5 text-center"/>
           
      </div>
    )
}

export default SearchBar;