// src/components/ui/Pagination.tsx

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const MAX_VISIBLE = 5;

const baseBtn =
  'rounded border px-3 py-1.5 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-50';

const Pagination = ({ page, totalPages, onPageChange }: PaginationProps) => {
  if (totalPages <= 1) return null;

  const isFirst = page === 1;
  const isLast = page === totalPages;

  // نافذة من 5 أرقام حوالين الصفحة الحالية
  let start = Math.max(1, page - Math.floor(MAX_VISIBLE / 2));
  const end = Math.min(totalPages, start + MAX_VISIBLE - 1);
  start = Math.max(1, end - MAX_VISIBLE + 1);

  const pages: number[] = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <nav aria-label="Pagination" className="mt-8 flex flex-wrap items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onPageChange(page - 1)}
        disabled={isFirst}
        className={`${baseBtn} border-gray-300 bg-white enabled:hover:bg-gray-100`}
      >
        Previous
      </button>

      {pages.map(p => (
        <button
          key={p}
          type="button"
          onClick={() => onPageChange(p)}
          aria-current={p === page ? 'page' : undefined}
          className={`${baseBtn} ${
            p === page
              ? 'border-blue-600 bg-blue-600 text-white'
              : 'border-gray-300 bg-white hover:bg-gray-100'
          }`}
        >
          {p}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(page + 1)}
        disabled={isLast}
        className={`${baseBtn} border-gray-300 bg-white enabled:hover:bg-gray-100`}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;