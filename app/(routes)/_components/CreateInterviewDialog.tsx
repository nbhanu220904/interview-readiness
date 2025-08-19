import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ResumeUpload from "./ResumeUpload";
import JobDescription from "./JobDescription";

const CreateInterviewDialog = () => {
  const [formData, setFormData] = useState<any>();

  const onHandleInputChange = (field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div>
      <Dialog>
        {/* ✅ Prevent nested <button> */}
        <DialogTrigger asChild>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 cursor-pointer">
            Create Interview
          </Button>
        </DialogTrigger>

        <DialogContent className="min-w-3xl">
          <DialogHeader>
            <DialogTitle>Upload Your Resume</DialogTitle>
            {/* ✅ Keep only plain text here */}
            <DialogDescription>
              Please upload your resume in PDF format.
            </DialogDescription>
          </DialogHeader>

          {/* ✅ Tabs must live outside <p> */}
          <Tabs defaultValue="resume-upload" className="w-full mt-3">
            <TabsList>
              <TabsTrigger value="resume-upload">Upload Resume</TabsTrigger>
              <TabsTrigger value="job-description">Job Description</TabsTrigger>
            </TabsList>
            <TabsContent value="resume-upload">
              <ResumeUpload />
            </TabsContent>
            <TabsContent value="job-description">
              <JobDescription onHandleInputChange={onHandleInputChange} />
            </TabsContent>
          </Tabs>

          <DialogFooter className="flex justify-between items-center gap-5">
            <DialogClose asChild>
              <Button
                className="bg-transparent text-blue-600 hover:bg-gray-50 hover:text-blue-600 border-1 border-blue-600 cursor-pointer"
                variant={"ghost"}
              >
                Cancel
              </Button>
            </DialogClose>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateInterviewDialog;
