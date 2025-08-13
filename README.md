# Basketball Data App

A dynamic web application for real-time tracking of basketball player statistics during live games, with AI-powered insights and analysis.

![Basketball Data App](https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1200&h=600)

## Features

### 🏀 Live Stat Tracking
- Monitor up to 10 players simultaneously during a single game
- Intuitive touch-friendly controls for quick stat entry
- Real-time score and game clock management
- Track detailed statistics including points, rebounds, assists, steals, blocks, and more

### 🤖 AI Integration
- Generate performance insights during games
- Receive strategic adjustment suggestions
- View player and team trend analysis
- Get AI-powered recommendations for improvement

### 🎨 User Interface
- Clean, modern design with Tailwind CSS
- Responsive layout for all devices
- Touch-optimized for courtside use
- Dark mode support

## Tech Stack

- **Frontend Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Deployment**: Vercel
- **Version Control**: GitHub

## Project Structure

```
basketball-data-app/
├── src/
│   ├── app/                  # Next.js app directory
│   │   ├── page.tsx          # Home page
│   │   ├── new-game/         # New game setup page
│   │   ├── game/             # Game tracking pages
│   │   └── dashboard/        # Statistics dashboard
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── PlayerCard.tsx
│   │   ├── StatEntryPanel.tsx
│   │   ├── GameClock.tsx
│   │   ├── Scoreboard.tsx
│   │   └── AIInsights.tsx
│   └── lib/                  # Utilities and state management
│       └── store.ts          # Zustand store
├── public/                   # Static assets
├── tailwind.config.js        # Tailwind configuration
└── next.config.js            # Next.js configuration
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/basketball-data-app.git
   cd basketball-data-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

### Creating a New Game

1. Click "Start New Game" on the home page
2. Enter game details (game name, team names)
3. Add player information (name, number, position)
4. Click "Start Game" to begin tracking

### Tracking Game Statistics

1. Use the game clock controls to manage quarters and time
2. Update the score using the scoreboard controls
3. Select a player to record their statistics
4. Use the stat entry panel to record various actions
5. View AI insights as they are generated during the game

### Analyzing Game Data

1. Navigate to the Dashboard to view game history
2. Select a game to view detailed statistics
3. Explore player trends and team performance
4. Review AI-generated insights and recommendations

## Deployment

The application is configured for easy deployment on Vercel:

1. Push your code to a GitHub repository
2. Connect the repository to Vercel
3. Configure build settings if needed
4. Deploy

## Future Enhancements

- Team management functionality
- Season-long statistics tracking
- Advanced AI predictions and analysis
- Video integration for play review
- Multi-user collaboration for team coaches and analysts

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Basketball icons and imagery from [Unsplash](https://unsplash.com)
- AI insights algorithm inspired by modern basketball analytics