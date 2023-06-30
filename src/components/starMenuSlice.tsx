import { createSlice,} from '@reduxjs/toolkit'


// Define a type for the slice state
interface starMenuState {
  visibility: boolean
}

// Define the initial state using that type
const initialState: starMenuState = {
    visibility: false,
}

export const starMenuSlice = createSlice({
  name: 'starMenu',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    on: (state) => {
      state.visibility = true;
    },
    off: (state) => {
        state.visibility = false;
    },
    toggle: (state) => {
        state.visibility = !state.visibility;
    },
  },
})

export const { on, off, toggle } = starMenuSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default starMenuSlice.reducer