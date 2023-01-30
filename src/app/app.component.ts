import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'Incubyte';
  pokemonform:FormGroup;
  constructor( private fb:FormBuilder){
    this.pokemonform=fb.group({});
  }
  ngOnInit(): void {
    this.pokemonform = this.fb.group({
      name: this.fb.control('Abc'),
      speciality: this.fb.control('pi'),
      imageUrl: this.fb.control('hhtp'),
    });
    

  }
  
}


