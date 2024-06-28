"use client";

import React, { useEffect, useState } from "react";
import Header from "@/app/components/Header";

export default function Programme() {
  return (
    <main>
      <Header />
      
      <div className="flex flex-col min-h-screen min-w-screen">
      <div className="grid h-20 card bg-base-300 p-4 ml-4 mr-4 mb-4 mt-4 rounded-box font-bold text-2xl place-content-evenly">Programme History</div> 

        <div className="grid h-95 card bg-base-300 p-4 ml-4 mr-4 mb-4 mt-4 rounded-box">

        <div className="overflow-x-auto">
<table className="table">
  {/* head */}
  <thead>
    <tr>
      <th>Programme Identification Digits</th>
      <th>Programme Name</th>
    </tr>
  </thead>
  <tbody>
    {/* row 1 */}
    <tr>
      <td></td>
      <td></td>

    </tr>
  </tbody>
</table>
</div>
</div>
      </div>
    </main>
  );
}