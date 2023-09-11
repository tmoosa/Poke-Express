import React from 'react';

class Index extends React.Component {
    render() {
        const myStyle = {
            color: '#ffffff',
            backgroundColor: '#000000',
        };
        const { pokemon } = this.props; 
        return (
            <div>
                <h1 style={myStyle}>Gotta Catch 'Em All!</h1>
                <h2>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
                <img src={pokemon.img + ".jpg"} alt={pokemon.name} />
                <a href="/pokemon">Let's go catch more</a>
            </div>
        );
    }
}

export default Index; 
