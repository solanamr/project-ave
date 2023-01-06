import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./states/productsSlice";
// import randomCriptoSlice from "./states/randomCriptoSlice";

export default configureStore({
    reducer: {
      products: productsSlice,
    //   randomCoin: randomCriptoSlice
    }
  });