import { Product } from "./product.model";
// type CreateProductDto = Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category' >;

// crear un nuevo tipo con base a product, omitiendo el id o excluyo ciertas cosas
export interface CreateProductDto extends Omit <Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryId: string; // que obtenga el category Id
}

// con pick elijo las cosas
type example = Pick<Product, 'color' | 'description'>

// Partial lo deja todo como opcional.
export interface UpdateProductDto extends Partial<CreateProductDto> {}

// lo contrario a Partial, Required lo deja todo como obligatorio
type example2 = Required<Product>;

// los dto se pueden anidar, entonces el partial retorna un tipo y a ese tipo se le aplica el Readonly
export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>>{
  readonly tags: ReadonlyArray<string>;
}

// que todos los parámetros sean de lectura (no se puede modificar nada)
type example3 = Readonly<Product>;









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


