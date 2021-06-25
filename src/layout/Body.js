import React, { Component } from 'react';
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


class Body extends Component {
    state = {
        characters: [],
        isReady: false,
        search: '',
        filter: 'Все'
    }
    getData = new GetData();
    componentDidMount() {
        this.getData.getAllChars()
        .then(arr => this.setState({characters: arr, isReady: true}))
    }


    onSearchUpdater = (searchPanelState) => {
         this.setState({search: searchPanelState})
        }
    searchCharacter = (characters, search) => {
        if (search.length === 0) {
            return characters;
        } 
            return characters.filter(char => char.name.indexOf(search) > -1)
        }

    onFilterUpdater = (searchPanelFilter) => {
            this.setState({filter: searchPanelFilter})
        }
    filterChars = (characters) => {
        if (this.state.filter === 'Все') {
            return characters
        }
        return characters.filter(char => char.vision === this.state.filter)
    }

    render() {
        const {characters,isReady,search} = this.state;
        const visibleCharacters = this.filterChars(this.searchCharacter(characters, search))
        return (
            <div className='container content'>
                <SearchPanel search={this.onSearchUpdater} filter={this.onFilterUpdater}/>
                {isReady ? <Charlist characters={visibleCharacters}/> : <Preloader/>}
            </div>
        );
    }

};

export default Body;