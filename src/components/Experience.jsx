import React from "react";
import Job from "./Job";
import { FaPen, FaPlus } from "react-icons/fa";
import CardElement from "./Job";

export default function Experience() {
  return (
    <div>
      <div className=" mx-1 pt-1 d-flex align-items-center ">
        <h4>Experience</h4>

        {/* <i class="fas fa-plus"></i> */}
        <p className="ml-auto">
          <FaPlus />
        </p>
      </div>
      <div className=" mx-2 px-2 d-flex align-items-center">
        <Job img="https://coursereport-s3-production.global.ssl.fastly.net/rich/rich_files/rich_files/6256/s300/strive-20school-20logo.png" title="job title" subtitle="job description" text="job duration" />
      </div>
    </div>
  );
}
