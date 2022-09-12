type Sizes = 'S' | 'M' | 'L' | 'XL';

type userId = string | number; // puede ser de tipo directo o primitivo
// type Product = {
//   id: string | number;
//   title: string;
//   createdAt: Date;
//   stock: number;
//   size?: Sizes;
// }

// interface tienen un cuerpo y conjunto de atributos de valores y puedo extenderlas
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 90,
});

const addProduct = (data: Product) => {
  products.push(data);
}

