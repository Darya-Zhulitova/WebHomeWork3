import {useCatContext} from '../context/CatContext.js'

const BreedItem = ({breed}) => {
    const {setSelectedBreed, setShowDetail} = useCatContext()

    const handleClick = () => {
        setSelectedBreed(breed)
        setShowDetail(true)
    }

    return (<li onClick={handleClick}>
        {breed.name}
    </li>)
}

export default BreedItem