// aquí será la manipulación
import {faker} from '@faker-js/faker';
import { Product } from "./product.model";
import { CreateProductDto } from "./product.dto";

export const products: Product[] = [];


export const addProduct = (data: CreateProductDto): Product => {
  // data generado por la base de datos:
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createAt: faker.date.recent(),
    updateAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createAt: faker.date.recent(),
      updateAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct;
}


export const updateProduct = (id: string, changes: Product) => {
  // code
}

export const deleteProduct = (id: string) => {
  // code
}

