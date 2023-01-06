import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import { sortProducts } from "../../redux/states/productsSlice";
import img from "../../assets/ww.png"
import { fetchProducts } from "../../redux/states/productsSlice";

const NavBar = () => {
    
    const dispatch = useDispatch()

    


    const handleAToZ = (e) => { //*anda
        e.preventDefault()
        dispatch(sortProducts(e.target.value))
    }

    function handleClick(e){
        e.preventDefault()
        dispatch(fetchProducts())
    } 

    return(
        <nav className= "flex justify-around bg-otherBlue w-full">
           <button onClick={e => {handleClick(e)}}>
             <img src={img} alt="" />
           </button>
            <div className="mt-3">
                <select onChange={e => {handleAToZ(e)}} className="lg:w-56 text-center p-1 rounded-md">
                    <option value="">Búsqueda alfabética</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
            </div>
            <SearchBar/>
        </nav>
    );
}
 
export default NavBar;