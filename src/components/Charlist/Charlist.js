import React from 'react';
import CharCard from '../CharCard/CharCard';

const EmptyRes = () => {
    return (
        <h4>Введен неверный запрос</h4>
    )
}

const Charlist = (props) => {
    const {characters} = props;
    return (
        <div className="card-container">   
            {characters.length !== 0 ? characters.map(character => <CharCard key={character.id} data={character}/>) : <EmptyRes/>}
        </div>
    );
};

export default Charlist;