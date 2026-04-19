export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="font-heading text-3xl font-bold tracking-wider text-white block mb-4">
              FORCE<span className="text-primary">GYM</span>
            </a>
            <p className="text-gray-400 max-w-md mb-6 leading-relaxed">
              Premium fitness center offering state-of-the-art equipment, expert trainers, and a motivating environment to help you achieve your fitness goals.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-4 tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-4 tracking-wider">Programs</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Bodybuilding</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Weight Loss</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Yoga Classes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Personal Training</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Force Gym. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Facebook</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
