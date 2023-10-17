import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: []
    },
    reducers: {
        save: (state, param) => {
            const {payload} = param
            state.user = payload;
        },
    },
});

// Action creators are generated for each case reducer function

const { actions, reducer } = userSlice
export const { save } = actions;
export default reducer;