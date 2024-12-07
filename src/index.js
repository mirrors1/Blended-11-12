import './styles/normalize.css';
import './styles/index.css';
import { getAllProducts, searchProduct } from './requests/products';
import {
  createMarkupProducts,
  createSingleProduct,
} from './services/markupService';
import axios from 'axios';

const listAllProducts = document.querySelector('#allProducts');
const btnLoadAllProducts = document.querySelector('.loadAllProducts');

btnLoadAllProducts.addEventListener('click', handleLoadAllProducts);

async function handleLoadAllProducts(evt) {
  evt.preventDefault();
  try {
    const data = await getAllProducts();
    listAllProducts.insertAdjacentHTML('beforeend', createMarkupProducts(data));
  } catch (error) {
    alert(error.message);
  }
}

//-------------------------------------------------

const form = document.querySelector('#singleProductForm');
const singleProduct = document.querySelector('#singleProduct');

form.addEventListener('submit', showProductById);

async function showProductById(event) {
  event.preventDefault();

  const id = event.target.elements.id.value;

  try {
    const data = await searchProduct(id);
    singleProduct.insertAdjacentHTML('beforeend', createSingleProduct(data));
    event.target.reset();
  } catch (error) {
    alert(error.message);
  }
}
