import { faBriefcase, faFileCirclePlus, faStop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Sidebar = () => {
    return (
        <div class="sidebar">
        <nav>
          <ul class="space-y-4">
            <li>
              <a
                href="/"
                class="main-menu menu-active"
                id="lws-alljobs-menu"
              >
                {/* <i class="fa-solid fa-briefcase"></i> */}
                <FontAwesomeIcon icon={faBriefcase} class="fa-stop mx-2" />
                <span> All Available Jobs</span>
              </a>
              <ul class="space-y-6 lg:space-y-2 ">
                <li>
                  <a
                    class="sub-menu"
                    href="/jobs/internship"
                    id="lws-internship-menu"
                  >
                    {/* <i class="fa-solid fa-stop !text-[#FF5757]"></i> */}
                    <FontAwesomeIcon icon={faStop} class="fa-stop !text-[#FF5757]" />
                    Internship
                  </a>
                </li>
                <li>
                  <a
                    class="sub-menu"
                    href="/jobs/fulltime"
                    id="lws-fulltime-menu"
                  >
                    <FontAwesomeIcon icon={faStop} class="fa-stop !text-[#FF8A00]" />
                    Full Time
                  </a>
                </li>
                <li>
                  <a
                    class="sub-menu"
                    href="/jobs/remote"
                    id="lws-remote-menu"
                  >
                    <FontAwesomeIcon icon={faStop} class="fa-solid fa-stop !text-[#56E5C4]" />
                    Remote
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/newjob" class="main-menu" id="lws-addJob-menu">
                {/* <i class="fa-solid fa-file-circle-plus"></i> */}
                <FontAwesomeIcon icon={faFileCirclePlus} class="fa-stop mx-2" />
                <span>Add NewJob</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
};

export default Sidebar;