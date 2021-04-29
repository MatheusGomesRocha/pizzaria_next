import { GetStaticProps } from 'next';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

type UserContextData = {
    responseApi: string;
    responseApiRegister: (value: string, type: string) => void;
    responseType: string;
    userLoginId: number;
    login: (userId: number) => void;
    logout: () => void;
    hasUserLogged: () => void;
}

type UserContextProvider = {
    children: ReactNode,
}

export const UserContext = createContext({} as UserContextData);

export function UserContextProvider({children}: UserContextProvider) {
    const [responseApi, setResponseApi] = useState('');
    const [responseType, setResponseType] = useState('');
    const [userLoginId, setUserLoginId] = useState(0);

    function responseApiRegister(value: string, type: string) {
        setResponseApi(value);
        setResponseType(type);
    }

    function login(userId: number) {
        setUserLoginId(userId);
    }

    function logout() {
        setUserLoginId(0);
    }

    function hasUserLogged() {
        const response = api.get(`user${userLoginId}`).then(response => {
            console.log(response.data);
        })
    }

    setTimeout(() => {
        setResponseApi('');
    }, 3000)
   
    return (
        <UserContext.Provider value={{
            responseApi,
            responseApiRegister,
            responseType,
            userLoginId,
            login,
            logout,
            hasUserLogged
        }}>
            {children}
        </UserContext.Provider>
    )
}


