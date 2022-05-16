import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import UserCard from '../../components/UserCard/UserCard';
import { Divider } from 'antd';
import { fetchUser } from '../../store/reducers/User/UserActions';
import { useParams } from 'react-router-dom';

const User: FC = () => {
    const { user, isLoading } = useAppSelector( state => state.userReducer )
    const dispatch = useAppDispatch()
    const { id } = useParams()

    useEffect( () => { dispatch( fetchUser( id ) ) } , [dispatch , id] )

    return (
        <>
            <Divider>User</Divider>
            <UserCard
                data = { user }
                loading = { isLoading }
            />
        </>
    );
};

export default User;
