import { ProductMemoryService } from "./services/product-memory.service";


const productService = new ProductMemoryService();

productService.create({
  title: 'Product 1',
  price: 100,
  description: 'description',
  categoryId: 12,
  images: [],
});

// llamo/obtengo todos los productos
const products = productService.getAll();
//Obtengo el Id solo de la posición del producto inicial
const productId = products[0].id;

// llamo el método actualizar mandando el argumento Id del producto que quiero actualizar
productService.update(productId, {
  title: 'cambiar nombre'
});

// llamó e producto que quiero especificando por Id
const rta = productService.findOne(productId);
console.log(rta);


