function MatchCard({ teamOne, teamTwo, date, time, venue }) {
  return (
    <article className="match-card">
      <p className="match-date">
        {date} · {time}
      </p>

      <div className="teams">
        <h2>{teamOne}</h2>
        <span className="versus">VS</span>
        <h2>{teamTwo}</h2>
      </div>

      <p className="venue">{venue}</p>
      <button type="button">Book Tickets</button>
    </article>
  )
}

export default MatchCard
