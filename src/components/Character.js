function Character(character) {
    return (
        <div>
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} width='300' />
            <p>{`Origin: ${character?.origin?.name || 'Desconhecida'}`}</p>
        </div>
    );
};

export default Character;