import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux'
import { privateRoutes, publicRoutes, RoutesNames } from '../../router'

function AppRoute () {
    const { auth } = useAppSelector( state => state.authReducer )

  return (
    auth
        ?
        <Routes>
            { privateRoutes.map( route => 
                <Route
                    key     = { route.path }
                    path    = { route.path }
                    element = { <route.element /> }
                />    
            )}
                <Route path="*" element = { <Navigate to = { RoutesNames.USERS } /> } />
        </Routes>
        :
        <Routes>
            <Routes>
                { publicRoutes.map( route =>
                    <Route 
                        key     = { route.path }
                        path    = { route.path }
                        element = { <route.element /> }  
                    />
                ) }
                <Route path="*" element = { <Navigate to = { RoutesNames.LOGIN } /> } />
            </Routes>
        </Routes>
  )
}

export default AppRoute
