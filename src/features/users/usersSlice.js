import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice ({
    name: 'users',
    initialState: [],

    reducers:{

        addUser:(state, action) =>{

            state.push({id:Date.now(), name:action.payload.name ,email:action.payload.email})
        },

        updateUser:(state,action) =>{

            const index = state.findIndex(user => user.id === action.payload.id)

            if(index !== -1){
                state[index] = action.payload
            }
        },

        deleteUser:(state,action) =>{

            return state.filter(user => user.id !== action.payload)
        }

    }
})

export const {addUser,updateUser,deleteUser} = usersSlice.actions

export default usersSlice.reducer;