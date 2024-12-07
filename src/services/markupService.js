export function createMarkupProducts(arr) {
  return arr
    .map(
      ({ id, title, description, price, thumbnail }) => `
        <li class="list__item" data-id="${id}">            
            <h2 class="list__title">${title}</h2>
            <img src="${thumbnail}" alt="${title}">
            <p>${description}</p>
            <p>${price} грн.</p>
        </li>
    `
    )
    .join('');
}
