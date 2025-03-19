import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import { Search, Filter } from 'lucide-react';

// This data would typically come from an API
const projectIdeas = [
  {
    id: 'ai-1',
    title: 'Personalized Learning Assistant',
    description: 'Build an AI-powered learning assistant that adapts to individual learning styles and provides personalized educational content and assessments.',
    category: 'AI',
    difficulty: 'Intermediate',
    techStack: ['Python', 'TensorFlow', 'React', 'Node.js'],
    steps: [
      'Design the learning model architecture',
      'Implement content recommendation system',
      'Create adaptive assessment framework',
      'Develop user interface for learning interaction',
      'Integrate analytics and progress tracking'
    ]
  },
  {
    id: 'ai-2',
    title: 'AI Healthcare Diagnostic Tool',
    description: 'Create a tool that uses machine learning to help identify potential health issues from symptoms described by users, providing guidance on when to seek professional medical help.',
    category: 'AI',
    difficulty: 'Advanced',
    techStack: ['Python', 'PyTorch', 'React', 'FastAPI'],
    steps: [
      'Research medical symptom ontologies',
      'Train diagnostic models on anonymized data',
      'Implement symptom input interface',
      'Design result explanation framework',
      'Add referral system to medical professionals'
    ]
  },
  {
    id: 'blockchain-1',
    title: 'Decentralized Marketplace',
    description: 'Build a peer-to-peer marketplace where users can buy and sell goods or services using cryptocurrency, without the need for traditional payment processors.',
    category: 'Blockchain',
    difficulty: 'Intermediate',
    techStack: ['Solidity', 'Ethereum', 'React', 'Web3.js'],
    steps: [
      'Design smart contract architecture',
      'Implement escrow mechanism',
      'Create user interface for listings',
      'Add wallet integration',
      'Develop reputation system'
    ]
  },
  {
    id: 'blockchain-2',
    title: 'Supply Chain Transparency System',
    description: 'Create a blockchain-based system to track products through supply chains, allowing consumers to verify the authenticity and ethical sourcing of items they purchase.',
    category: 'Blockchain',
    difficulty: 'Advanced',
    techStack: ['Hyperledger Fabric', 'React', 'Node.js', 'Docker'],
    steps: [
      'Design supply chain data model',
      'Implement blockchain network configuration',
      'Create QR code tracking system',
      'Develop consumer verification interface',
      'Add supplier authentication mechanisms'
    ]
  },
  {
    id: 'iot-1',
    title: 'Smart Home Energy Monitor',
    description: 'Build an IoT system that monitors home energy usage, identifies energy-intensive appliances, and suggests ways to reduce consumption and costs.',
    category: 'IoT',
    difficulty: 'Intermediate',
    techStack: ['Arduino/ESP32', 'MQTT', 'Node.js', 'React'],
    steps: [
      'Design sensor architecture',
      'Implement power monitoring circuits',
      'Create data collection backend',
      'Develop visualization dashboard',
      'Add machine learning for appliance detection'
    ]
  },
  {
    id: 'iot-2',
    title: 'Urban Air Quality Network',
    description: 'Create a network of IoT devices to monitor air quality across urban areas, providing real-time data to help citizens make informed decisions about outdoor activities.',
    category: 'IoT',
    difficulty: 'Advanced',
    techStack: ['Raspberry Pi', 'LoRaWAN', 'Python', 'TimescaleDB', 'React'],
    steps: [
      'Design air quality sensor array',
      'Implement LoRaWAN connectivity',
      'Create data aggregation backend',
      'Develop visualization and alerting system',
      'Add predictive air quality modeling'
    ]
  },
  {
    id: 'web-1',
    title: 'Real-time Collaborative Whiteboard',
    description: 'Build a web application that allows multiple users to draw and collaborate on a shared whiteboard in real-time.',
    category: 'Web Development',
    difficulty: 'Intermediate',
    techStack: ['React', 'Socket.io', 'Canvas API', 'Express.js', 'MongoDB'],
    steps: [
      'Set up the drawing canvas',
      'Add real-time communication',
      'Implement collaborative features',
      'Create room/session management',
      'Add export and sharing capabilities'
    ]
  },
  {
    id: 'web-2',
    title: 'Interactive Data Visualization Dashboard',
    description: 'Create a dynamic dashboard that visualizes complex datasets through interactive charts, graphs, and maps.',
    category: 'Web Development',
    difficulty: 'Advanced',
    techStack: ['React', 'D3.js', 'Redux', 'Node.js', 'PostgreSQL'],
    steps: [
      'Design the dashboard layout',
      'Implement data connectors',
      'Create visualization components',
      'Add interactive filtering',
      'Build sharing and export features'
    ]
  },
  {
    id: 'mobile-1',
    title: 'Augmented Reality Navigation App',
    description: 'Develop a mobile app that uses AR to overlay navigation instructions on the real world, helping users navigate unfamiliar environments.',
    category: 'Mobile Development',
    difficulty: 'Advanced',
    techStack: ['React Native', 'ARKit/ARCore', 'MapBox API', 'Redux', 'Firebase'],
    steps: [
      'Implement basic mapping functionality',
      'Add AR capabilities',
      'Create the navigation algorithm',
      'Design the user experience',
      'Optimize for performance and battery life'
    ]
  },
  {
    id: 'mobile-2',
    title: 'Cross-Platform Fitness Tracker',
    description: 'Build a mobile fitness application that tracks workouts, nutrition, and health metrics across multiple devices and platforms.',
    category: 'Mobile Development',
    difficulty: 'Intermediate',
    techStack: ['Flutter', 'Firebase', 'HealthKit/Google Fit APIs', 'SQLite', 'BLoC Pattern'],
    steps: [
      'Set up cross-platform architecture',
      'Implement health and fitness tracking',
      'Build the nutrition tracking system',
      'Develop goal setting and progress visualization',
      'Add social and gamification elements'
    ]
  },
  {
    id: 'cloud-1',
    title: 'Serverless Image Processing Pipeline',
    description: 'Build a scalable, event-driven system that automatically processes and transforms images uploaded to cloud storage.',
    category: 'Cloud Computing',
    difficulty: 'Intermediate',
    techStack: ['AWS Lambda/Google Cloud Functions', 'S3/Cloud Storage', 'DynamoDB/Firestore', 'API Gateway', 'CloudFormation/Terraform'],
    steps: [
      'Design the serverless architecture',
      'Implement upload and storage mechanisms',
      'Create image processing functions',
      'Build the metadata database',
      'Add API access and authentication'
    ]
  },
  {
    id: 'cloud-2',
    title: 'Multi-Region Disaster Recovery System',
    description: 'Design and implement a cloud-based disaster recovery solution that ensures business continuity across multiple geographic regions.',
    category: 'Cloud Computing',
    difficulty: 'Advanced',
    techStack: ['Multi-region cloud architecture', 'Kubernetes', 'Database replication', 'Load balancing', 'Infrastructure as Code'],
    steps: [
      'Assess recovery requirements',
      'Design multi-region architecture',
      'Implement data replication',
      'Create failover mechanisms',
      'Build testing and validation procedures'
    ]
  },
  {
    id: 'security-1',
    title: 'Security Vulnerability Scanner',
    description: 'Build an automated tool that scans web applications for common security vulnerabilities and provides remediation guidance.',
    category: 'Cybersecurity',
    difficulty: 'Advanced',
    techStack: ['Python', 'OWASP ZAP API', 'Docker', 'Vulnerability databases', 'Node.js/React for UI'],
    steps: [
      'Design the scanning architecture',
      'Implement passive scanning capabilities',
      'Add active scanning features',
      'Create the reporting system',
      'Add CI/CD integration'
    ]
  },
  {
    id: 'security-2',
    title: 'Zero-Knowledge Proof Authentication System',
    description: 'Develop an authentication system that verifies identity without ever storing or transmitting passwords or sensitive credentials.',
    category: 'Cybersecurity',
    difficulty: 'Expert',
    techStack: ['Cryptographic libraries', 'Rust/Go', 'WebAuthn', 'React', 'PostgreSQL'],
    steps: [
      'Research zero-knowledge proof protocols',
      'Implement core cryptographic functions',
      'Create the authentication flow',
      'Build administration and monitoring tools',
      'Develop integration capabilities'
    ]
  },
  {
    id: 'data-1',
    title: 'Predictive Maintenance System',
    description: 'Build a machine learning system that predicts equipment failures before they happen using sensor data and maintenance records.',
    category: 'Data Science',
    difficulty: 'Advanced',
    techStack: ['Python', 'TensorFlow/PyTorch', 'Time series analysis', 'Apache Kafka', 'Docker'],
    steps: [
      'Design the data collection architecture',
      'Perform exploratory data analysis',
      'Develop prediction models',
      'Build the real-time processing pipeline',
      'Create alerting and reporting interfaces'
    ]
  },
  {
    id: 'data-2',
    title: 'Natural Language Processing Content Moderator',
    description: 'Create an AI system that automatically detects and filters inappropriate content in user-generated text across multiple languages.',
    category: 'Data Science',
    difficulty: 'Advanced',
    techStack: ['Python', 'Transformer models', 'NLP libraries', 'Flask/FastAPI', 'Redis'],
    steps: [
      'Collect and prepare training data',
      'Build classification models',
      'Create the moderation pipeline',
      'Add multi-language support',
      'Implement feedback mechanisms'
    ]
  }
];

const ProjectIdeas = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProjects = projectIdeas.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = 
      selectedCategory === null || 
      project.category.toLowerCase() === selectedCategory.toLowerCase();
      
    return matchesSearch && matchesCategory;
  });

  const categories = ['AI', 'Blockchain', 'IoT', 'Web Development', 'Mobile Development', 'Cloud Computing', 'Cybersecurity', 'Data Science'];

  return (
    <PageTransition>
      <Navbar />
      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto pt-28 pb-16 px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="animate-fade-in opacity-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Hackathon Project Ideas</h1>
              <p className="text-lg text-muted-foreground">
                Browse our curated collection of project ideas to inspire your next hackathon submission.
                Each project includes detailed implementation guidance and tech stack recommendations.
              </p>
            </div>

            <div className="mt-8 animate-fade-in opacity-0" style={{ animationDelay: '100ms' }}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for project ideas..."
                  className="w-full pl-10 pr-4 py-3 bg-secondary/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
              <button
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === null 
                    ? 'bg-primary text-white' 
                    : 'bg-secondary/50 text-muted-foreground hover:bg-secondary'
                }`}
                onClick={() => setSelectedCategory(null)}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedCategory === category 
                      ? 'bg-primary text-white' 
                      : 'bg-secondary/50 text-muted-foreground hover:bg-secondary'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                category={project.category}
                index={index}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectIdeas;
