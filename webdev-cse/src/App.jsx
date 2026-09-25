import './App.css'
import MatchCard from './components/MatchCard'

const matches = [
  {
    id: 1,
    teamOne: 'Mumbai Indians',
    teamTwo: 'Chennai Super Kings',
    date: '28 March 2026',
    time: '7:30 PM',
    venue: 'Wankhede Stadium, Mumbai',
  },
  {
    id: 2,
    teamOne: 'Royal Challengers Bengaluru',
    teamTwo: 'Kolkata Knight Riders',
    date: '29 March 2026',
    time: '7:30 PM',
    venue: 'M. Chinnaswamy Stadium, Bengaluru',
  },
  {
    id: 3,
    teamOne: 'Rajasthan Royals',
    teamTwo: 'Delhi Capitals',
    date: '30 March 2026',
    time: '7:30 PM',
    venue: 'Sawai Mansingh Stadium, Jaipur',
  },
]

function App() {
  return (
    <main className="matches-page">
      <header className="matches-header">
        <p className="eyebrow">IPL 2026</p>
        <h1>Upcoming Matches</h1>
        <p>Choose a match and book your seat.</p>
      </header>

      <section className="match-list" aria-label="Upcoming IPL matches">
        {matches.map((match) => (
          <MatchCard
            key={match.id}
            teamOne={match.teamOne}
            teamTwo={match.teamTwo}
            date={match.date}
            time={match.time}
            venue={match.venue}
          />
        ))}
      </section>
    </main>
  )
}

export default App
