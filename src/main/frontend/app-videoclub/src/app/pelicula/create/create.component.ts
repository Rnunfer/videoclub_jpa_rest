import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PeliculaService } from '../pelicula.service';
import { Pelicula } from '../pelicula';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: [
  ]
})
export class CreateComponent {

  pelicula: Pelicula = {
    id: 0,
    anyo_lanzamiento: '',
    caracteristicas_especiales: '',
    clasificacion: '',
    descripcion: '',
    duracion: 0,
    duracion_alquiler: 0,
    rental_rate: 0,
    replacement_cost: 0,
    titulo: '',
    id_idioma: 0,
    id_idioma_original: 0,
    ultimaActualizacion: ''
  }
  form: FormGroup =  this.fb.group({
    titulo: new FormControl(),
    anyo_lanzamiento: new FormControl(),
    caracteristicas_especiales: new FormControl(),
    clasificacion: new FormControl(),
    descripcion: new FormControl(),
    duracion: new FormControl(),
    duracion_alquiler: new FormControl(),
    rental_rate: new FormControl(),
    replacement_cost: new FormControl(),
    id_idioma: new FormControl(),
    id_idioma_original: new FormControl(),
    ultimaActualizacion: new FormControl()
  });

  constructor(
    public peliculaService: PeliculaService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    if (this.form.valid) {
      this.pelicula.anyo_lanzamiento = this.form.value.anyo_lanzamiento;
      this.pelicula.titulo = this.form.value.titulo;
      this.pelicula.clasificacion = this.form.value.clasificacion;
      this.pelicula.descripcion = this.form.value.descripcion;
      this.pelicula.duracion = this.form.value.duracion;
      this.pelicula.duracion_alquiler = this.form.value.duracion_alquiler;
      this.pelicula.rental_rate = this.form.value.rental_rate;
      this.pelicula.replacement_cost = this.form.value.replacement_cost;
      this.pelicula.id_idioma = this.form.value.id_idioma;
      this.pelicula.id_idioma_original = this.form.value.id_idioma_original;
      this.pelicula.caracteristicas_especiales = this.form.value.caracteristicas_especiales;
      console.log(this.pelicula);
      this.peliculaService.create(this.pelicula).subscribe(res => {
      console.log('Película creada correctamente! + res');
      this.router.navigateByUrl('pelicula/index').then();
      })
    }

  }
}
