import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';
import { GetPokemonsByIdResponse, GetPokemonsResponse } from '../../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss',
})
export class PokemonComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonsService
  ) {}

  pokemon!: GetPokemonsByIdResponse;

  fetchPokemonById({ id }: { id: string }) {
    this.pokemonsService
      .getPokemonById(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .subscribe((response: GetPokemonsByIdResponse) => {
        this.pokemon = response;
      });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      if (id) {
        this.fetchPokemonById({ id });
      }
    });
  }
}
