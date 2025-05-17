import {useEffect} from 'react'
import {useCatAPI} from '../hooks/useCatAPI'
import {useCatContext} from '../context/CatContext'
import BreedItem from './BreedItem'

const BreedList = () => {
    const {breeds, loading, error, fetchBreeds} = useCatAPI()
    const {showDetail} = useCatContext()

    useEffect(() => {
        fetchBreeds()
    }, [fetchBreeds])

    if (loading) return <div>Loading breeds...</div>
    if (error) return <div>Error: {error}</div>

    return (<section id="list" className={showDetail ? 'hidden' : ''}>
        <h2>Breeds</h2>
        <ul id="list_ul">
            {breeds.map(breed => (<BreedItem key={breed.id} breed={breed}/>))}
        </ul>
    </section>)
}

export default BreedList