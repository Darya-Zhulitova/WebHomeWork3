import {useState, useEffect, useCallback} from 'react'

const API_KEY = 'live_BpmdIkOFGDwKN9gd42m67HqJOfSU3MyffAbhDD26YAZEUwLkTEiESd9GGLNGzsUQ'

export const useCatAPI = () => {
    const [breeds, setBreeds] = useState([])
    const [breedImage, setBreedImage] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchBreeds = useCallback(async () => {
        setLoading(true)
        try {
            const response = await fetch('https://api.thecatapi.com/v1/breeds', {
                headers: {'x-api-key': API_KEY}
            })
            const data = await response.json()
            setBreeds(data)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }, [])

    const fetchBreedImage = useCallback(async (breedId) => {
        setLoading(true)
        try {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=1&order=RAND&breed_id=${breedId}`, {headers: {'x-api-key': API_KEY}})
            const data = await response.json()
            setBreedImage(data[0]?.url || '')
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }, [])


    // Автоматическая загрузка при инициализации хука
    useEffect(() => {
        fetchBreeds()
    }, [fetchBreeds])

    return {breeds, breedImage, loading, error, fetchBreedImage, fetchBreeds}
}