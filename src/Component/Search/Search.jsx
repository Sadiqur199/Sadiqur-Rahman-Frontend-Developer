import React, { useState, useEffect } from "react";
// import { fetchCapsules } from "./api"; // Adjust the path to api.js

const Search = () => {
  const [capsules, setCapsules] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [serialNumber, setSerialNumber] = useState("");
  const [capsuleType, setCapsuleType] = useState("");
  const [missionName, setMissionName] = useState("");

  useEffect(() => {
    fetch("Capsules.json")
      .then((res) => res.json())
      .then((data) => setCapsules(data));
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();

    const filteredCapsules = capsules.filter((capsule) => {
      return (
        (serialNumber === "" || capsule.capsule_serial === serialNumber) &&
        (capsuleType === "" || capsule.type === capsuleType) &&
        (missionName === "" ||
          capsule.missions.some((mission) =>
            mission.name.toLowerCase().includes(missionName.toLowerCase())
          ))
      );
    });

    setSearchResults(filteredCapsules);
  };

  return (
    <div className="text-center">
      <h1 className="mt-16 mb-10 uppercase font-bold text-xl">Search The Capsules</h1>
      <form className="" onSubmit={handleSearch}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto">
          <div className="">
            <select
              className="select select-bordered w-full max-w-xs"
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value)}
            >
              <option value="">capsule_serial</option>
              {capsules.map((capsule) => (
                <option
                  key={capsule.capsule_serial}
                  value={capsule.capsule_serial}
                >
                  {capsule.capsule_serial}
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
              placeholder="Search by Mission Name"
              className="input input-bordered w-full max-w-xs"
              value={missionName}
              onChange={(e) => setMissionName(e.target.value)}
            />
          </div>
          <div className="btn w-[325px] md:ml-[100px] lg:ml-[220px] sm:ml-[214px] bg-[#606060] text-white">
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

            {/* Add more information you want to display */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
