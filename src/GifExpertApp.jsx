import { useState } from 'react'
export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One punch', 'Dragon Ball'])

    console.log(categories)  
    return (
    <>
        {/* Título */}
        <h1>GifExpertApp</h1>
        {/* Input */}

        {/* Listado de Gifs */}

        <ol>
          {categories.map(category => {
              return <li>Hola</li>
          })
        } 
        </ol> 

            {/* Gif Item */}

    </>
  )
}
