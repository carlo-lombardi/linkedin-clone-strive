import PeopleItem from "./PeopleItem";
import { getAllProfiles } from "../functions/functions";
import { useState, useEffect } from "react";
const auth =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMWE0NjZmZDIyODAwMTUzZmRiYjIiLCJpYXQiOjE2MTc2OTczNTEsImV4cCI6MTYxODkwNjk1MX0.z50JfhhjKZpYGwCvaA1tJAjx8DT5qtEdJK-7K47cYAw";

export default function PeopleColumn() {
  const [profilesData, updateProfilesData] = useState([]);
  useEffect(async () => {
    updateProfilesData(await getAllProfiles(auth));
  }, []);
  console.log("profilesData", profilesData);
  function mapProfiles(limit) {
    return profilesData.slice(92, limit).map((profile) => {
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
      <div className="d-flex flex-column my-4">{mapProfiles(104)}</div>
    </div>
  );
}
