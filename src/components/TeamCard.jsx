import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TeamCard.css';

const TeamCard = ({ id, name, logo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/team/${id}`);
  };

  return (
    <div className="team-card" onClick={handleClick}>
      <img src={logo} alt={`${name} logo`} className="team-logo" />
      <h3>{name}</h3>
    </div>
  );
};

export default TeamCard;