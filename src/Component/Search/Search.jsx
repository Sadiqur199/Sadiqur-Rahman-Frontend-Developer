import React, { useState, useEffect } from "react";

const Search = () => {
  const [capsules, setCapsules] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [serialStatus, setSerialStatus] = useState("");
  const [capsuleType, setCapsuleType] = useState("");
  const [original_launch, setOriginal_launch] = useState("");

  useEffect(() => {
    fetch("Capsules.json")
      .then((res) => res.json())
      .then((data) => setCapsules(data));
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();

    const filteredCapsules = capsules.filter((capsule) => {
      return (
        (serialStatus === "" || capsule.status === serialStatus) &&
        (capsuleType === "" || capsule.type === capsuleType) &&
        (original_launch === "" || capsule.original_launch === original_launch)
      );
    });

    setSearchResults(filteredCapsules);
  };

  return (
    <div className="text-center">
      <h1 className="mt-16 mb-10 uppercase font-bold text-xl">
        Search The Capsules
      </h1>
      <form className="" onSubmit={handleSearch}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto">
          <div className="">
            <select
              className="select select-bordered w-full max-w-xs"
              value={serialStatus}
              onChange={(e) => setSerialStatus(e.target.value)}
            >
              <option value="">capsule Status</option>
              {capsules.map((capsule) => (
                <option
                  key={capsule.capsule_serial}
                  value={capsule.status}
                >
                  {capsule.status}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search by Capsule Type"
              className="input input-bordered w-full max-w-xs"
              value={capsuleType}
              onChange={(e) => setCapsuleType(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Search by original_launch"
              className="input input-bordered w-full max-w-xs"
              value={original_launch}
              onChange={(e) => setOriginal_launch(e.target.value)}
            />
          </div>
          <div className="btn w-[325px] md:ml-[100px] lg:ml-[220px] sm:ml-[214px] bg-[#606060] text-white hover:bg-[#606060]">
            <input type="submit" value="SEARCH" />
          </div>
        </div>
      </form>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchResults.map((capsule) => (
          <div
            key={capsule.capsule_serial}
            className="card md:ml-[600px] sm:ml-[170px] w-96 p-16 bg-[#E4F3FF] shadow-xl  mx-auto"
          >
            <p className="font-semibold">
              Serial Number: {capsule.capsule_serial}
            </p>
            <p>Status: {capsule.status}</p>
            <p>Original_launch_unix: {capsule.original_launch_unix}</p>
            <p>Details: {capsule.details}</p>
            <div className="mt-4">
              <p className="font-semibold">Missions:</p>
              <ul>
                {capsule.missions.map((mission) => (
                  <li key={mission.flight}>
                    Name: {mission.name}, Flight: {mission.flight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
