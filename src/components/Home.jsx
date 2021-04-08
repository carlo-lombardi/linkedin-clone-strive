import Recomandation from "./Recomandation";

import PostsContainer from "./PostsContainer";
import { useState, useEffect } from "react";
import { getAllPosts } from "../functions/functions";
const auth =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMWE0NjZmZDIyODAwMTUzZmRiYjIiLCJpYXQiOjE2MTc2OTczNTEsImV4cCI6MTYxODkwNjk1MX0.z50JfhhjKZpYGwCvaA1tJAjx8DT5qtEdJK-7K47cYAw";
export default function Home() {
  const [data, updateData] = useState([]);
  async function fetchData() {
    updateData(await getAllPosts(auth));
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="row vh-100 pt-2">
        <div className="left col d-none col-12 d-lg-block col-md-2 bg-primary">{/* left columns go here */}</div>
        <div className="mid col-12 col-md-6">
          {/* mid columns go here  */}
          <PostsContainer postsData={data} refreshData={fetchData} auth={auth} />
        </div>
        <div className="right col col-12 col-md-4 bg-warning">
          {/* right columns go here */}
          <Recomandation />
        </div>
      </div>
    </div>
  );
}
