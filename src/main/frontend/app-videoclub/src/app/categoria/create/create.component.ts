import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoriaService} from "../categoria.service";
import {Router} from "@angular/router";
import { Categoria } from '../categoria';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup =  new FormGroup({
    nombre:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ])
  });

  constructor(
    public categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.categoriaService.create(this.form.value).subscribe(res => {
      console.log('Categoría creada correctamente! + res');
      this.router.navigateByUrl('categoria/index').then();
    })
  }

  creacionRapida() {
    let categoria: Categoria = {
      idCategoria: 0,
      nombre: 'categoria_primero',
      ultimaActualizacion: ''
    };
    this.categoriaService.create(categoria).subscribe()
    categoria.nombre = 'categoria_segundo';
    this.categoriaService.create(categoria).subscribe()
    categoria.nombre = 'categoria_tercero';
    this.categoriaService.create(categoria).subscribe()
    categoria.nombre = 'categoria_cuarto';
    this.categoriaService.create(categoria).subscribe()
    categoria.nombre = 'categoria_quinto';
    this.categoriaService.create(categoria).subscribe()
    this.router.navigateByUrl('categoria/index')
  }

}
