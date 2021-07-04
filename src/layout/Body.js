import React, {useState, useEffect} from 'react';
import Charlist from '../components/Charlist/Charlist';
import GetData from '../services/getData';
import SearchPanel from '../components/SearchPanel/SearchPanel';



const Preloader = () => {
    return (
        <div className="progress">
        <div className="indeterminate"></div>
        </div>
    );
};


const Body = () =>  {
    const [characters, loadCharacters] = useState([]);
    const [isReady, setIsReady] = useState(false);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('Все');

    const getData = new GetData();

    useEffect(()=> {
        getData.getAllChars()
        .then(arr => {
            loadCharacters(arr);
            setIsReady(true);
        })
    }) 
    const onSearchUpdater = (searchPanelState) => {
         setSearch(searchPanelState)
        }
    const searchCharacter = (characters, search) => {
        if (search.length === 0) {
            return characters;
        } 
            return characters.filter(char => char.name.toLowerCase().indexOf(search.toLowerCase()) > -1)
        }

    const onFilterUpdater = (searchPanelFilter) => {
        setFilter(searchPanelFilter);
        }
    
    const filterChars = (characters) => {
        if (filter === 'Все') {
            return characters
        }
        return characters.filter(char => char.vision === filter)
    }

    const visibleCharacters = filterChars(searchCharacter(characters, search))
        return (
            <div className='container content'>
                <SearchPanel search={onSearchUpdater} filter={onFilterUpdater}/>
                {isReady ? <Charlist characters={visibleCharacters}/> : <Preloader/>}
            </div>
        );
    }


export default Body;