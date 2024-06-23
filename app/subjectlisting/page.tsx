"use client";

import React, { useEffect, useState } from "react";
import Header from "@/app/components/Header";

export default function SubjectListing() {
    return (
        <main>
          <Header />
 <div className="flex flex-col w-full">



 <div className="stats stats-vertical lg:stats-horizontal p-4 ml-4 mr-4 mb-4 mt-4 shadow">
  
 <label className="form-control w-full max-w-xs p-4">
  <div className="label">
    <span className="label-text">Select a semester</span>
  </div>
  <select className="select select-bordered">
    <option disabled selected>Pick one</option>
    <option></option>
    
  </select>
</label>

  <div className="stat">
    <div className="stat-title">Semester</div>
    <div className="stat-value text-lg "></div>
  </div>
  
  <div className="stat">
    <div className="stat-title">Printed Date</div>
    <div className="stat-value text-lg "></div>
  </div>
  
</div>
          <div className="grid h-95 card bg-base-300 p-4 ml-4 mr-4 mb-4 mt-4 rounded-box">

          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
      <th>Course Identification Digits</th>
      <th>Course Name</th>
      <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>
</div>
        </div>
</main>
    )
}