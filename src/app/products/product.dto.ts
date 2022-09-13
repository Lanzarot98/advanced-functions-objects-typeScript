import { Product } from "./product.model";
// type CreateProductDto = Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category' >;

// crear un nuevo tipo con base a product, omitiendo el id o excluyo ciertas cosas
export interface CreateProductDto extends Omit <Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryId: string; // que obtenga el category Id
}

// con pick elijo las cosas
type example = Pick<Product, 'color' | 'description'>

export interface UpdateProductDto extends Partial<CreateProductDto> {}


// se puede realizar esto pero no sería buena práctica ya que lo mejor es reutilizar código:
// interface UpdateProductDto {
//   title?: string;
//   image?: string;
//   description?: string;
//   stock?: number;
//   size?: Sizes;
//   color?: string;
//   price?: number;
//   category?: Category;
//   isNew?: boolean;
//   tags?: string[];
// }


