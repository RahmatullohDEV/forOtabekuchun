import React, { useEffect, useState } from 'react'
import { FidgetSpinner } from 'react-loader-spinner'


function Shop(props) {
  const [data, setData] = useState([])
  useEffect(() => {
    const searchQuery = `https://dummyjson.com/products/category/laptops?title_like=${props.searchData}`;
    fetch(searchQuery)
      .then(res => res.json())
      .then(data => setData(data.products))
      .catch(error => console.error('Error:', error));
  }, [props.searchData]);
console.log(data);
  return (
    <div>
      <div className='cards'>
        {data.length ?
          Array.isArray(data) && data?.filter(el=>el.title.toLowerCase().includes(props.searchData.toLowerCase())).map(el => (
            <div className='Card' key={el.id}>
              <h3>{el.brand}</h3>
              <img src={el.images[0]} alt=""/>
              <h5>{el.category}</h5>
              <h4>{el.title}</h4>
              <p>{el.price} $</p>
              <button onClick={()=>{props.getData(el) }}>Add</button>
              
            </div>
          )) : <div className='loading'><FidgetSpinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={['rgb(255, 77, 0)', 'rgb(255, 77, 0)', 'rgb(255, 77, 0)']}
          backgroundColor="rgb(0, 58, 115)"
        />
        </div>
        }

      </div>
    </div>
  )
}

export default Shop