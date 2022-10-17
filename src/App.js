import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png',
    id: 0
  })

  const [pokemon1, setPokemon1] = useState({
    name: "Amaura",
    type: "Rock and Ice",
    evolved: false,
    weight: 25.2,
    color: 'blue',
    image: `https://archives.bulbagarden.net/media/upload/thumb/2/2a/698Amaura.png/240px-698Amaura.png`,
    id: 0
  })

  const [pokemon2, setPokemon2] = useState({
    name: "Pidgeot",
    type:"Normal and Flying",
    evolved: true,
    weight: 39.5,
    color: 'brown',
    image: `https://archives.bulbagarden.net/media/upload/thumb/5/57/018Pidgeot.png/240px-018Pidgeot.png`,
    id: 0
  })

  const evoluirPokemon = () => {
      if (pokemon.evolved === false){
        setPokemon({...pokemon, name:"Pikachu", 
        image:"https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/240px-025Pikachu.png",
        evolved:true})
      } else{
        alert("Já está evoluído!")
      }
    
}

const evoluirPokemon1 = () => {
  
  if (pokemon1.evolved === false){
    setPokemon1({...pokemon1, name:"Aurorus", 
    image:"https://archives.bulbagarden.net/media/upload/thumb/9/9e/699Aurorus.png/240px-699Aurorus.png",
    evolved:true})
  } else{
    alert("Já está evoluído!")
  }
  
}

const evoluirPokemon2 = () => {
  
  if (pokemon2.evolved === false){
    setPokemon2({...pokemon2, name:"Aurorus", 
    image:"https://archives.bulbagarden.net/media/upload/thumb/9/9e/699Aurorus.png/240px-699Aurorus.png",
    evolved:true})
  } else{
    alert("Já está evoluído!")
  }
  
  
}


  // Para fazer seus próximos pokemons, crie novos estados!

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard
      name={pokemon.name}
      type={pokemon.type}
      evolved={pokemon.evolved}
      weight={pokemon.weight}
      color={pokemon.color}
      image={pokemon.image}
      setPokemon={setPokemon}
      evoluirPokemon={evoluirPokemon}/>
  
      <PokemonCard
      name={pokemon1.name}
      type={pokemon1.type}
      evolved={pokemon1.evolved}
      weight={pokemon1.weight}
      color={pokemon1.color}
      image={pokemon1.image}
      setPokemon={setPokemon}
      evoluirPokemon={evoluirPokemon1}/>

      <PokemonCard
      name={pokemon2.name}
      type={pokemon2.type}
      evolved={pokemon2.evolved}
      weight={pokemon2.weight}
      color={pokemon2.color}
      image={pokemon2.image}
      setPokemon={setPokemon}
      evoluirPokemon={evoluirPokemon2}/>

      {/* Crie aqui seus próximos pokemons! */}
    </FlexContainer>
  </>
    
  );
}

export default App;
