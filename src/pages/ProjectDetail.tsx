import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Code, BookOpen, Brain, Database, Cpu, Server, Globe, Smartphone, Lock, Cloud, Activity } from 'lucide-react';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

// This data would typically come from an API
const projectIdeas = [
  {
    id: 'ai-1',
    title: 'Personalized Learning Assistant',
    description: 'Build an AI-powered learning assistant that adapts to individual learning styles and provides personalized educational content and assessments.',
    fullDescription: 'This project aims to create an intelligent tutoring system that uses machine learning to understand how each student learns best. The system will analyze interaction patterns, learning progress, and performance to customize educational materials, pacing, and assessment methods. The end result is a highly personalized learning experience that helps students master subjects more effectively than one-size-fits-all approaches.',
    category: 'AI',
    difficulty: 'Intermediate',
    timeEstimate: '4-6 weeks',
    techStack: ['Python', 'TensorFlow', 'React', 'Node.js'],
    steps: [
      {
        title: 'Design the learning model architecture',
        description: 'Create a machine learning model that can process student interaction data and identify optimal learning approaches for different types of content.'
      },
      {
        title: 'Implement content recommendation system',
        description: 'Develop algorithms that can suggest appropriate learning materials based on student progress and identified learning style.'
      },
      {
        title: 'Create adaptive assessment framework',
        description: 'Build a system that adjusts question difficulty and format based on student performance to optimize learning and retention.'
      },
      {
        title: 'Develop user interface for learning interaction',
        description: 'Create an engaging, intuitive interface that presents content and collects interaction data in a way that feels natural to users.'
      },
      {
        title: 'Integrate analytics and progress tracking',
        description: 'Implement comprehensive analytics that show students their progress and provide insights to help them improve their learning strategies.'
      }
    ]
  },
  {
    id: 'ai-2',
    title: 'AI Healthcare Diagnostic Tool',
    description: 'Create a tool that uses machine learning to help identify potential health issues from symptoms described by users, providing guidance on when to seek professional medical help.',
    fullDescription: 'This project focuses on developing a preliminary diagnostic tool that can help users understand their symptoms and determine when to consult healthcare professionals. The system will use natural language processing to interpret symptom descriptions and machine learning algorithms trained on medical databases to suggest possible conditions. The tool will emphasize proper disclaimers about not replacing professional medical advice while still providing valuable health guidance.',
    category: 'AI',
    difficulty: 'Advanced',
    timeEstimate: '3-4 months',
    techStack: ['Python', 'PyTorch', 'React', 'FastAPI'],
    steps: [
      {
        title: 'Research medical symptom ontologies',
        description: 'Explore and integrate standardized medical terminology systems to ensure accurate symptom categorization and relationship mapping.'
      },
      {
        title: 'Train diagnostic models on anonymized data',
        description: 'Develop machine learning models using properly anonymized medical datasets that can associate symptom patterns with potential conditions.'
      },
      {
        title: 'Implement symptom input interface',
        description: 'Create a user-friendly interface that guides users through describing their symptoms in ways the system can accurately interpret.'
      },
      {
        title: 'Design result explanation framework',
        description: 'Develop clear, understandable explanations of potential conditions with appropriate confidence levels and disclaimers.'
      },
      {
        title: 'Add referral system to medical professionals',
        description: 'Implement location-based recommendations for healthcare providers based on the identified potential conditions.'
      }
    ]
  },
  {
    id: 'blockchain-1',
    title: 'Decentralized Marketplace',
    description: 'Build a peer-to-peer marketplace where users can buy and sell goods or services using cryptocurrency, without the need for traditional payment processors.',
    fullDescription: 'This project aims to create a truly decentralized marketplace that connects buyers and sellers directly without intermediaries. The system will use smart contracts to handle escrow, dispute resolution, and reputation tracking. Users will be able to list products or services, communicate with potential buyers/sellers, and complete transactions using cryptocurrency payments—all while maintaining control of their data and minimizing platform fees.',
    category: 'Blockchain',
    difficulty: 'Intermediate',
    timeEstimate: '2-3 months',
    techStack: ['Solidity', 'Ethereum', 'React', 'Web3.js'],
    steps: [
      {
        title: 'Design smart contract architecture',
        description: 'Create the Solidity smart contracts that will handle listings, payments, escrow, and dispute resolution mechanisms.'
      },
      {
        title: 'Implement escrow mechanism',
        description: 'Develop a secure escrow system that protects both buyers and sellers during transactions by holding funds until conditions are met.'
      },
      {
        title: 'Create user interface for listings',
        description: 'Build an intuitive frontend that allows users to browse listings, filter by categories, and view detailed product/service information.'
      },
      {
        title: 'Add wallet integration',
        description: 'Implement connections to popular cryptocurrency wallets to facilitate seamless payments and transaction signing.'
      },
      {
        title: 'Develop reputation system',
        description: 'Create a blockchain-based reputation system that tracks seller reliability and buyer behavior to build trust in the marketplace.'
      }
    ]
  },
  {
    id: 'blockchain-2',
    title: 'Supply Chain Transparency System',
    description: 'Create a blockchain-based system to track products through supply chains, allowing consumers to verify the authenticity and ethical sourcing of items they purchase.',
    fullDescription: "This project focuses on bringing transparency to global supply chains by recording each step of a product's journey on an immutable blockchain. The system will allow manufacturers, distributors, retailers, and consumers to verify product authenticity, ethical sourcing claims, and sustainability practices. By scanning a QR code, consumers can view the complete history of items they're considering purchasing, including origin location, manufacturing conditions, and transportation methods.",
    category: 'Blockchain',
    difficulty: 'Advanced',
    timeEstimate: '4-6 months',
    techStack: ['Hyperledger Fabric', 'React', 'Node.js', 'Docker'],
    steps: [
      {
        title: 'Design supply chain data model',
        description: 'Create a comprehensive data model that captures all relevant information about products at each stage of the supply chain.'
      },
      {
        title: 'Implement blockchain network configuration',
        description: 'Set up the Hyperledger Fabric network with appropriate channels, organizations, and chaincode to manage supply chain data.'
      },
      {
        title: 'Create QR code tracking system',
        description: 'Develop a system for generating and managing QR codes that link physical products to their digital records on the blockchain.'
      },
      {
        title: 'Develop consumer verification interface',
        description: 'Build a mobile-friendly web application that allows consumers to scan product QR codes and view complete supply chain information.'
      },
      {
        title: 'Add supplier authentication mechanisms',
        description: 'Implement secure methods for suppliers at each stage to authenticate themselves and record their contributions to the supply chain.'
      }
    ]
  },
  {
    id: 'iot-1',
    title: 'Smart Home Energy Monitor',
    description: 'Build an IoT system that monitors home energy usage, identifies energy-intensive appliances, and suggests ways to reduce consumption and costs.',
    fullDescription: 'This project creates a comprehensive home energy monitoring system using IoT sensors to track electricity usage throughout a home. The system will identify which appliances and systems consume the most energy, detect inefficient usage patterns, and provide actionable suggestions for reducing energy consumption. Users will be able to view real-time and historical usage data through a dashboard, set energy-saving goals, and receive notifications about unusual consumption patterns.',
    category: 'IoT',
    difficulty: 'Intermediate',
    timeEstimate: '2-3 months',
    techStack: ['Arduino/ESP32', 'MQTT', 'Node.js', 'React'],
    steps: [
      {
        title: 'Design sensor architecture',
        description: 'Plan the types and placement of sensors needed to monitor electricity usage at both the main supply and individual circuit levels.'
      },
      {
        title: 'Implement power monitoring circuits',
        description: 'Build the hardware systems that will safely measure electricity consumption and transmit the data to a central hub.'
      },
      {
        title: 'Create data collection backend',
        description: 'Develop the server infrastructure that will receive, process, and store energy usage data from multiple sensors.'
      },
      {
        title: 'Develop visualization dashboard',
        description: 'Build an intuitive web interface that displays energy usage patterns, costs, and comparisons over time.'
      },
      {
        title: 'Add machine learning for appliance detection',
        description: 'Implement algorithms that can identify specific appliances based on their energy usage signatures and provide targeted optimization advice.'
      }
    ]
  },
  {
    id: 'iot-2',
    title: 'Urban Air Quality Network',
    description: 'Create a network of IoT devices to monitor air quality across urban areas, providing real-time data to help citizens make informed decisions about outdoor activities.',
    fullDescription: 'This project aims to democratize air quality monitoring by creating an affordable, distributed network of sensors throughout urban environments. The system will measure particulate matter, harmful gases, and other pollutants, providing real-time air quality data with much higher granularity than typical government monitoring stations. Citizens can access this information through a mobile app or website to make informed decisions about outdoor activities, while researchers and policymakers can use the aggregated data to identify pollution sources and evaluate intervention effectiveness.',
    category: 'IoT',
    difficulty: 'Advanced',
    timeEstimate: '3-5 months',
    techStack: ['Raspberry Pi', 'LoRaWAN', 'Python', 'TimescaleDB', 'React'],
    steps: [
      {
        title: 'Design air quality sensor array',
        description: 'Select and integrate appropriate sensors for measuring various pollutants and environmental conditions into a compact, low-power device.'
      },
      {
        title: 'Implement LoRaWAN connectivity',
        description: 'Set up the long-range, low-power networking infrastructure needed to transmit sensor data efficiently from many distributed devices.'
      },
      {
        title: 'Create data aggregation backend',
        description: 'Develop the server systems that will collect, validate, and store data from all sensors in the network, handling time-series data efficiently.'
      },
      {
        title: 'Develop visualization and alerting system',
        description: 'Build user interfaces that display air quality information in intuitive maps and graphs, with customizable alerts for poor air quality conditions.'
      },
      {
        title: 'Add predictive air quality modeling',
        description: 'Implement machine learning algorithms that can forecast air quality based on historical patterns, weather conditions, and known emission sources.'
      }
    ]
  },
  {
    id: 'web-1',
    title: 'Real-time Collaborative Whiteboard',
    description: 'Build a web application that allows multiple users to draw and collaborate on a shared whiteboard in real-time.',
    fullDescription: "This project involves creating a collaborative whiteboard application where multiple users can draw, add text, and place shapes simultaneously. Users will see each other's cursors and changes in real-time, making it perfect for remote brainstorming sessions, teaching, or collaborative design. The application will include features like different drawing tools, text annotations, the ability to upload and embed images, and an infinite canvas with zoom and pan capabilities.",
    category: 'Web Development',
    difficulty: 'Intermediate',
    timeEstimate: '3-4 weeks',
    techStack: ['React', 'Socket.io', 'Canvas API', 'Express.js', 'MongoDB'],
    steps: [
      {
        title: 'Set up the drawing canvas',
        description: 'Implement a canvas element with basic drawing functionality including different tools and colors.'
      },
      {
        title: 'Add real-time communication',
        description: 'Integrate Socket.io to broadcast drawing events to all connected users in real-time.'
      },
      {
        title: 'Implement collaborative features',
        description: 'Add support for displaying multiple user cursors and handling concurrent editing conflicts.'
      },
      {
        title: 'Create room/session management',
        description: 'Build a system for creating, joining, and managing different whiteboard sessions with unique URLs.'
      },
      {
        title: 'Add export and sharing capabilities',
        description: 'Implement functionality to export the whiteboard as an image and share it via various channels.'
      }
    ]
  },
  {
    id: 'web-2',
    title: 'Interactive Data Visualization Dashboard',
    description: 'Create a dynamic dashboard that visualizes complex datasets through interactive charts, graphs, and maps.',
    fullDescription: "This project focuses on transforming raw data into insightful visualizations that users can interact with to gain deeper understanding. The dashboard will allow users to upload their own datasets or connect to public APIs, then create various types of visualizations including line charts, bar graphs, scatter plots, heat maps, and geographic visualizations. Users will be able to filter data, zoom into specific time periods, and create custom dashboard layouts that can be saved and shared.",
    category: 'Web Development',
    difficulty: 'Advanced',
    timeEstimate: '2-3 months',
    techStack: ['React', 'D3.js', 'Redux', 'Node.js', 'PostgreSQL'],
    steps: [
      {
        title: 'Design the dashboard layout',
        description: 'Create a flexible, responsive layout system that can accommodate various visualization components.'
      },
      {
        title: 'Implement data connectors',
        description: 'Build functionality to import data from CSV/JSON files and connect to external APIs or databases.'
      },
      {
        title: 'Create visualization components',
        description: 'Develop reusable chart components using D3.js that can be configured for different data types.'
      },
      {
        title: 'Add interactive filtering',
        description: 'Implement cross-filtering capabilities so that interactions with one chart affect the data displayed in others.'
      },
      {
        title: 'Build sharing and export features',
        description: 'Add functionality to save dashboard configurations, generate shareable links, and export visualizations.'
      }
    ]
  },
  {
    id: 'mobile-1',
    title: 'Augmented Reality Navigation App',
    description: 'Develop a mobile app that uses AR to overlay navigation instructions on the real world, helping users navigate unfamiliar environments.',
    fullDescription: "This project creates an innovative navigation experience by using a smartphone's camera to display directional cues overlaid on the real world. Instead of looking down at a map, users can see arrows, distance indicators, and points of interest directly on their camera view as they walk. The app will include features like offline maps, custom points of interest, alternative routes, and integration with public transit information for a comprehensive navigation solution.",
    category: 'Mobile Development',
    difficulty: 'Advanced',
    timeEstimate: '4-5 months',
    techStack: ['React Native', 'ARKit/ARCore', 'MapBox API', 'Redux', 'Firebase'],
    steps: [
      {
        title: 'Implement basic mapping functionality',
        description: 'Integrate mapping APIs to calculate routes and provide location-based services.'
      },
      {
        title: 'Add AR capabilities',
        description: 'Implement augmented reality features to overlay directional information on the camera feed.'
      },
      {
        title: 'Create the navigation algorithm',
        description: 'Develop algorithms to accurately translate GPS coordinates to AR overlay positions in the real world.'
      },
      {
        title: 'Design the user experience',
        description: 'Create an intuitive interface that balances AR elements with traditional navigation controls.'
      },
      {
        title: 'Optimize for performance and battery life',
        description: 'Refine the app to minimize battery consumption while maintaining accurate AR positioning.'
      }
    ]
  },
  {
    id: 'mobile-2',
    title: 'Cross-Platform Fitness Tracker',
    description: 'Build a mobile fitness application that tracks workouts, nutrition, and health metrics across multiple devices and platforms.',
    fullDescription: "This project aims to create a comprehensive fitness tracking solution that works seamlessly across smartphones, tablets, and wearable devices. The app will allow users to track various types of workouts, log meals and nutrition information, monitor health metrics, and set personalized fitness goals. The application will leverage device sensors to automatically detect and record activities when possible, while also providing manual logging options and social features to encourage motivation through community engagement.",
    category: 'Mobile Development',
    difficulty: 'Intermediate',
    timeEstimate: '3-4 months',
    techStack: ['Flutter', 'Firebase', 'HealthKit/Google Fit APIs', 'SQLite', 'BLoC Pattern'],
    steps: [
      {
        title: 'Set up cross-platform architecture',
        description: 'Create a solid Flutter foundation that works consistently across iOS and Android devices.'
      },
      {
        title: 'Implement health and fitness tracking',
        description: 'Integrate with platform health APIs to access sensor data and record workout information.'
      },
      {
        title: 'Build the nutrition tracking system',
        description: 'Create a food database and logging system for tracking meals and nutritional intake.'
      },
      {
        title: 'Develop goal setting and progress visualization',
        description: 'Implement features that allow users to set goals and view their progress through charts and statistics.'
      },
      {
        title: 'Add social and gamification elements',
        description: 'Create features like challenges, achievements, and friend connections to increase user engagement.'
      }
    ]
  },
  {
    id: 'cloud-1',
    title: 'Serverless Image Processing Pipeline',
    description: 'Build a scalable, event-driven system that automatically processes and transforms images uploaded to cloud storage.',
    fullDescription: "This project focuses on creating a highly scalable image processing service using serverless architecture. When users upload images to the system, it automatically triggers various processing functions such as resizing, format conversion, optimization, and the generation of thumbnails or previews. The system will handle metadata extraction, optional machine learning-based tagging, and the storage of both original and processed images with appropriate access controls. This architecture allows for instant scaling during usage spikes while minimizing costs during idle periods.",
    category: 'Cloud Computing',
    difficulty: 'Intermediate',
    timeEstimate: '4-6 weeks',
    techStack: ['AWS Lambda/Google Cloud Functions', 'S3/Cloud Storage', 'DynamoDB/Firestore', 'API Gateway', 'CloudFormation/Terraform'],
    steps: [
      {
        title: 'Design the serverless architecture',
        description: 'Create a scalable, event-driven design that processes images efficiently and cost-effectively.'
      },
      {
        title: 'Implement upload and storage mechanisms',
        description: 'Set up secure cloud storage with appropriate triggers when new files are uploaded.'
      },
      {
        title: 'Create image processing functions',
        description: 'Develop serverless functions that handle various image transformations and optimizations.'
      },
      {
        title: 'Build the metadata database',
        description: 'Implement a database to store and query information about the processed images.'
      },
      {
        title: 'Add API access and authentication',
        description: 'Create RESTful endpoints for uploading images and retrieving processed results with proper authentication.'
      }
    ]
  },
  {
    id: 'cloud-2',
    title: 'Multi-Region Disaster Recovery System',
    description: 'Design and implement a cloud-based disaster recovery solution that ensures business continuity across multiple geographic regions.',
    fullDescription: "This project involves creating a robust disaster recovery system that protects applications and data from regional outages or catastrophic failures. The system will automatically replicate databases, file storage, and application states across multiple cloud regions, allowing for rapid failover with minimal data loss. The solution will include automated health checks, controlled failover procedures, and regular testing mechanisms to ensure the DR strategy works when needed. Special attention will be given to managing costs while still providing the necessary resilience.",
    category: 'Cloud Computing',
    difficulty: 'Advanced',
    timeEstimate: '3-4 months',
    techStack: ['Multi-region cloud architecture', 'Kubernetes', 'Database replication', 'Load balancing', 'Infrastructure as Code'],
    steps: [
      {
        title: 'Assess recovery requirements',
        description: 'Determine the Recovery Time Objective (RTO) and Recovery Point Objective (RPO) that the system needs to meet.'
      },
      {
        title: 'Design multi-region architecture',
        description: 'Create an architecture that replicates necessary components across geographically separate regions.'
      },
      {
        title: 'Implement data replication',
        description: 'Set up continuous, efficient replication of databases and file storage across regions.'
      },
      {
        title: 'Create failover mechanisms',
        description: 'Develop automated and manual failover processes to redirect traffic during outages.'
      },
      {
        title: 'Build testing and validation procedures',
        description: 'Implement regular testing routines to ensure the disaster recovery system works reliably when needed.'
      }
    ]
  },
  {
    id: 'security-1',
    title: 'Security Vulnerability Scanner',
    description: 'Build an automated tool that scans web applications for common security vulnerabilities and provides remediation guidance.',
    fullDescription: "This project focuses on creating a comprehensive security scanning tool that can identify vulnerabilities in web applications without requiring access to the source code. The scanner will test for common security issues like SQL injection, cross-site scripting (XSS), CSRF, insecure dependencies, and misconfigured security headers. The tool will generate detailed reports explaining found vulnerabilities, their potential impact, and specific steps to fix each issue. It will be designed to run either as a scheduled scan or integrate into CI/CD pipelines for continuous security assessment.",
    category: 'Cybersecurity',
    difficulty: 'Advanced',
    timeEstimate: '4-6 months',
    techStack: ['Python', 'OWASP ZAP API', 'Docker', 'Vulnerability databases', 'Node.js/React for UI'],
    steps: [
      {
        title: 'Design the scanning architecture',
        description: 'Create a modular system that can be extended with different types of security checks and scanning methods.'
      },
      {
        title: 'Implement passive scanning capabilities',
        description: 'Develop features that can analyze web applications without making potentially harmful requests.'
      },
      {
        title: 'Add active scanning features',
        description: 'Build scanning modules that actively test for vulnerabilities like injection attacks and XSS.'
      },
      {
        title: 'Create the reporting system',
        description: 'Develop a comprehensive reporting mechanism that explains vulnerabilities and remediation steps.'
      },
      {
        title: 'Add CI/CD integration',
        description: 'Create methods for integrating the scanner into development pipelines and setting security gates.'
      }
    ]
  },
  {
    id: 'security-2',
    title: 'Zero-Knowledge Proof Authentication System',
    description: 'Develop an authentication system that verifies identity without ever storing or transmitting passwords or sensitive credentials.',
    fullDescription: "This project involves creating an innovative authentication system based on zero-knowledge proofs, allowing users to prove they know a secret without revealing the secret itself. This approach enhances security by eliminating stored passwords that could be stolen in data breaches. The system will include registration, authentication, password reset mechanisms, and multi-factor authentication options—all implemented using cryptographic zero-knowledge protocols. It will also feature an API allowing integration with existing applications and detailed logging for security auditing purposes.",
    category: 'Cybersecurity',
    difficulty: 'Expert',
    timeEstimate: '5-7 months',
    techStack: ['Cryptographic libraries', 'Rust/Go', 'WebAuthn', 'React', 'PostgreSQL'],
    steps: [
      {
        title: 'Research zero-knowledge proof protocols',
        description: 'Select appropriate cryptographic protocols that balance security with performance and user experience.'
      },
      {
        title: 'Implement core cryptographic functions',
        description: 'Build the fundamental cryptographic operations that enable secure zero-knowledge verification.'
      },
      {
        title: 'Create the authentication flow',
        description: 'Develop the complete user journey for registration, login, and credential recovery.'
      },
      {
        title: 'Build administration and monitoring tools',
        description: 'Create interfaces for managing users and monitoring authentication attempts and security events.'
      },
      {
        title: 'Develop integration capabilities',
        description: 'Build APIs and plugins allowing the system to be integrated with various applications and services.'
      }
    ]
  },
  {
    id: 'data-1',
    title: 'Predictive Maintenance System',
    description: 'Build a machine learning system that predicts equipment failures before they happen using sensor data and maintenance records.',
    fullDescription: "This project aims to create a predictive maintenance solution that combines real-time equipment monitoring with historical maintenance data to forecast potential failures. The system will collect and analyze sensor data such as temperature, vibration, and acoustic emissions to identify patterns that precede equipment malfunctions. By predicting failures before they occur, organizations can schedule maintenance during planned downtime, order parts in advance, and avoid the high costs associated with unexpected breakdowns and emergency repairs.",
    category: 'Data Science',
    difficulty: 'Advanced',
    timeEstimate: '4-6 months',
    techStack: ['Python', 'TensorFlow/PyTorch', 'Time series analysis', 'Apache Kafka', 'Docker'],
    steps: [
      {
        title: 'Design the data collection architecture',
        description: 'Create a system for gathering and storing equipment sensor data and maintenance records.'
      },
      {
        title: 'Perform exploratory data analysis',
        description: 'Analyze historical data to identify patterns and correlations between sensor readings and failures.'
      },
      {
        title: 'Develop prediction models',
        description: 'Create and train machine learning models that can accurately predict impending equipment failures.'
      },
      {
        title: 'Build the real-time processing pipeline',
        description: 'Implement streaming data processing to continuously evaluate equipment health in real-time.'
      },
      {
        title: 'Create alerting and reporting interfaces',
        description: 'Develop dashboards and notification systems to alert maintenance teams about predicted issues.'
      }
    ]
  },
  {
    id: 'data-2',
    title: 'Natural Language Processing Content Moderator',
    description: 'Create an AI system that automatically detects and filters inappropriate content in user-generated text across multiple languages.',
    fullDescription: "This project focuses on building a robust content moderation system that can automatically identify harmful, offensive, or inappropriate text content. The system will use advanced NLP techniques to detect various categories of problematic content including hate speech, harassment, threats, explicit content, and misinformation. It will work across multiple languages and be designed to understand context and evolving language patterns. The solution will include configurable severity levels, human review workflows for edge cases, and continuous learning from user feedback to improve accuracy over time.",
    category: 'Data Science',
    difficulty: 'Advanced',
    timeEstimate: '6-8 months',
    techStack: ['Python', 'Transformer models', 'NLP libraries', 'Flask/FastAPI', 'Redis'],
    steps: [
      {
        title: 'Collect and prepare training data',
        description: 'Gather diverse datasets for multiple content categories and languages with proper annotation.'
      },
      {
        title: 'Build classification models',
        description: 'Develop and train models to detect different categories of inappropriate content.'
      },
      {
        title: 'Create the moderation pipeline',
        description: 'Implement a scalable system that can process and evaluate text content in real-time.'
      },
      {
        title: 'Add multi-language support',
        description: 'Extend the system to accurately moderate content across multiple languages and regional contexts.'
      },
      {
        title: 'Implement feedback mechanisms',
        description: 'Build systems for collecting feedback on moderation decisions to continuously improve the models.'
      }
    ]
  }
];

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'ai':
      return <Brain className="w-6 h-6 text-primary" />;
    case 'blockchain':
      return <Database className="w-6 h-6 text-accent" />;
    case 'iot':
      return <Cpu className="w-6 h-6 text-blue-400" />;
    case 'web development':
      return <Globe className="w-6 h-6 text-green-400" />;
    case 'mobile development':
      return <Smartphone className="w-6 h-6 text-orange-400" />;
    case 'cloud computing':
      return <Cloud className="w-6 h-6 text-purple-400" />;
    case 'cybersecurity':
      return <Lock className="w-6 h-6 text-red-400" />;
    case 'data science':
      return <Activity className="w-6 h-6 text-yellow-400" />;
    default:
      return <Server className="w-6 h-6 text-gray-400" />;
  }
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectIdeas.find(p => p.id === id);

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-background text-foreground pt-28 px-4">
          <div className="container mx-auto max-w-4xl text-center py-16">
            <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/projects" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Projects
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <PageTransition>
      <Navbar />
      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto pt-28 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 animate-fade-in opacity-0">
              <Link 
                to="/projects" 
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Projects
              </Link>
              
              <div className="flex items-center mb-4">
                <div className="bg-secondary/50 p-2 rounded-md mr-3">
                  {getCategoryIcon(project.category)}
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {project.category}
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{project.title}</h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                {project.fullDescription}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="glass-morphism rounded-lg px-4 py-2 flex items-center">
                  <Clock className="w-4 h-4 text-muted-foreground mr-2" />
                  <span className="text-sm">{project.timeEstimate}</span>
                </div>
                
                <div className="glass-morphism rounded-lg px-4 py-2 flex items-center">
                  <BookOpen className="w-4 h-4 text-muted-foreground mr-2" />
                  <span className="text-sm">{project.difficulty} Difficulty</span>
                </div>
              </div>
            </div>
            
            <div className="glass-morphism rounded-xl p-6 mb-8 animate-fade-in opacity-0" style={{ animationDelay: '100ms' }}>
              <h2 className="text-xl font-medium mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <div 
                    key={index} 
                    className="bg-secondary/50 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
              <h2 className="text-xl font-medium mb-6 flex items-center">
                <Code className="w-5 h-5 mr-2" />
                Implementation Steps
              </h2>
              
              <div className="space-y-6">
                {project.steps.map((step, index) => (
                  <div 
                    key={index}
                    className="glass-morphism rounded-xl p-6 animate-slide-in-right opacity-0"
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <h3 className="text-lg font-medium mb-2 flex items-center">
                      <div className="bg-primary/20 w-7 h-7 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                        {index + 1}
                      </div>
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectDetail;
