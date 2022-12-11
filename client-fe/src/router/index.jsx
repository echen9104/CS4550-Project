import { useRoutes, Navigate } from 'react-router-dom'

import Home from '@/modules/home/home'
import Login from '@/modules/auth/login'
import Register from '@/modules/auth/register'
import Detail from '@/modules/detail/detail'
import Profile from '@/modules/profile/profile'
import Product from '@/modules/product/product'

const UseRoute = () => useRoutes([
    {
        path: '/',
        element: <Navigate to="/home" />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/detail',
        element: <Detail />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/product',
        element: <Product />
    }
])

export default UseRoute