import React from 'react'

function Quti(props) {

  return (
    <div className='cards'>
      {Array.isArray(props.data) && props.data?.map(el => (
        <div className='Card' key={el.id}>
          <h3>{el.brand}</h3>
          <img src={el.images[0]} alt="" />
          <h5>{el.category}</h5>
          <h4>{el.title}</h4>
          <p>{el.price} $</p>
          <button className='cards1' onClick={() => props.removeData(el)}>remove</button>
        </div>
      ))
      }
    </div>
  )
}

export default Quti