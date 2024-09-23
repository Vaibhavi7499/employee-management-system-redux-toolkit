import { createContext } from "react";

export let dummyContext = createContext()


const DummyContainer = ({children}) => {
    let dummyValues = {
        emp : [{id:1, name : 'Raju'}]
    }
    return (
        <>
        <dummyContext.Provider value={dummyValues}>
            {children}
        </dummyContext.Provider>
        </>
    )
}


export default DummyContainer