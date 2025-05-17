import {CatProvider} from '../context/CatContext'
import Header from './Header'
import BreedList from './BreedList'
import BreedDetail from './BreedDetail'
import '../App.css'

const App = () => {
    return (<CatProvider>
        <div className="app">
            <Header/>
            <main>
                <BreedList/>
                <BreedDetail/>
            </main>
        </div>
    </CatProvider>)
}

export default App