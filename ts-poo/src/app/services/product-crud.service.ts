import { UpdateProductDto } from "../dtos/product.dto";
import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";
import { ProductHttpService } from "./product-http2.service";

export class ProductCRUDService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  private http = new ProductHttpService(this.url); // tiene que ser la versión dos la que se importa http2


  async update(id:Product['id'], dto: UpdateProductDto) {
    // permisos
    // lógica
    // this.http.otroRequest // puedo usar los otros métodos de la versión 2 http
    return this.http.update(id,dto);
  }
}
