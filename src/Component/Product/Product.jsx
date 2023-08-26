import React, { useEffect, useState } from "react";

const Product = () => {
  const [allCapsules, setAllCapsules] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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

  return (
    <div className="container text-center">
      <h1 className="mt-16 mb-10 uppercase font-bold text-xl">All Capsules</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.map((capsule) => (
          <div key={capsule.capsule_serial} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Serial Number: {capsule.capsule_serial}</h2>
              <p>Status: {capsule.status}</p>
              <p>Type: {capsule.type}</p>
              <p>Details: {capsule.details}</p>
              <ul>
                {capsule.missions.map((mission) => (
                  <li key={mission.flight}>
                    MissionsName: {mission.name},<br /> MissionsFlight: {mission.flight}
                  </li>
                ))}
              </ul>
              <div className="card-actions justify-end">
                {/* Add any additional actions or buttons you want */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        {Array.from({ length: Math.ceil(allCapsules.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            className={`mx-2 px-3 py-1 rounded-full ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
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
