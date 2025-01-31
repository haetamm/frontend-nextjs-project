import { useRouter } from "next/navigation";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const router = useRouter();

  const handlePageChange = (page) => {
    setCurrentPage(page);
    router.push(`?page=${page}`);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="join">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className="join-item btn"
        >
          «
        </button>
        <button className="join-item btn">
          {" "}
          Page {currentPage} of {totalPages}{" "}
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="join-item btn"
        >
          »
        </button>
      </div>
    </div>
  );
};

export default Pagination;
