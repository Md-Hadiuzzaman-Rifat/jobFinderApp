import { faBangladeshiTakaSign, faCalendar, faPen, faStop, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SingleJob = () => {
    return (
        <div class="lws-single-job">
        <div class="flex-1 min-w-0">
          <h2 class="lws-title">Back End Developer</h2>
          <div class="job-footers">
            <div class="lws-type">
              {/* <!-- Fulltime - #FF8A00,  --><!-- Internship - #FF5757,  --><!-- Remote - #56E5C4,  --> */}
              <FontAwesomeIcon
                icon={faStop}
                class="fa-stop !text-[#FF8A00] text-lg mr-1.5"
              />
              Full-time
            </div>
            <div class="lws-salary">
              {/* <i class="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i> */}
              <FontAwesomeIcon
                icon={faBangladeshiTakaSign}
                class="fa-stop text-slate-400 text-lg mr-1.5"
              />
              BDT 40,000
            </div>
            <div class="lws-deadline">
              {/* <i class="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i> */}
              <FontAwesomeIcon
                icon={faCalendar}
                class="fa-stop text-slate-400 text-lg mr-1.5"
              />
              Closing on 2022-12-31
            </div>
          </div>
        </div>
        <div class="mt-5 flex lg:mt-0 lg:ml-4">
          <span class="hidden sm:block">
            <a href="/edit">
            <button type="button" class="lws-edit btn btn-primary">
              {/* <i class="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i> */}
              <FontAwesomeIcon
                icon={faPen}
                class="fa-stop text-gray-300 -ml-1 mr-2"
              />
              Edit
            </button>
            </a>
          </span>

          <span class="sm:ml-3">
            <button type="button" class="lws-delete btn btn-danger ">
              {/* <i class="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i> */}
              <FontAwesomeIcon
                icon={faTrash}
                class="fa-stop text-gray-300 -ml-1 mr-2"
              />
              Delete
            </button>
          </span>
        </div>
      </div>
    );
};

export default SingleJob;