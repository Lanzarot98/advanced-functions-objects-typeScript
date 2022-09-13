// aquí será la manipulación
import { faker } from '@faker-js/faker';

import { Product } from "./product.model";
import { CreateProductDto, UpdateProductDto, FindProductDto } from "./product.dto";

export const products: Product[] = [];


export const addProduct = (data: CreateProductDto): Product => {
  // data generado por la base de datos
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct;
}




export const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {
  const index = products.findIndex((item) => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData, // si solo aplicara changes me reescribiría casi todo el objeto y tendría perdida de información
    ...changes // por eso mando el prevData.
  }
  return products[index];
}

export const findProducts = (dto: FindProductDto): Product[] => {
  // code
  // dto.color = 'blue';
  // dto.tags = [];
  // dto.tags?.push();
  // dto.tags?.pop();
  return products;
}


export const deleteProduct = (id: string) => {
  // code
}

