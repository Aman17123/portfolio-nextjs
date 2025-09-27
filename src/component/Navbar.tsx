import { FaUser, FaCode, FaBriefcase, FaFolderOpen, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


export default function Navbar() {
  return(
    <nav className="navbar -mt-10 fixed">
      <div className="h-screen w-14 bg-[#252526] flex flex-col items-center  py-4 space-y-9">
            {/* Profile placeholder circle */}
            <div className="w-9 h-10 rounded-full mt-1 overflow-hidden border border-dashed border-gray-400 transition transform hover:scale-110">
              <img
                src="https://rollingstoneindia.com/wp-content/uploads/2023/09/seedhe-maut-photoshoot-2023-Photo-Credits-Pulkit-Sharma-Courtesy-of-Azadi-Records-960x540.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Menu icons */}
            <div className="flex flex-col items-center  space-y-6 text-white">
              <button className="transition transform cursor-pointer hover:scale-110 hover:text-blue-500">
                <FaUser className="w-8 h-8" />
              </button>
              <button className="transition transform cursor-pointer hover:scale-110 hover:text-green-500">
                <FaCode className="w-8 h-8" />
              </button>
              <button className="transition transform cursor-pointer hover:scale-110 hover:text-yellow-500">
                <FaBriefcase className="w-8 h-8" />
              </button>
              <button className="transition transform cursor-pointer hover:scale-110 hover:text-purple-500">
                <FaFolderOpen className="w-8 h-8" />
              </button>

              <a href="https://github.com/Aman17123" target="_blank" rel="noopener noreferrer">
                <button  className="transition transform cursor-pointer hover:scale-110 hover:text-[#6e5494] hover:shadow-lg">
                  <FaGithub  className="w-8 h-8" />
                </button>
              </a>
                <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  <button className="transition transform cursor-pointer hover:scale-110 hover:text-[#0A66C2]">
                    <FaLinkedin className="w-8 h-8" />
                  </button>
                </a>

                <a href="https://leetcode.com/your-username" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  <button className="transition transform cursor-pointer hover:scale-110 hover:text-[#FFA116]">
                    <SiLeetcode className="w-8 h-8" />
                  </button>
                </a>

            </div>
      </div>
    </nav>
  )}