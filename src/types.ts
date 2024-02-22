import { HttpHeaders, HttpContext, HttpParams } from '@angular/common/http';

export interface Options {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: 'body';
  context?: HttpContext;
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  transferCache?:
    | {
        includeHeaders?: string[];
      }
    | boolean;
}

export interface Pokemon {
  id: number;
  name: string;
  url: string;
}

export interface GetPokemonsByIdResponse {
  id: number;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
  }[];
  height: number;
  weight: number;

  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];

  name: string;
  sprites: {
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
  };

  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];

  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
}

export interface GetPokemonsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
}

export interface GetPokemonsByGenerationResponse {
  id: number;
  main_region: {
    name: string;
    url: string;
  };
  name: string;
  pokemon_species: {
    id: number;
    name: string;
    url: string;
  }[];
  types: {
    name: string;
    url: string;
  }[];
}

export interface PaginationParams {
  [param: string]:
    | string
    | number
    | boolean
    | ReadonlyArray<string | number | boolean>;
  limit: number;
  offset: number;
}
