import { createSlice } from '@reduxjs/toolkit';

interface IngredientsState {
  ingredients: string;
  loading: boolean;
  error: string | undefined | null;
}

const initialState: IngredientsState = {
  ingredients: '',
  loading: false,
  error: null
};

export const ingredientSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  selectors: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchIngredients.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(fetchIngredients.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.error.message;
  //     })
  //     .addCase(fetchIngredients.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.ingredients = action.payload;
  //     });
  // }
});

export default ingredientSlice.reducer;