import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { IUser } from "../../../models/IUser"

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async ( _, thunkAPI ) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const fetchUser = createAsyncThunk(
    'user/fetch',
    async ( id: string | undefined, thunkAPI ) => {
        try {
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)
