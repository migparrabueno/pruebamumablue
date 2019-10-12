import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  productos: {};
  tags: string[]

  constructor(private productosService: ProductosService, private router: Router) {
    this.productos = [];
    this.tags=[];
   }

  ngOnInit() {
    this.getAllProd();    
  }

  getAllProd(){
    this.productosService.getAllItems()
    .then(response=>{
      this.productos=Object.values(response['hydra:member']);
    })
  }

  onClickProd(id){
    console.log(id)
    this.router.navigate(['producto', id])
  }

}
