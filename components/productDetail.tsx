import { Product } from '../components/Product';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <>
    <div className='flex'>
    <div className='p-12  bg-purple-600'>
              <img src={product.image} alt={product.name} width={600} height={500} />
    </div>

    <div className='mb-2 p-10 flex  flex-col'>

      <h1 className=' text-6xl'>{product.name}</h1>
      <h5 className='text-3xl'>{product.description}</h5>
      <h2 className='text-5xl'>Brand:{product.brand}</h2>
      <h1 className='text-6xl'>Rating:{product.rating}</h1>
    </div>
    <div className='card  flex  p-10 mb-2 m-8  '>
      <div className='flex flex-row'>
          <div className='text-6xl'>Price:</div> 
          <div className='text-6xl flex  '>${product.price}</div>
          </div>
          <div className='mb-2  flex flex-row'>
            <div className='text-4xl'> Status:</div>
            <div className='text-4xl'>{product.countInStock>0?'In Stack':'Unavailable'}</div>
          </div>
          <button className='primary-button w-full'>Add to Cart</button>
    </div>
    </div>
    </>
  );
};

export default ProductDetail;


