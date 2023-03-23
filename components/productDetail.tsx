import { Product } from '../components/Product';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <>
    <div className=''>
              <img src={product.image} alt={product.name} className='w-805 h-805'/>
    </div>
    <div>

      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <p>Brand:{product.brand}</p>
      <p>Rating:{product.rating}</p>
    </div>
    </>
  );
};

export default ProductDetail;
