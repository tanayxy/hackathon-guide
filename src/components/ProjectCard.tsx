
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Database, Cpu, Globe, Smartphone, Cloud, Lock, Activity, Server } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, category, index }) => {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai':
        return <Brain className="w-4 h-4 text-primary" />;
      case 'blockchain':
        return <Database className="w-4 h-4 text-accent" />;
      case 'iot':
        return <Cpu className="w-4 h-4 text-blue-400" />;
      case 'web development':
        return <Globe className="w-4 h-4 text-green-400" />;
      case 'mobile development':
        return <Smartphone className="w-4 h-4 text-orange-400" />;
      case 'cloud computing':
        return <Cloud className="w-4 h-4 text-purple-400" />;
      case 'cybersecurity':
        return <Lock className="w-4 h-4 text-red-400" />;
      case 'data science':
        return <Activity className="w-4 h-4 text-yellow-400" />;
      default:
        return <Server className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div 
      className="project-card animate-fade-in opacity-0 hover-scale"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-secondary/50 p-2 rounded-md mr-3">
            {getCategoryIcon(category)}
          </div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">
            {category}
          </div>
        </div>
        
        <h3 className="text-xl font-medium mb-2 text-gradient">{title}</h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>
        
        <Link 
          to={`/project/${id}`} 
          className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
        >
          View Details
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
