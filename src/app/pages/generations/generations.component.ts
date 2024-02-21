import { Component } from '@angular/core';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonsService } from '../../services/pokemons.service';
import { GetPokemonsByGenerationResponse } from '../../../types';

@Component({
  selector: 'app-generations',
  standalone: true,
  imports: [PokemonCardComponent, CommonModule, FormsModule],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.scss',
})
export class GenerationsComponent {
  constructor(private pokemonsService: PokemonsService) {}

  generation = {} as GetPokemonsByGenerationResponse;
  pokemonCount: undefined | number = undefined;

  onSelectChange(event: any) {
    this.fetchPokemonsByGeneration({ id: event.target.value });
  }

  fetchPokemonsByGeneration({ id }: { id: number }) {
    this.pokemonsService
      .getPokemonsByGeneration(`https://pokeapi.co/api/v2/generation/${id}`)
      .subscribe((response: GetPokemonsByGenerationResponse) => {
        const formatPokemons = response.pokemon_species.map((pokemon) => {
          const id = pokemon.url.split('/')[6];
          return {
            id: Number(id),
            name: pokemon.name,
            url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          };
        });

        this.pokemonCount = response.pokemon_species.length;

        this.generation = {
          ...response,
          pokemon_species: formatPokemons,
        };
      });
  }
}
