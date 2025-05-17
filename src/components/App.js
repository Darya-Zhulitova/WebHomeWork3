import {CatProvider} from '../context/CatContext.js'
import Header from './Header.js'
import BreedList from './BreedList.js'
import BreedDetail from './BreedDetail.js'
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