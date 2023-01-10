import { createContext, useState, useEfect } from "react";

const FormContext = createContext({})

export const FormProvider = ({ children }) => {
    

    return (
        <FormContext.Provider value={{}}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext