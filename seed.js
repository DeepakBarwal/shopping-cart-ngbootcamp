const mongoose = require('mongoose');
const Product = require('./models/product');

const products = [
  {
    name: 'iPhone 12',
    img:
      'https://images.unsplash.com/photo-1610034499386-e70758847b99?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    price: 100000,
    desc:
      'iPhone 12 Pro Max 128GB Silver. Beautifully bright 6.7‑inch Super Retina XDR display.1 Ceramic Shield',
  },
  {
    name: 'Macbook Air',
    img:
      'https://images.unsplash.com/photo-1493020258366-be3ead1b3027?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFjJTIwYWlyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    price: 200000,
    desc:
      'iPhone 12 Pro Max 128GB Silver. Beautifully bright 6.7‑inch Super Retina XDR display.1 Ceramic Shield',
  },
  {
    name: 'Macbook Pro',
    img:
      'https://images.unsplash.com/photo-1561469372-eb082b4f8f44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFjJTIwYXByb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    price: 300000,
    desc:
      'iPhone 12 Pro Max 128GB Silver. Beautifully bright 6.7‑inch Super Retina XDR display.1 Ceramic Shield',
  },
  {
    name: 'Watch',
    img:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    price: 8000,
    desc:
      'iPhone 12 Pro Max 128GB Silver. Beautifully bright 6.7‑inch Super Retina XDR display.1 Ceramic Shield',
  },
  {
    name: 'Shoes',
    img:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    price: 9000,
    desc:
      'iPhone 12 Pro Max 128GB Silver. Beautifully bright 6.7‑inch Super Retina XDR display.1 Ceramic Shield',
  },
  {
    name: 'Headphones',
    img:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    price: 9000,
    desc:
      'iPhone 12 Pro Max 128GB Silver. Beautifully bright 6.7‑inch Super Retina XDR display.1 Ceramic Shield',
  },
];

const seedDB = async () => {
  await Product.insertMany(products);
  console.log('DB Seeded');
};

module.exports = seedDB;
