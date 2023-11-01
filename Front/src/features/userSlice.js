import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {}
    },
    reducers: {
        save: (state, action) => {
            const {payload} = action
            state.user = payload;
            console.log(state.user)
        }
    },
});

// Action creators are generated for each case reducer function

const { actions, reducer } = userSlice
export const { save } = actions;
export default reducer;