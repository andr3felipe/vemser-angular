import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import {
  GetPokemonsByGenerationResponse,
  GetPokemonsByIdResponse,
  GetPokemonsResponse,
  PaginationParams,
} from '../../types';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private apiService: ApiService) {}

  getPokemons = (
    url: string,
    params: PaginationParams
  ): Observable<GetPokemonsResponse> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  };

  getPokemonById = (url: string): Observable<GetPokemonsByIdResponse> => {
    return this.apiService.get(url, {
      responseType: 'json',
    });
  };

  getPokemonsByGeneration = (
    url: string
  ): Observable<GetPokemonsByGenerationResponse> => {
    return this.apiService.get(url, {
      responseType: 'json',
    });
  };
}
