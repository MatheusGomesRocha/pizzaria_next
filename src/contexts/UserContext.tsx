import { createContext, ReactNode, useState } from 'react';

type UserContextData = {
    responseApi: string;
    responseApiRegister: (value: string, type: string) => void;
    responseType: string;
}

type UserContextProvider = {
    children: ReactNode,
}

export const UserContext = createContext({} as UserContextData);

export function UserContextProvider({children}: UserContextProvider) {
    const [responseApi, setResponseApi] = useState('');
    const [responseType, setResponseType] = useState('');

    function responseApiRegister(value: string, type: string) {
        setResponseApi(value);
        setResponseType(type);
    }

    setTimeout(() => {
        setResponseApi('');
    }, 3000)

    return (
        <UserContext.Provider value={{responseApi, responseApiRegister, responseType}}>
            {children}
        </UserContext.Provider>
    )
}