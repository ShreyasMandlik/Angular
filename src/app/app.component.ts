import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  setAlert: boolean = false;

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
      // console.log(this.pokemons[0]);
    });
  }

  public get name(): FormControl {
    return this.pokemonform.get('name') as FormControl;
  }
  public get speciality(): FormControl {
    return this.pokemonform.get('speciality') as FormControl;
  }
  public get imageUrl(): FormControl {
    return this.pokemonform.get('imageUrl') as FormControl;
  }

  clearForm() {
    this.name.setValue('');
    this.speciality.setValue('');
    this.imageUrl.setValue('');
  }


  setfalse() {
    this.setAlert = false;
    console.log(this.setAlert);
  }

  addPokemon() {
    let pokemonobj: PokemonModel = {
      name: this.name.value,
      speciality: this.speciality.value,
      imageUrl: this.imageUrl.value,
    };
    this.pokemonServices.savePokemon(pokemonobj).subscribe((response: any) => {
      // this.pokemons = response;
      this.pokemons.unshift(response);
      console.log(response);
      this.clearForm();
      alert('saved');
      // console.log(this.pokemons[0]);
    });
    this.setAlert = true;
  }
}
