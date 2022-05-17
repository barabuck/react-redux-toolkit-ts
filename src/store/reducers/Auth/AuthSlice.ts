import { createSlice } from "@reduxjs/toolkit"

interface AuthState {
    auth: boolean
    error: string
}

const initialState: AuthState = {
    auth: true,
    error: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    }
})

export default authSlice.reducer
