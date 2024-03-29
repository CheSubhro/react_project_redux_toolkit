import { createSlice } from '@reduxjs/toolkit';

const cmsSlice = createSlice({
    name: 'cms',
    initialState: [],

    reducers:{

        addCms:(state, action) =>{

            state.push({id:Date.now(), page:action.payload.page ,slug:action.payload.slug})
        },

        updateCms:(state, action) =>{

            const index = state.findIndex(item => item.id === action.payload.id)

            if(index !== -1){
                state[index] = action.payload
            }
        },

        deleteCms:(state, action) =>{

            return state.filter(item => item.id !== action.payload)
        }
    }
})

export const {addCms,updateCms,deleteCms} = cmsSlice.actions

export default cmsSlice.reducer;