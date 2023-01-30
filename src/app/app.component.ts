import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PokemonModel } from './model/pokemon.model';
import { PokemonService } from './services/pokemon.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Incubyte';

  allPokemon: PokemonModel[];
  pokemons: PokemonModel[] = [];
  pokemonform: FormGroup;

  // PokemonServices :PokemonService;

  constructor(
    private fb: FormBuilder,
    private pokemonServices: PokemonService
  ) {
    this.pokemonform = fb.group({});
    this.allPokemon = [];
  }

  ngOnInit(): void {
    this.pokemonform = this.fb.group({
      name: this.fb.control('Abc'),
      speciality: this.fb.control('pi'),
      imageUrl: this.fb.control('hhtp'),
    });
    this.pokemonServices.getPokemons().subscribe((response: any) => {
      this.pokemons = response;
      console.log(this.pokemons[0]);
    });
  }
}
