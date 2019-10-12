import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = "https://staging-k8s-api.mumablue.com/api/products"
  }

  getAllItems(){
    return this.http.get(`${this.baseUrl}`).toPromise();
  }

  getItemById(pId){
    return this.http.get(`${this.baseUrl}/${pId}`).toPromise();
  }

  getItemByIdRel(pId){
  return this.http.get(`https://staging-k8s-api.mumablue.com${pId}`).toPromise();
  }
}
