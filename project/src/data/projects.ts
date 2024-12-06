import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'spotify-profile',
    title: 'Featured Project',
    name: 'Spotify Profile',
    description: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.',
    longDescription: `A comprehensive web application that leverages the Spotify Web API to provide users with deep insights into their listening habits. This application offers a unique way to visualize and understand your Spotify data, from your most played tracks to detailed audio analysis of your favorite songs.`,
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800&h=500',
    tech: ['React', 'Node.js', 'Express', 'Spotify API', 'Chart.js', 'Styled Components'],
    github: 'https://github.com',
    external: 'https://example.com',
    features: [
      'View your top artists and tracks over different time ranges',
      'Analyze audio features of tracks including danceability, energy, and mood',
      'Create and save custom playlists based on your listening habits',
      'View detailed statistics about your music taste',
      'Real-time updates of currently playing track'
    ],
    challenges: [
      'Implementing OAuth flow for secure user authentication',
      'Managing complex state with multiple API calls',
      'Creating efficient data visualization components',
      'Handling rate limiting and API quotas'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=80&w=800&h=500'
    ]
  },
  {
    id: 'ai-code-assistant',
    title: 'Featured Project',
    name: 'AI Code Assistant',
    description: 'An AI-powered code assistant that helps developers write better code faster. Features include code completion, bug detection, and automated code reviews.',
    longDescription: `A sophisticated AI-powered development tool that revolutionizes the way developers write and review code. Using advanced machine learning models, this assistant provides real-time suggestions, identifies potential bugs, and helps maintain code quality through automated reviews.`,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=500',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'React', 'TypeScript', 'Docker'],
    github: 'https://github.com',
    external: 'https://example.com',
    features: [
      'Real-time code completion with context awareness',
      'Automated code review and suggestions',
      'Bug detection and security vulnerability scanning',
      'Performance optimization recommendations',
      'Integration with popular IDEs'
    ],
    challenges: [
      'Training ML models on diverse code patterns',
      'Ensuring low latency for real-time suggestions',
      'Handling multiple programming languages',
      'Maintaining high accuracy in predictions'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=500'
    ]
  }
];