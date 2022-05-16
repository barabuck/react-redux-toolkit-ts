import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUsers, } from '../../store/reducers/User/UserActions';

import UsersList from '../../components/UsersList/UsersList';
import { Divider } from 'antd';

const Users: FC = () => {
  const { users, isLoading } = useAppSelector( state => state.userReducer )
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect( () => {
    dispatch( fetchUsers() )
  }, [dispatch])

  const viewUser = ( id: number ) => {
    navigate( `/user/${id}` )
  }

  return (
    <>
      <Divider>Users</Divider>
      <UsersList
        data = { users }
        loading = { isLoading }
        onClick = { viewUser }
      />
    </>
  );
};

export default Users;
