import { configureStore } from '@reduxjs/toolkit'

import usersReducer from '../features/users/usersSlice'
import cmsReducer from '../features/cms/cmsSlice'

export const store = configureStore({

    reducer: {
        users:usersReducer,
        cms:cmsReducer
    },
})
