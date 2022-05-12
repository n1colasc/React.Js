import React, { useState } from 'react'
import AddCategory from './AddCategory'
import GifGrid from './GifGrid'

const GifSearchApp = () => {

    const [categories, setCategories] = useState(['ReactJs'])
 
  return (
    <>
        <h2>GifSearchApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>
        <ol>
            {
                categories.map((category) => (
                    <GifGrid 
                        category={ category }
                        key={ category }
                    />
                ))
            }
        </ol>
    </>
  )
}

export default GifSearchApp