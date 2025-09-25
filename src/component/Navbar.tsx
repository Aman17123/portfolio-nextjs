import Link from "next/link"
import { User, Code2, Briefcase, Folder } from "lucide-react"

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
            <div className="flex flex-col items-center space-y-6 text-white">
              <button className="hover:text-blue-400 transition transform hover:scale-110">
                <User className="w-8 h-8" />
              </button>
              <button className="hover:text-blue-400 transition transform hover:scale-110">
                <Code2 className="w-8 h-8" />
              </button>
              <button className="hover:text-blue-400 transition transform hover:scale-110">
                <Briefcase className="w-8 h-8" />
              </button>
              <button className="hover:text-blue-400 transition transform hover:scale-110">
                <Folder className="w-8 h-8" />
              </button>
            </div>
      </div>
    </nav>
  )}