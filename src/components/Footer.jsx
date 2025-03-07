import { FaFacebook, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom'

function Footer() {
  // const router = useNavigate();
  return (
    <footer className="bg-gray-700 text-gray-300 py-6 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Social Media Section */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-lg font-semibold mb-2 text-center md:text-left">
            Follow us! Were friendly:
          </p>
          <div className="flex space-x-3">
            <a href="#" className="hover:text-white"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-white"><FaTiktok size={20} /></a>
            <a href="#" className="hover:text-white"><FaLinkedin size={20} /></a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Discover</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white">Become a Tasker</a></li>
              <li><a href="#" className="hover:text-white">Services By City</a></li>
              <li><a href="#" className="hover:text-white">Services Nearby</a></li>
              <li><a href="#" className="hover:text-white">All Services</a></li>
              <li><a href="#" className="hover:text-white">Help</a></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white">About Us</a></li>
    
              <li><a href="#" className="hover:text-white">SkillLink for Good</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Terms & Privacy</a></li>
              <li><a href="#" className="hover:text-white">Legal</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Help Button */}
      {/* <div className="fixed bottom-5 left-5">
        <button className="bg-green-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg" onClick={() => router("/chat")}>
          <FaQuestionCircle size={20} />
          <span>Help</span>
        </button>
      </div> */}
    </footer>
  );
}

export default Footer;
