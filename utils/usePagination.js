import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const usePagination = (totalPages, route) => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const { page } = router.query;

  useEffect(() => {
    let currentPage;
    const savedPageKey = route === '/home' ? 'currentPageHome' : 'currentPageUser';
    const savedPage = sessionStorage.getItem(savedPageKey);
    
    if (!router.query.page) {
      currentPage = savedPage ? parseInt(savedPage) : 1;
      setCurrentPage(currentPage);
      router.replace(`${route}?page=${currentPage}`);
    } else {
      currentPage = parseInt(router.query.page);
      setCurrentPage(currentPage);
    }
  }, [router, route]);

  const handlePageChange = (page) => {
    window.scrollTo(0, 0);
    const savedPageKey = route === '/home' ? 'currentPageHome' : 'currentPageUser';
    sessionStorage.setItem(savedPageKey, page);
    router.push(`${route}?page=${page}`);
  };

  const renderPagination = () => {
    const pages = [];

    let startPage = currentPage - 1;
    let endPage = currentPage + 2;

    if (startPage < 1) {
      endPage += Math.abs(startPage - 1);
      startPage = 1;
    }

    if (endPage > totalPages) {
      startPage -= endPage - totalPages;
      endPage = totalPages;
    }

    if (currentPage > 1) {
      pages.push(
        <li key="previous" className=" p-1">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            className="py-1 px-2 border-2 rounded-sm bg-blue-300"
          >
            &lt;
          </button>
        </li>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      if (i > 0) { 
        pages.push(
          <li key={i} className={` p-1 m-1 ${currentPage === i ? 'font-bold text-black' : 'text-black'}`}>
            <button
              onClick={() => handlePageChange(i)}
              className=" py-1 px-2 border-2 rounded-sm bg-blue-300"
            >
              {i}
            </button>
          </li>
        );
      }
    }

    if (currentPage < totalPages) {
      pages.push(
        <li key="next" className="mx-1 p-1">
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className=" py-1 px-2 border-2 rounded-sm bg-blue-300"
          >
            &#62;
          </button>
        </li>
      );
    }

    return (
      <>
        <div className='justify-center flex mt-10'>
          <div className='font-bold text-lg'>On page: {page}</div>
        </div>
        <div className='text-center mt-0 justify-center grid-cols-5 flex text-md mb-3 text-gray-800 text-lg'>
          <ul className="flex mt-8">{pages}</ul>
        </div>
      </>
    );
  };

  return {
    currentPage,
    handlePageChange,
    renderPagination,
  };
};

export default usePagination;
