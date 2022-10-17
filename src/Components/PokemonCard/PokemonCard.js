import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'
import { useState } from "react";



const PokemonCard = (props) => {
    
  return (
      <Card color={"red"}>
        <img src={props.image} alt={`Pokemon`}/>
        <PokemonName>{props.name}</PokemonName>
        <PokemonType>{props.type}</PokemonType>
        <p>{props.weight}kg</p>

        <EvolveButton onClick={props.evoluirPokemon}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard