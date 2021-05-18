import PeopleItem from "./PeopleItem";
import { getAllProfiles } from "../functions/functions";
import { useState, useEffect } from "react";

export default function PeopleColumn() {
  const [profilesData, updateProfilesData] = useState([]);
  useEffect(async () => {
    updateProfilesData(await getAllProfiles());
  }, []);
  console.log("profilesData", profilesData);
  function mapProfiles(limit) {
    return profilesData.slice(1, limit).map((profile) => {
      return (
        <PeopleItem
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
      <h5 className="mt-2 text-left">People also viewed</h5>
      <div className="d-flex flex-column my-4">{mapProfiles(10)}</div>
    </div>
  );
}
