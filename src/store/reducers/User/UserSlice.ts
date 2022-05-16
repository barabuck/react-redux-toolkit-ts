import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../models/IUser";
import { fetchUsers, fetchUser } from "./UserActions";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    user: IUser | null;
    selectedUser: number;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    user: null,
    selectedUser: 1
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.pending.type]: ( state ) => {
            state.isLoading = true;
        },
        [fetchUsers.fulfilled.type]: ( state, action: PayloadAction<IUser[]> ) => {
            state.isLoading = false
            state.error = '';
            state.users = action.payload;
        },
        [fetchUsers.rejected.type]: ( state, action: PayloadAction<string> ) => {
            state.isLoading = false
            state.error = action.payload;
        },
        [fetchUser.pending.type]: ( state ) => {
            state.isLoading = true;
        },
        [fetchUser.fulfilled.type]: ( state, action: PayloadAction<IUser> ) => {
            state.isLoading = false
            state.error = '';
            state.user = action.payload;
        },
        [fetchUser.rejected.type]: ( state, action: PayloadAction<string> ) => {
            state.isLoading = false
            state.error = action.payload;
        },
    }
})

export default userSlice.reducer;
