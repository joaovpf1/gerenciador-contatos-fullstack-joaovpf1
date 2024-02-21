import { Navigate, Outlet } from 'react-router-dom';


export const PrivateRoutes = ()=>{
     const token = localStorage.getItem('@TOKEN') 
     return token? <Outlet /> : <Navigate to='/' />
}