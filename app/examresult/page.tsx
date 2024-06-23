"use client";

import React, { useEffect, useState } from "react";
import Header from "@/app/components/Header";


export default function ExamResult() {
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
                            <option>

                            </option>
                        </select>
                    </label>

                    <div className="stat">
                        <div className="stat-title">Semester Period</div>
                        <div className="stat-value text-lg "></div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Printed Date</div>
                        <div className="stat-value text-lg "></div>
                    </div>
                </div>

                <div className="divider text-slate-400">The results published on this site is for information only. Please contact office for official transcript.</div>
                <div className="card bg-base-300 rounded-box p-4 ml-4 mr-4 mb-4 mt-4">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Subject Code</th>
                                    <th>Subject Title</th>
                                    <th>Credit Hours</th>
                                    <th>Marks</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="card bg-base-300 rounded-box p-4 ml-4 mr-4 mb-4 mt-4">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Semester Credits</th>
                                    <th>GPA</th>
                                    <th>Total Credit Hours Earned</th>
                                    <th>CGPA</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* one row only */}
                                <tr>
                                    <td></td>
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