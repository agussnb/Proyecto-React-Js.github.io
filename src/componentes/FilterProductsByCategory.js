import React from 'react'
import productos from './ItemListContainer'

  const FilterProductsByCategory = (categoryId) => {
  const filteredProducts = productos.filter(product => product.categoryId === categoryId);
  return filteredProducts;
}

export default FilterProductsByCategory 