import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/states/productsSlice";
import CardDetail from "../CardDetail/CardDetail";
import NavBar from "../NavBar/NavBar";



const Home = () => {

    const dispatch = useDispatch();
    const infoApi = useSelector((state) => state.products.products)

    useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);



    return(
        <div className="h-screen flex flex-col items-center bg-lightGrey">
            <NavBar/>
            <div className="mt-10 mb-5 pt-4 pb-10 bg-otherBlue w-full md:w-96 flex justify-center h-20 
                font-bold text-4xl border border-black">
                <h3>PRODUCTS</h3>
            </div>
           <div className="border border-black">
             {
                 infoApi.map((e, i) =>{
                     return(
                         <div key={i}>
                             <CardDetail detail={e} />
                         </div>
                     )
                 })
             }
           </div>
        </div>
    );
}
 
export default Home;