// import React, { useState } from 'react'
// import { Button } from './ui/button'
// import { Search } from 'lucide-react'
// import { useDispatch } from 'react-redux';
// import { setSearchedQuery } from '@/redux/jobSlice';
// import { useNavigate } from 'react-router-dom';

// const HeroSection = () => {
//     const [query, setQuery] = useState("");
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const searchJobHandler = () => {
//         dispatch(setSearchedQuery(query));
//         navigate("/browse");
//     }

//     return (
//         <div className="text-center">
//         <div className="flex flex-col gap-5 my-10">
//           <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
//             Your No. 1 Job Search Platform
//           </span>
//           <h1 className="text-5xl font-bold">
//             Discover, Apply & <br /> Secure Your <span className="text-[#6A38C2]">Dream Job</span>
//           </h1>
//           <p className="text-gray-600">
//             Unlock endless career opportunities with top companies. Start your journey today!
//           </p>
//           <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
//             <input
//               type="text"
//               placeholder="Search for your dream job..."
//               onChange={(e) => setQuery(e.target.value)}
//               className="outline-none border-none w-full p-2"
//             />
    
      
//                     <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
//                         <Search className='h-5 w-5' />
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HeroSection

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className="text-center flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100 p-5">
            {/* Top Badge */}
            <span className="px-6 py-2 rounded-full bg-gradient-to-r from-[#F83002] to-[#6A38C2] text-white font-medium shadow-md">
                Your No. 1 Job Search Platform 🚀
            </span>

            {/* Main Heading */}
            <h1 className="text-6xl font-extrabold mt-5 leading-tight text-gray-900">
                Discover, Apply & <br /> 
                Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A38C2] to-[#F83002]">
                Dream Job
                </span>
            </h1>

            {/* Subheading */}
            <p className="text-gray-600 text-lg mt-4 max-w-2xl">
                Unlock endless career opportunities with top companies. Take the next step in your journey today!
            </p>

            {/* Search Bar */}
            <div className="flex w-full max-w-lg mt-6 shadow-md border border-gray-300 bg-white pl-3 rounded-full items-center gap-4">
                <input
                    type="text"
                    placeholder="Search for your dream job..."
                    onChange={(e) => setQuery(e.target.value)}
                    className="outline-none border-none w-full p-3 text-gray-700"
                />
                <Button 
                    onClick={searchJobHandler} 
                    className="rounded-r-full bg-[#6A38C2] hover:bg-[#5B2CA0] transition-all duration-300 px-6 py-3 text-white"
                >
                    <Search className='h-5 w-5' />
                </Button>
            </div>

            {/* Call to Action Button */}
            <div className="mt-6">
                <Button 
                    onClick={() => navigate('/signup')} 
                    className="px-6 py-3 bg-[#F83002] hover:bg-[#D92602] text-white rounded-full shadow-lg text-lg font-medium transition-all duration-300"
                >
                    Get Started Now
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
