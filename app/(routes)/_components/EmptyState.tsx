import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import CreateInterviewDialog from "./CreateInterviewDialog";

const EmptyState = () => {
  return (
    <div className="my-14 flex flex-col items-center justify-center gap-4 text-center border-dashed p-10 border-3 rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50">
      <Image
        src={"/interview.png"}
        alt="Interview"
        width={150}
        height={150}
        className="rounded-lg"
      />
      <h2 className="mt-2 text-lg font-semibold text-gray-500 dark:text-gray-300">
        Looks like your interview list is empty. Create one to get started!
      </h2>
      <CreateInterviewDialog />
    </div>
  );
};

export default EmptyState;
