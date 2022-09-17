import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";

// este va heredar baseHttp
export class ProductHttpService extends BaseHttpService<Product>{
  otroRequest(){
    this.url;
    //code
    // code
  }
}
