import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../components/login';
import { RegisterPage } from '../components/Register';
import { HomePage } from '../components/Home';
import { PrivateRoutes } from './PrivateRoutes/PrivateRoutes';
import { UserProvider } from '../providers/userContext';

export const RoutesMain = () => {

    return (
        <UserProvider>
            <Routes>
                <Route path='/' element={<LoginPage/>} />
                <Route path='/register' element={<RegisterPage />} />
                <Route element={<PrivateRoutes/>}>
                    <Route path='/homepage' element={<HomePage/>} />
                </Route>
            </Routes>
        </UserProvider>
    )
}