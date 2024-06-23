"use client";

import React, { useEffect, useState } from "react";
import Header from "@/app/components/Header";

export default function Timetable() {
    return (
        <main>
            <Header />
            
            <div className="flex flex-col w-full">
            <div className="stats stats-vertical lg:stats-horizontal p-4 ml-4 mr-4 mb-4 mt-4 shadow">
  
  <div className="stat">
    <div className="stat-title">Semester</div>
    <div className="stat-value text-lg "></div>
  </div>
  
  <div className="stat">
    <div className="stat-title">Printed Date</div>
    <div className="stat-value text-lg "></div>
  </div>
  
  </div>
                
                <div className="divider text-slate-400">The following is the scheduled classes information. Information may be subjected to changes.</div>
  
                <div className="grid h-95 card bg-base-300 p-4 ml-4 mr-4 mb-4 mt-4 rounded-box">
                    <div className="overflow-x-auto">
                        <table className="table table-xs">
  
                        
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Course Code</th>
                                    <th>Course Name</th>
                                    <th>Time</th>
                                    <th>Location</th>
                                    <th>Day</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                    <th></th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th>Programme Code</th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Location</th>
                                    <th>Day</th>
                                </tr>
                            </tfoot>
                            
                        </table>
                        
                    </div>
                </div>

                <div className="join justify-center">
                <button className="join-item btn">«</button>
                <button className="join-item btn"></button>
                <button className="join-item btn">»</button>
                </div>
                
            </div>
  </main>
    )
  }