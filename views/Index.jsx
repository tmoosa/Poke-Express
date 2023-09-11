const React = require('react');

class Index extends React.Component {
    render() {
        const myStyle = {
            color: '#ffffff',
            backgroundColor: '#000000',
        };
        const { pokemon } = this.props;
        return (
            <div>
                <h1 style={myStyle}>Check out all the pokemons!</h1>
                <a href="/pokemon/new">Create New Pokemon</a>
                <ul>
                    {pokemon.map((pkmn) => (
                        <li key={pkmn._id}>
                            <a href={`/pokemon/${pkmn._id}`}>
                                {pkmn.name[0].toUpperCase() + pkmn.name.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

module.exports = Index;
