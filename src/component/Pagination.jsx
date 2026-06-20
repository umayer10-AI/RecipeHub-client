"use client";
import { useRouter } from "next/navigation";

const Pagination = ({
  totalPages,
  currentPage,
  search,
  category,
}) => {
  const router = useRouter();

  const handlePage = (page) => {
    const params = new URLSearchParams();

    if (search) params.set("search", search);
    if (category) params.set("category", category);

    params.set("page", page);

    router.push(`/browse?${params.toString()}`);
  };

  return (
    <div className="flex justify-center gap-2 mt-20 mb-10">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePage(currentPage - 1)}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            onClick={() => handlePage(page)}
            className={`px-4 py-2 border rounded ${
              currentPage === page
                ? "bg-blue-500 text-white"
                : ""
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePage(currentPage + 1)}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;