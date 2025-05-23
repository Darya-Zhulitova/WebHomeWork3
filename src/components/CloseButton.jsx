import {useCatContext} from '../context/CatContext'

const CloseButton = () => {
    const {setShowDetail} = useCatContext()

    const handleClick = () => {
        setShowDetail(false)
    }

    return (<button id="close" onClick={handleClick}>
        Close
    </button>)
}

export default CloseButton