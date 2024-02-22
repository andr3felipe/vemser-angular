import { Routes } from '@angular/router';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { HomeComponent } from './pages/home/home.component';
import { GenerationsComponent } from './pages/generations/generations.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'pokemons',
    component: PokemonsComponent,
  },
  {
    path: 'pokemon/:id',
    component: PokemonComponent,
  },
  {
    path: 'geracoes',
    component: GenerationsComponent,
  },
  {
    path: 'contato',
    component: ContactComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
