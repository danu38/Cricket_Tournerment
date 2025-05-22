import { useNavigate } from 'react-router-dom';
import './TeamCarousel.css';
import teamData from '../data/teams.json'; // Create sample data

const TeamCarousel = () => {
  const navigate = useNavigate();

  return (
    <div className="carousel-container">
      <button className="arrow left">{'<'}</button>
      <div className="card-track">
        {teamData.map((team) => (
          <div
            key={team.id}
            className="team-card"
            onClick={() => navigate(`/team/${team.id}`)}
          >
            <img src={team.logo} alt={team.name} />
            <h3>{team.name}</h3>
          </div>
        ))}
      </div>
      <button className="arrow right">{'>'}</button>
    </div>
  );
};

export default TeamCarousel;