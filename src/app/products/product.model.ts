import { BaseModel } from "../base.model";
import { Category } from "../categories/category.model";

// archivo de tipados:
export type Sizes = 'S' | 'M' | 'L' | 'XL';

// interface tienen un cuerpo y conjunto de atributos de valores y puedo extenderlas
export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Sizes;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}


