import './styles/normalize.css';
import './styles/index.css';
import { getAllProducts } from './requests/products';
import { createMarkupProducts } from './services/markupService';

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
