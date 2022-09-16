import { ProductHttpService } from './services/product-http.service';

(async ()=>{

  // recordar que este es con el HttpService, es decir traigo los datos desde el backend de la URL trabajada.
  const productService = new ProductHttpService();

  try {
    console.log('--'.repeat(10));
    console.log('getAll');
    const products = await productService.getAll();
    console.log(products.length);
    console.log(products.map((item) => item.price));

    const productId = products[0].id;
    console.log('--'.repeat(10));
    console.log('update');
    await productService.update(productId, {
      price: 1000,
      title: 'new title',
      description: 'new description',
    });

    console.log('--'.repeat(10));
    console.log('findOne');
    const product = await productService.findOne(productId);
    console.log(product);

  } catch (error) {
    console.error(error);
  }


  //lo que esta pasando aquí: persistencia que esta quedando en una base de datos
  // temporal en la nube no es que este guardando en memoria, literalmente
  // esta quedando en ua api real
})();



