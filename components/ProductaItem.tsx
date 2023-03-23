import React from 'react'
import Link from 'next/link'
export default function ProductaItem({product}:any ){
  return (
    <div className='card w-full ' style={{height: '26rem', width: '16rem'}}>
      <Link legacyBehavior  href={`/product/${product?.slug}`}>
        <div className='mt-5  h-64 object-cover object-center'>
        <a>
        <img src={product?.image} alt={product?.name} className='rounded shadow ' /> </a></div>
        </Link>
        <div className='flex flex-col items-center justify-center p-5'>
        <Link legacyBehavior  href={`/product/${product?.slug}`}>
          <a>
            <h2 className='text-lg '>{product?.name}</h2></a>
          </Link>
          <p>{product?.brand}</p>
          <button className='primary-button 'type='button'>Add to cart</button>
        </div>
        {/* <Link legacyBehavior  href={`/product/${product?.slug}`}>
        <a>
        <img src={product?.image} alt={product?.name} className='rounded shadow'/> </a>
        </Link>
        <div className='flex flex-col items-center justify-center p-5'>
        <Link legacyBehavior  href={`/product/${product?.slug}`}>
          <a>
            <h2 className='text-lg '>{product?.name}</h2></a>
          </Link>
          <p>{product?.brand}</p>
          <button className='primary-button 'type='button'>Add to cart</button>
        </div><Link legacyBehavior  href={`/product/${product?.slug}`}>
        <a>
        <img src={product?.image} alt={product?.name} className='rounded shadow'/> </a>
        </Link> */}
        {/* <div className='flex flex-col items-center justify-center p-5'>
        <Link legacyBehavior  href={`/product/${product?.slug}`}>
          <a>
            <h2 className='text-lg '>{product?.name}</h2></a>
          </Link>
          <p>{product?.brand}</p>
          <button className='primary-button 'type='button'>Add to cart</button>
        </div> */}
    </div>
    
  )
}
