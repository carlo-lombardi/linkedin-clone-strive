import RecomandedItem from "./RecomandedItem";
import { getAllProfiles } from "../functions/functions";
import { useState, useEffect } from "react";

import { FaArrowRight, FaInfoCircle } from "react-icons/fa";

export default function Recomandation() {
  const [profilesData, updateProfilesData] = useState([]);
  useEffect(async () => {
    updateProfilesData(await getAllProfiles());
  }, []);

  function mapProfiles(limit) {
    return profilesData.slice(101, limit).map((profile) => {
      return (
        <RecomandedItem
          key={profile._id}
          id={profile._id}
          image={profile.image}
          name={profile.name}
          surname={profile.surname}
          title={profile.title}
        />
      );
    });
  }
  return (
    <div className="p-3 my-2 border bg-white round-border">
      <div className="d-flex justify-content-between">
        <h5 className="mt-2 text-left">Add to your feed</h5>
        <p className="my-2">
          <FaInfoCircle />
        </p>
      </div>
      <div className="d-flex flex-column my-4">{mapProfiles(104)}</div>
      <div>
        <p className="mb-0">
          View all recommendations <FaArrowRight />
        </p>
      </div>
    </div>
  );
}
