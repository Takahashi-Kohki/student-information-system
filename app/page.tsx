"use client";

import React, { useEffect, useState } from "react";
import Header from "@/app/components/Header";
import { useAuthContext } from "@/context/AuthContext";
import  getDocument from "@/lib/getData";
import { useRouter } from 'next/navigation'; // Import useRouter from Next.js

interface StudentData {
  name: string;
  studentId: string;
  cgpa: string;
  lectures: string[]; // Assuming lectures is an array of lecture IDs or references
  completedSemesters: number; // Added completedSemesters field
}

interface Lecture {
  day: string;
  id: string;
  programmeCode: string;
  name: string;
  time: string;
  location: string;
  date: string;
}

function Main(): JSX.Element {

  const [studentData, setStudentData] = useState<StudentData>({
    name: "",
    studentId: "",
    cgpa: "",
    lectures: [],
    completedSemesters: 0
  });
  
  // Access the user object from the authentication context
  // const { user } = useAuthContext();
  const { user } = useAuthContext() as { user: any }; // Use 'as' to assert the type as { user: any }
  const router = useRouter();

  useEffect( () => {
    // Redirect to the home page if the user is not logged in
    if ( user == null ) {
      router.push( "/login" );
    } else {
      if (user) {
        const uid = user.uid;
        // Now you have the UID of the signed-in user
        // Proceed to fetch data from Firestore based on this UID
        const { result, error } = await getDocument('students', uid);
      // Fetch student data
      
    }
    
  }, [ user, router ] ); // Include 'router' in the dependency array to resolve eslint warning


 const renderSemester = (semesterNumber: number) => {
  const isCompleted = semesterNumber <= studentData.completedSemesters;
  return (
    <li key={semesterNumber}>
      {semesterNumber !== 1 && (
        <hr
          className={isCompleted ? "bg-primary progress-bar-completed" : "bg-gray progress-bar"}
          style={{ margin: "0 auto", width: "200%", marginLeft: "-100%" }}
        />
      )}
      <div className={`timeline-box ${semesterNumber % 2 === 0 ? 'timeline-end' : 'timeline-start'}`}>
        Semester {semesterNumber}
      </div>
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-5 h-5 ${isCompleted ? 'text-primary' : 'text-gray'}`}
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {semesterNumber === studentData.completedSemesters && (
        <hr
          className="bg-primary progress-bar-completed"
          style={{ margin: "0 auto", width: "0%", marginLeft: "-110%" }}
        />
      )}
    </li>
  );
};


  return (
    <main>
      <Header />
      <div className="p-5">
        <div className="flex justify-center items-center stats shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Name</div>
            <div className="stat-value text-primary">{studentData.name}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Student ID</div>
            <div className="stat-value text-secondary">{studentData.studentId}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary static">
            </div>
            <div className="stat-title">CGPA</div>
            <div className="stat-value">{studentData.cgpa}</div>
          </div>
        </div>

        <div className="divider"> Upcoming Lectures</div>

        <div className="grid h-95 card bg-base-300 p-4 ml-1 mr-1 mb-4 mt-4 rounded-box">
          <div className="overflow-x-auto">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Programme Code</th>
                  <th>Time</th>
                  <th>Location</th>
                  <th>Day</th>
                </tr>
              </thead>
              <tbody>
                {lectures.map((lecture, index) => (
                  <tr key={lecture.id}>
                    <th>{index + 1}</th>
                    <td>{lecture.name}</td>
                    <td>{lecture.programmeCode}</td>
                    <td>{lecture.time}</td>
                    <td>{lecture.location}</td>
                    <td>{lecture.day}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    

        <div className="divider"> Current Semester Progress</div> 

        <ul className="timeline justify-center">
          {[1, 2, 3, 4, 5].map(semester => renderSemester(semester))}
        </ul>
      </div>
    </main>
  );
};

export default Main;