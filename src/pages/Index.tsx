
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <PageTransition>
      <Navbar />
      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto pt-28 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
              Navigate Your <span className="text-primary">Tech Career</span> With Confidence
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Personalized career roadmaps, hackathon mentoring, and skill-building challenges to accelerate your journey in tech.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors">
                Start Your Journey
              </button>
              <button className="border border-white/10 bg-white/5 text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors">
                Explore Career Paths
              </button>
            </div>
          </div>
        </div>

        <div className="bg-secondary/30 py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                Supercharge Your Tech Career
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our AI-powered platform provides tailored guidance to help you build the skills, experience, and connections you need to thrive in tech.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-morphism rounded-xl p-8 animate-fade-in opacity-0" style={{ animationDelay: '100ms' }}>
                <div className="bg-primary/20 p-3 rounded-md w-12 h-12 flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">AI Career Roadmaps</h3>
                <p className="text-muted-foreground mb-6">
                  Get a personalized career roadmap based on your interests, skills, and goals, updated dynamically as you progress.
                </p>
              </div>

              <div className="glass-morphism rounded-xl p-8 animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
                <div className="bg-primary/20 p-3 rounded-md w-12 h-12 flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Hackathon Guide</h3>
                <p className="text-muted-foreground mb-6">
                  Find the perfect hackathon for your skills and get AI-powered guidance to help you build winning projects.
                </p>
                <Link 
                  to="/projects" 
                  className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Explore Projects
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              <div className="glass-morphism rounded-xl p-8 animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
                <div className="bg-primary/20 p-3 rounded-md w-12 h-12 flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">AI Coach</h3>
                <p className="text-muted-foreground mb-6">
                  Get personalized feedback and advice from an AI coach that understands your strengths and growth areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Index;
