import React from 'react';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import JobList from '../../components/JobList/JobList';

const Home = () => {
    return (
        <body>
        <Navbar></Navbar>
        <div class="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <Sidebar></Sidebar>
            <div class="lg:pl-[14rem]  mt-[5.8125rem]">
                <main class="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                    <div class="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
                        <h1 class="lws-section-title">All Available Jobs</h1>
                        <div class="flex gap-4">
                            <div class="search-field group flex-1">
                                
                                <FontAwesomeIcon icon={faMagnifyingGlass} class="fa-stop search-icon group-focus-within:text-blue-500" />
                                <input type="text" placeholder="Search Job" class="search-input text-gray-300" id="lws-searchJob"/>
                            </div>
                            <select id="lws-sort" name="sort" autocomplete="sort" class="flex-1 text-gray-300">
                                <option>Default</option>
                                <option>Salary (Low to High)</option>
                                <option>Salary (High to Low)</option>
                            </select>
                        </div>
                    </div>
    
                    
                        
                        <JobList></JobList>
                        
                    
                </main>
            </div>
        </div>
    </body>
    );
};

export default Home;