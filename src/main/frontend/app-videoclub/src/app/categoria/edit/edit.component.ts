import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoriaService} from "../categoria.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Categoria} from "../categoria";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number = 0;
  categoria: Categoria = { id: 0, nombre: "", ultimaActualizacion: "1970-01-01"};
  form: FormGroup =   this.fb.group({
    nombre:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ])
  });

  constructor(
    public categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idCategoria'];
    this.categoriaService.find(this.id).subscribe((data: Categoria)=>{
      this.categoria = data;

      this.form.controls['nombre']?.setValue(this.categoria.nombre);

    });
  }

  submit(){
    if (this.form.valid) {
      this.categoria.nombre = this.form.value.nombre;
      this.categoriaService.update(this.id, this.categoria).subscribe(
        res => { console.log('Categroría actualizada satisfactoriamente!'); },
        err => { console.log(" ERROR, no se puedo editar la categoría id=" + this.id); })
    }
    this.router.navigateByUrl('categoria/index').then();

  }

}
