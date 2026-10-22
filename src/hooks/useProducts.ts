// src/hooks/useProducts.ts
import { useEffect, useState } from 'react';
import type { Product, ProductsResponse } from '../types/product';
import { PAGE_SIZE } from '../constants/pagination';

export function useProducts(page: number) {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const skip = (page - 1) * PAGE_SIZE;
        const res = await fetch(
          `https://dummyjson.com/products?limit=${PAGE_SIZE}&skip=${skip}`
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: ProductsResponse = await res.json();
        setProducts(data.products);
        setTotal(data.total);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  return { products, total, loading, error };
}