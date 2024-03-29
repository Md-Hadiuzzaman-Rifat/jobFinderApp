import { faBriefcase, faFileCirclePlus, faStop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const AddNewJob = () => {
    return (
        <body>
  <nav class="max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0">
    <img src="/images/logo.svg" />
  </nav>
  <div class="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
    <div class="sidebar">
      <nav>
        <ul class="space-y-4">
          <li>
            <a href="/jobs" class="main-menu menu-active" id="lws-alljobs-menu">
            <FontAwesomeIcon icon={faBriefcase} class="fa-stop mx-2" />
              {/* <i class="fa-solid fa-briefcase"></i> */}
              <span> All Available Jobs</span>
            </a>
            <ul class="space-y-6 lg:space-y-2 ">
              <li>
                <a class="sub-menu" href="/jobs/internship" id="lws-internship-menu">
                   <FontAwesomeIcon icon={faStop} class="fa-stop !text-[#FF5757]" />
                  Internship
                </a>
              </li>
              <li>
                <a class="sub-menu" href="/jobs/fulltime" id="lws-fulltime-menu">
                  {/* <i class="fa-solid fa-stop !text-[#FF8A00]"></i> */}
                  <FontAwesomeIcon icon={faStop} class="fa-stop !text-[#FF8A00]" />
                  Full Time
                </a>
              </li>
              <li>
                <a class="sub-menu" href="/jobs/remote" id="lws-remote-menu">
                  <FontAwesomeIcon icon={faStop} class="fa-solid fa-stop !text-[#56E5C4]" />
                  Remote
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/jobs" class="main-menu" id="lws-addJob-menu">
              {/* <i class="fa-solid fa-file-circle-plus"></i>
               */}
               <FontAwesomeIcon icon={faFileCirclePlus} class="fa-stop mx-2" />
              <span>Add NewJob</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="lg:pl-[14rem] mt-[5.8125rem]">
      <main class="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 class="mb-10 text-center lws-section-title">Add New Job</h1>

        <div class="max-w-3xl mx-auto">
          <form class="space-y-6">
            <div class="fieldContainer">
              <label for="lws-JobTitle" class="text-sm font-medium text-slate-300">Job Title</label>
              <select id="lws-JobTitle" name="lwsJobTitle" className='text-gray-300 p-2' required>
                <option value="" hidden selected>Select Job</option>
                <option>Software Engineer</option>
                <option>Software Developer</option>
                <option>Full Stack Developer</option>
                <option>MERN Stack Developer</option>
                <option>DevOps Engineer</option>
                <option>QA Engineer</option>
                <option>Product Manager</option>
                <option>Social Media Manager</option>
                <option>Senior Executive</option>
                <option>Junior Executive</option>
                <option>Android App Developer</option>
                <option>IOS App Developer</option>
                <option>Frontend Developer</option>
                <option>Frontend Engineer</option>
              </select>
            </div>

            <div class="fieldContainer">
              <label for="lws-JobType">Job Type</label>
              <select id="lws-JobType" className='text-gray-300 p-2' name="lwsJobType" required>
                <option value="" hidden selected>Select Job Type</option>
                <option>Full Time</option>
                <option>Internship</option>
                <option>Remote</option>
              </select>
            </div>

            <div class="fieldContainer">
              <label for="lws-JobSalary">Salary</label>
              <div class="flex border rounded-md shadow-sm border-slate-600">
                <span class="input-tag">BDT</span>
                <input type="number" name="lwsJobSalary" id="lws-JobSalary" required class="!rounded-l-none !border-0"
                  placeholder="20,00,000" />
              </div>
            </div>

            <div class="fieldContainer">
              <label for="lws-JobDeadline">Deadline</label>
              <input type="date" name="lwsJobDeadline" id="lws-JobDeadline" required />
            </div>

            <div class="text-right">
              <button type="submit" id="lws-submit" class="cursor-pointer btn btn-primary w-fit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  </div>
</body>
    );
};

export default AddNewJob;