import { Component } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { GetPokemonsResponse, PaginationParams, Pokemon } from '../../../types';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [
    PokemonCardComponent,
    CommonModule,
    FormsModule,
    PaginationComponent,
  ],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss',
})
export class PokemonsComponent {
  constructor(private pokemonsService: PokemonsService) {}

  pokemons: Pokemon[] = [];

  totalPokemons = 0;
  limit = 20;
  page = 0;
  offset = this.page * this.limit;

  onSelectChange(event: any) {
    this.limit = Number(event.target.value);
    this.page = 0; // Reset page to 0 when the limit changes
    this.offset = this.page * this.limit;

    this.fetchPokemons({ offset: this.offset, limit: this.limit });
  }

  next() {
    if (this.offset + this.limit >= this.totalPokemons) {
      return;
    }
    this.page++;
    this.offset = this.page * this.limit;
    this.fetchPokemons({ offset: this.offset, limit: this.limit });
  }

  previous() {
    if (this.offset === 0) {
      return;
    }

    this.page--;
    this.offset = this.page * this.limit;
    this.fetchPokemons({ offset: this.offset, limit: this.limit });
  }

  fetchPokemons({ offset, limit }: PaginationParams) {
    this.pokemonsService
      .getPokemons('https://pokeapi.co/api/v2/pokemon', {
        offset,
        limit,
      })
      .subscribe((response: GetPokemonsResponse) => {
        this.pokemons = response.results.map((pokemon) => {
          const id = pokemon.url.split('/')[6];
          return {
            id: Number(id),
            name: pokemon.name,
            url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          };
        });

        this.totalPokemons = response.count;
      });
  }

  ngOnInit() {
    this.fetchPokemons({ offset: this.offset, limit: this.limit });
  }
}
