import { Component } from '@angular/core';
import { Pelicula } from '../pelicula';
import { PeliculaService } from '../pelicula.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [
  ]
})
export class IndexComponent {

  peliculas: Pelicula[] = [];

  constructor(public peliculaService:PeliculaService) { }

  ngOnInit(): void {
    this.peliculaService.getAll().subscribe((data: Pelicula[])=>{
      this.peliculas= data;
      console.log(this.peliculas);
    })
  }

  deletePelicula(id: any){
    this.peliculaService.delete(id).subscribe(res => {
      this.peliculas = this.peliculas.filter(cat => cat.idPelicula !== id);
      console.log('Pelicula id =' + id + ' eliminada satisfactoriamente!');
    })
  }
}
