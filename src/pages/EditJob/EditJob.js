
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import JobForm from "../../components/JobForm/JobForm";

const EditJob = () => {
  return (
    <div>
    
        <Navbar></Navbar>
        <div class="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
          <Sidebar></Sidebar>
          <div class="lg:pl-[14rem] mt-[5.8125rem]">
            <main class="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
              <h1 class="mb-10 text-center lws-section-title">Edit Job</h1>

           <JobForm></JobForm>
            </main>
          </div>
        </div>
    </div>
  );
};

export default EditJob;
