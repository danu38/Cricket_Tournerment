import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './TeamDetail.css';
import teamData from '../data/teams.json';

const TeamDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [team, setTeam] = useState(null);

  useEffect(() => {
    const foundTeam = teamData.find((team) => team.id === id);
    if (foundTeam) {
      setTeam(foundTeam);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  if (!team) return <div className="loading">Loading...</div>;

  return (
    <div
      className="team-detail-wrapper"
      style={{ backgroundImage: `url(${team.bg})` }}
    >
      <div className="team-overlay">
        <h1>{team.name}</h1>
        <div className="member-grid">
          {team.members.map((member, index) => (
            <div
              key={index}
              className={`member-card ${member.role.toLowerCase()}`}
            >
              <div className="photo-placeholder">
                <span>{member.name.charAt(0)}</span>
              </div>
              <h3>{member.name}</h3>
              <p><strong>Role:</strong> {member.role}</p>
              <p>Age: {member.age}</p>
              <p>Runs: {member.runs}</p>
            </div>
          ))}
        </div>
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      </div>
    </div>
  );
};

export default TeamDetail;