import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { IoMdCloseCircle } from "react-icons/io";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Product = () => {
  const [allCapsules, setAllCapsules] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCapsule, setSelectedCapsule] = useState(null);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch("Capsules.json")
      .then((res) => res.json())
      .then((data) => setAllCapsules(data));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allCapsules.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const closeModal = () => {
    setSelectedCapsule(null);
  };

  return (
    <div className="container text-center p-10">
      <h1 className="mt-16 mb-10 uppercase font-bold text-xl">All Capsules</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.map((capsule) => (
          <div
            key={capsule.capsule_serial}
            className="card bg-[#E4F3FF] mb-5 shadow-xl capsule-card"
            onClick={() => setSelectedCapsule(capsule)}
          >
            <div className="card-body">
              <h2 className="card-title">
                Serial Number: {capsule.capsule_serial}
              </h2>
              <p>Status: {capsule.status}</p>
              <p>Type: {capsule.type}</p>
              <p>Original_Launch: {capsule.original_launch}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Section Here */}

      <Modal
        isOpen={selectedCapsule !== null}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Capsule Modal"
      >
        <div>
          <button className="ml-[90%]" onClick={closeModal}>
            <IoMdCloseCircle size={20}></IoMdCloseCircle>
          </button>
          <h2 className="font-bold ">Selected Capsule Details:</h2>
          {selectedCapsule && (
            <div>
              <p className="font-semibold">
                Serial Number: <span>{selectedCapsule.capsule_serial}</span>{" "}
              </p>
              <p className="font-semibold">Status: {selectedCapsule.status}</p>
              <p className="font-semibold">Type: {selectedCapsule.type}</p>
              <p className="font-semibold">
                Original_Launch: {selectedCapsule.original_launch}
              </p>
              <p className="font-semibold">
                Original_Launch_Unix: {selectedCapsule.original_launch_unix}
              </p>
              <p className="font-semibold">
                Details: {selectedCapsule.details}
              </p>
              <p className="font-semibold">
                Reuse_Count: {selectedCapsule.reuse_count}
              </p>
              <p className="font-semibold">
                Landings: {selectedCapsule.landings}
              </p>
            </div>
          )}
        </div>
      </Modal>

      {/* Pagination Section Here */}

      <div className="mt-4 flex justify-center">
        {Array.from({
          length: Math.ceil(allCapsules.length / itemsPerPage),
        }).map((_, index) => (
          <button
            key={index}
            className={`mx-2 px-3 py-1 rounded-full ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Product;
