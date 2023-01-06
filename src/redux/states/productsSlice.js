import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const EmptyState = {
  products: [],
  productsCopy: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const res = await axios.get("http://fakestoreapi.com/products");
      // console.log(res.data, 'response axios')
      const data = await res.data;
      return { data: data };
    } catch (error) {
      console.log(error);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: EmptyState,
  reducers: {
    sortProducts: (state, action) => {
      action.payload === "asc"
        ? state.products.sort(function (a, b) {
            if (a.title > b.title) {
              return 1;
            }
            if (b.title > a.title) {
              return -1;
            }
            return 0;
          })
        : state.products.sort(function (a, b) {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
              return -1;
            }
            if (b.title.toLowerCase() > a.title.toLowerCase()) {
              return 1;
            }
            return 0;
          });
    },
    searchProduct: (state, action) => {
      state.products =
        action.payload === ""
          ? state.productsCopy
          : state.productsCopy.filter((e) =>
              e.title.toLowerCase().includes(action.payload)
            );
    },

  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";

        const data = action.payload;
        //   console.log(data, "payload")
       

        if (data.errors === "There is not data") {
          state.products = [];
          state.productsCopy = [];
        }

        // if(state.products.length <= 0){
          state.products = data.data;
          state.productsCopy = data.data;
        // }else{
        //   localStorage.setItem("productsStorage", JSON.stringify(state.products.map(i=>i)))
        // }
      });
  },
});

export const { sortProducts, searchProduct } = productsSlice.actions;

export const selectById = (state, id) => state.products.products.find((i) => i.id === id)


// export const selectAllProperties = (state) => state.properties.properties

export default productsSlice.reducer;
