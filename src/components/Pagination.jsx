const Pagination = ({ currentPage, noOfPages, handleLeft, handleRight, handlePageChange }) => {
    return (
        <div className="flex justify-center items-center my-4">
            <div className="flex items-center space-x-2">
                <button
                    disabled={currentPage === 0}
                    className={`page-number px-4 py-2 bg-gray-600 text-white rounded-lg focus:outline-none 
                    ${currentPage === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-500 transition-all"}`}
                    onClick={() => handleLeft()}
                >
                    ◀️
                </button>

                {[...Array(noOfPages).keys()].map((number) => (
                    <button
                        key={number}
                        className={`page-number px-4 py-2 bg-gray-200 text-gray-800 rounded-lg focus:outline-none 
                        ${number === currentPage ? "bg-blue-600 text-white" : "hover:bg-gray-300 transition-all"}`}
                        onClick={() => handlePageChange(number)}
                    >
                        {number + 1}
                    </button>
                ))}

                <button
                    disabled={currentPage === noOfPages - 1}
                    className={`page-number px-4 py-2 bg-gray-600 text-white rounded-lg focus:outline-none
                    ${currentPage === noOfPages - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-500 transition-all"}`}
                    onClick={() => handleRight()}
                >
                    ▶️
                </button>
            </div>
        </div>
    );
};

export default Pagination;
