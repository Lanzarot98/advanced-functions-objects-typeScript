import axios from "axios";
import { UpdateProductDto } from "../dtos/product.dto";
import { Category } from "../models/category.model";
import { Product } from "../models/product.model"

//genérico:
export class BaseHttpService<TypeClass> {
  // data: TypeClass[] = [];

  constructor(
    protected url: string
  ) {}

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url)
    return data;
  }

  async update<ID, DTO> (id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

// const service = new BaseHttpService <string>();
// service.getAll();

// const service1 = new BaseHttpService <Category>();
// service1.getAll();


(async() => {
  // esto me hace lo que hace el HTTPService pero ya de forma genérica (es decir lo puedo usar)
  // yo puedo entonces construir cualquier otro producto, como el category service
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService <Product>(url1);

  const rta = await productService.getAll() // recordar que para que esto se resuelva tengo que resolver la promesa con await
  console.log('products', rta.length);
  productService.update<Product['id'], UpdateProductDto>(1, {
    title: 'asa',
  });


  // aca tenemos un array de categorías
  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService <Category>(url2);

  const rta2 = await categoryService.getAll()
  console.log('categories', rta2.length);


})();
