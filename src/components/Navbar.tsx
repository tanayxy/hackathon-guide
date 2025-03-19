
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Code, Compass } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-4 backdrop-blur-md bg-background/80 border-b border-white/5 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-primary/20 p-2 rounded-md">
            <Compass className="w-5 h-5 text-primary" />
          </div>
          <span className="font-semibold text-xl text-foreground">DevPathAI</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Book className="w-4 h-4" />
            <span>Career Roadmaps</span>
          </Link>
          <Link to="/projects" className="flex items-center space-x-2 text-sm text-primary hover:text-primary/90 transition-colors">
            <Code className="w-4 h-4" />
            <span>Hackathon Guide</span>
          </Link>
          <Link to="/" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <span>Challenges</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Login
          </button>
          <button className="bg-primary text-white text-sm px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
