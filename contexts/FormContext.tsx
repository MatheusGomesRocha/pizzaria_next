import { createContext, ReactNode, useState } from 'react';

type FormContextData = {
    showForm: string;
    formToShow: (showForm: string) => void;
}

type FormContextProvider = {
    children: ReactNode,
}

export const FormContext = createContext({} as FormContextData);

export function FormContextProvider({children}: FormContextProvider) {
    const [showForm, setShowForm] = useState('login');
    
    function formToShow(value: string) {
        setShowForm(value);
    }

    return (
        <FormContext.Provider value={{showForm, formToShow}}>
            {children}
        </FormContext.Provider>
    )
}