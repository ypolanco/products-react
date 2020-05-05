import React from 'react'
import "./Sort.css"

export default function Sort({product}) {
//   const sortClick = (e) => { 
// e
//   }
let sortResults = product.filter((name) => {
  return name.name.toLowerCase()
    
});
  
  console.log("SORTING BABY",sortResults);
  


  return (
    <div className="main-container">
      <h3>SORT BY:</h3>
      <div className="box">
        <select name="selector" id="selector">
          <option value="">Alphabetically, A-Z</option>
          <option value="">Alphabetically, Z-A</option>
          <option value="">Price, low to high</option>
          <option value="">Price, high to low</option>
        </select>
      </div>
    </div>
  )
}
