import Hero from "./ui/Hero";
import Navbar from "./ui/Navbar";
import AIChatSection from "./sections/chat";
function App() {
  return (
    <div>
      <div className="min-h-screen text-gray-800 bg-dot-pattern">
        <div className="bg-white backdrop-blur-sm min-h-screen">
          <Navbar />
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default App;
