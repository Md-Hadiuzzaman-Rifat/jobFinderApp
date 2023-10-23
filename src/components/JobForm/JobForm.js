import React from 'react';

const JobForm = () => {
    return (
        <div class="max-w-3xl mx-auto">
              <form class="space-y-6">
                <div class="fieldContainer">
                  <label
                    for="lws-JobTitle"
                    class="text-sm font-medium text-slate-300"
                  >
                    Job Title
                  </label>
                  <select
                    id="lws-JobTitle"
                    name="lwsJobTitle"
                    className="text-gray-300 p-2"
                    required
                  >
                    <option value="" hidden selected>
                      Select Job
                    </option>
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
                  <select
                    id="lws-JobType"
                    className="text-gray-300 p-2"
                    name="lwsJobType"
                    required
                  >
                    <option value="" hidden selected>
                      Select Job Type
                    </option>
                    <option>Full Time</option>
                    <option>Internship</option>
                    <option>Remote</option>
                  </select>
                </div>

                <div class="fieldContainer">
                  <label for="lws-JobSalary">Salary</label>
                  <div class="flex border rounded-md shadow-sm border-slate-600">
                    <span class="input-tag">BDT</span>
                    <input
                      type="number"
                      name="lwsJobSalary"
                      id="lws-JobSalary"
                      required
                      class="!rounded-l-none !border-0"
                      placeholder="20,00,000"
                    />
                  </div>
                </div>

                <div class="fieldContainer">
                  <label for="lws-JobDeadline">Deadline</label>
                  <input
                    type="date"
                    name="lwsJobDeadline"
                    id="lws-JobDeadline"
                    required
                  />
                </div>

                <div class="text-right">
                  <button
                    type="submit"
                    id="lws-submit"
                    class="cursor-pointer btn btn-primary w-fit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
    );
};

export default JobForm;