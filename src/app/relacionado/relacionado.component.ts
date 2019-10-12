import { Component, OnInit, Input } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relacionado',
  templateUrl: './relacionado.component.html',
  styleUrls: ['./relacionado.component.css']
})
export class RelacionadoComponent implements OnInit {

  @Input() id: string;
  baseUrl: string;
  producto: {}
  

  constructor(private productoService: ProductosService, private router: Router) { 
    this.baseUrl = "https://staging-k8s-api.mumablue.com/api/products"
    this.producto = []
  }

  ngOnInit() {
    this.productoService.getItemByIdRel(this.id)
    .then(response=>{
      this.producto = response
    })
  }
}
