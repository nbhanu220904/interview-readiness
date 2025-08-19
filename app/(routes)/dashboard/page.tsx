"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import EmptyState from "../_components/EmptyState";
import CreateInterviewDialog from "../_components/CreateInterviewDialog";
// import AppHeader from "../_components/AppHeader";

const Dashboard = () => {
  const { user } = useUser();
  const [interviewList, setInterviewList] = useState([]);

  return (
    <div className="py-20 px-10 md:px-28 lg:px-44 xl:px-56">
      {/* <AppHeader /> */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg text-gray-500 font-semibold">Dashboard</h2>
          <h2 className="text-2xl font-bold">Welcome, {user?.fullName}</h2>
        </div>
        {/* <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 cursor-pointer">
          Create Interview
        </Button> */}
        <CreateInterviewDialog />
      </div>
      {interviewList.length === 0 ? <EmptyState /> : null}
    </div>
  );
};

export default Dashboard;
