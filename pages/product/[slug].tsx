import { GetServerSideProps } from 'next';
import { Product } from '../../components/Product';
import ProductDetail from '@/components/productDetail';
import data from '@/utils/data';
interface SlugPageProps {
  product: Product;
}

const SlugPage = ({ product }: SlugPageProps) => {
  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
};

export default SlugPage;

export const getServerSideProps: GetServerSideProps<SlugPageProps> = async (context) => {
  const { slug } = context.query;
  const product = data.products.find((p) => p.slug === slug);
  {console.log(product)}

  return {
    props: {
      product,
    },
  };
};
