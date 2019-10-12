import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  id: string
  producto: {}
  tags:{}
  rating: string[]
  people:string[]
  prodRelacionados:string[]

  constructor(private ProductoService: ProductosService, private rutaActiva: ActivatedRoute) {
    this.id = ""
    this.producto=[]
    this.tags=[]
    this.rating=[]
    this.people=[]
    this.prodRelacionados=[]
   }

  ngOnInit() {
    this.id = this.rutaActiva.snapshot.params.id
    this.ProductoService.getItemById(this.id)
    .then(response=>{
      this.producto = response
      this.tags = this.producto['variations'][0].tags

      for(let i=0;i<this.producto['rating'];i++){
        this.rating.push('rat')
      }
      
      for(let j=0; j<this.producto['variations'][0].people;j++){
        this.people.push('people')
      }
      
    this.prodRelacionados = this.producto['relatedProducts']
    })
  }

}
