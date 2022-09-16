import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { Product } from "./product.model";

export interface ProductService {
  getAll(): Promise<Product[]> | Product[]; // puede retornar una promesa con un array de productos o un array de productos
  update(id: Product['id'], changes: UpdateProductDto): Product | Promise<Product>;
  create(dto: CreateProductDto): Product | Promise<Product>; // recibe los parámetros de tipo CreateProductDto y esto me debe arrojar o retornar datos de tipo Product
  findOne(id: Product['id']): Product | Promise<Product | undefined> | undefined; // en caso que no encuentre un producto será undefined

}
