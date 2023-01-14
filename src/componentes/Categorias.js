import React from 'react'
import FilterProductsByCategory from './FilterProductsByCategory';
import { useState } from 'react';

const Categorias = () => {
    const categories = [{id:1,categoryName:"Productos",
    id:2,categoryName:"Wilson",id:3,categoryName:"Head",id:4,categoryName:"Babolat",id:5,categoryName:"Carrito"}]
    const [selectedCategoryId, setSelectedCategoryId] = useState();

    const handleCategorySelection = (categoryId) => {
        setSelectedCategoryId(categoryId);
    }

    const productsToShow = FilterProductsByCategory(selectedCategoryId);

    return (
        <div>
            <div>Categorias</div>
            <div>
                {categories.map((category) => (
                    <div key={category.id}>
                        <button onClick={() => handleCategorySelection(category.id)}>
                            {category.categoryName}
                        </button>
                    </div>
                ))}
            </div>
            <div>
                {productsToShow.map((product) => (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
 }
export default Categorias
