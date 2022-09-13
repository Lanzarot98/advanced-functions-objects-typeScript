import { Product } from "./product.model";
// type CreateProductDto = Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category' >;

// crear un nuevo tipo con base a product, omitiendo el id
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryId: string;
}

// con pick elijo las cosas
// type example = Pick<Product, 'color' | 'description'>
