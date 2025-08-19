import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const JobDescription = ({ onHandleInputChange }: any) => {
  return (
    <div className="flex flex-col gap-4 border rounded-xl p-5 bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 ">
      <div>
        <label>Job Title</label>
        <Input
          placeholder="Ex. Full Stack Developer"
          onChange={(event) =>
            onHandleInputChange("jobTitle", event.target.value)
          }
        />
      </div>
      <div>
        <label>Job Description</label>
        <Textarea
          onChange={(event) =>
            onHandleInputChange("jobDescription", event.target.value)
          }
          className="min-h-[200px]"
          placeholder="Ex. Provide the job description for the specific role you’re applying for."
        />
      </div>
    </div>
  );
};

export default JobDescription;
