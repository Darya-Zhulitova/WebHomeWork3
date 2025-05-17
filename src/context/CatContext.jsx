import {createContext, useState, useContext} from 'react'

const CatContext = createContext()

export const CatProvider = ({children}) => {
    const [selectedBreed, setSelectedBreed] = useState(null)
    const [showDetail, setShowDetail] = useState(false)

    return (<CatContext.Provider value={{selectedBreed, setSelectedBreed, showDetail, setShowDetail}}>
        {children}
    </CatContext.Provider>)
}

export const useCatContext = () => {
    return useContext(CatContext)
}