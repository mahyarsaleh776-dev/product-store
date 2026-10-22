import { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { PAGE_SIZE } from '../constants/pagination';
import ProductGrid from '../components/products/ProductGrid';
import Pagination from '../components/ui/Pagination';
import Spinner from '../components/ui/Spinner';
import ErrorMessage from '../components/ui/ErrorMessage';
import EmptyState from '../components/ui/EmptyState';

const ProductsPage = () => {
  const [page, setPage] = useState(1);
  const { products, total, loading, error } = useProducts(page);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderContent = () => {
    if (loading) return <Spinner />;
    if (error) return <ErrorMessage message={error} />;
    if (products.length === 0) return <EmptyState />;

    return (
      <>
        <ProductGrid products={products} />
        <Pagination page={page} totalPages={totalPages} onPageChange={handlePageChange} />
      </>
    );
  };

  return (
    <section id="products" className="scroll-mt-20 py-8">
      <h2 className="mb-6 text-2xl font-bold">Products</h2>
      {renderContent()}
    </section>
  );
};

export default ProductsPage;