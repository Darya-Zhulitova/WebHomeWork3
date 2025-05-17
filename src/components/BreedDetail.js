import {useEffect} from 'react'
import {useCatContext} from '../context/CatContext.js'
import {useCatAPI} from '../hooks/useCatAPI'
import CloseButton from './CloseButton.js'

const BreedDetail = () => {
    const {selectedBreed, showDetail} = useCatContext()
    const {breedImage, fetchBreedImage, loading} = useCatAPI()

    useEffect(() => {
        if (showDetail && selectedBreed) {
            fetchBreedImage(selectedBreed.id)
        }
    }, [showDetail, selectedBreed]) // Зависимости только от этих значений

    if (!showDetail || !selectedBreed) return null

    return (<section id="item">
        <div>
            <h3>{selectedBreed.name}</h3>
            <h4>Description:</h4>
            <p>{selectedBreed.description}</p>
            <h4>Origin:</h4>
            <p>{selectedBreed.origin}</p>
            {loading ? (<div>Loading image...</div>) : (<img
                src={breedImage}
                alt={selectedBreed.name}
                decoding="async"
                loading="lazy"
            />)}
        </div>
        <div>
            <CloseButton/>
        </div>
    </section>)
}

export default BreedDetail