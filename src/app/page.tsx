import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary-700 to-primary-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Basketball Data App</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Track real-time basketball statistics with AI-powered insights and analysis
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/new-game" className="btn-primary text-center py-3 px-6 text-lg">
                Start New Game
              </Link>
              <Link href="/dashboard" className="btn-secondary text-center py-3 px-6 text-lg">
                View Dashboard
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center p-6">
                <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600 dark:text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Live Stat Tracking</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Monitor up to 10 players simultaneously during a single game, with intuitive controls for quick stat entry.
                </p>
              </div>
              
              <div className="card text-center p-6">
                <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600 dark:text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">AI Integration</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Analyze collected data to generate performance insights, suggest strategic adjustments, and predict future outcomes.
                </p>
              </div>
              
              <div className="card text-center p-6">
                <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600 dark:text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Touch-Friendly UI</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Enjoy a visually engaging, easy-to-navigate interface that feels fun and is optimized for clarity during fast-paced gameplay.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</div>
                  <h3 className="text-xl font-bold">Create a Game</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Set up a new game by entering team names and adding player information.
                </p>
              </div>
              
              <div className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</div>
                  <h3 className="text-xl font-bold">Track Stats</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  During the game, tap to record points, rebounds, assists, and other key statistics.
                </p>
              </div>
              
              <div className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</div>
                  <h3 className="text-xl font-bold">Get Insights</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Receive real-time AI-powered insights and strategic recommendations during the game.
                </p>
              </div>
              
              <div className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</div>
                  <h3 className="text-xl font-bold">Analyze Results</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  After the game, review detailed statistics, trends, and performance analysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Track Your Basketball Stats?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start tracking your team's performance today and unlock valuable insights with our AI-powered analytics.
            </p>
            <Link href="/new-game" className="bg-white text-primary-800 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg text-lg">
              Get Started Now
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 p-6 border-t">
        <div className="container mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300">© 2025 Basketball Data App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}