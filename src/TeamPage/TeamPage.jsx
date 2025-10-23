import React, { useState } from 'react';

// Import member components
import Nasro from '../Nasro/Nasro';
import Imad from '../imad/imad';
import Nour from '../Nour/Nour';
import Mokhlis from '../Mokhlis/index';
import Khaled from '../khaled/khaled';

const TeamPage = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [currentView, setCurrentView] = useState('team'); // 'team' or member name

  const teamMembers = [
    {
      id: 'guettal',
      name: 'Guettal Mohamed Ramy',
      role: 'Team Leader',
      component: 'Guettal'
    },
    {
      id: 'nasrellah',
      name: 'Nasrellah Kharroubi',
      role: 'Team Member',
      component: 'Nasro'
    },
    {
      id: 'nour',
      name: 'Nour Tliba',
      role: 'Team Member',
      component: 'Nour'
    },
    {
      id: 'mokhlis',
      name: 'Bouyahia Mokhlis Yacine',
      role: 'Team Member',
      component: 'Mokhlis'
    },
    {
      id: 'imad',
      name: 'Imad Smail',
      role: 'Team Member',
      component: 'Imad'
    },
    {
      id: 'khaled',
      name: 'Zaabat Khaled',
      role: 'Team Member',
      component: 'Khaled'
    }
  ];

  const handleMemberClick = (member) => {
    // Set the current view to show the member's component
    setCurrentView(member.component.toLowerCase());
  };

  const handleBackToTeam = () => {
    setCurrentView('team');
  };

  // Render member component based on current view
  const renderMemberComponent = () => {
    switch (currentView) {
      case 'nasro':
        return <Nasro onBack={handleBackToTeam} />;
      case 'imad':
        return <Imad onBack={handleBackToTeam} />;
      case 'nour':
        return <Nour onBack={handleBackToTeam} />;
      case 'mokhlis':
        return <Mokhlis onBack={handleBackToTeam} />;
      case 'khaled':
        return <Khaled onBack={handleBackToTeam} />;
      case 'guettal':
        return <div style={{...containerStyle, justifyContent: 'center', alignItems: 'center'}}>
          <div style={{textAlign: 'center', color: 'white'}}>
            <h1>Guettal Mohamed Ramy's Portfolio</h1>
            <p>Team Leader - Coming Soon...</p>
            <button 
              onClick={handleBackToTeam}
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '25px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                marginTop: '20px'
              }}
            >
              ← Back to Team
            </button>
          </div>
        </div>;
      default:
        return null;
    }
  };

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '2rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '3rem',
    color: 'white'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    background: 'linear-gradient(45deg, #fff, #f0f0f0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const subtitleStyle = {
    fontSize: '1.2rem',
    fontWeight: '300',
    opacity: '0.9',
    maxWidth: '600px',
    lineHeight: '1.6'
  };

  const teamGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    width: '100%',
    maxWidth: '1200px',
    padding: '0 1rem'
  };

  const memberCardStyle = (isHovered, isLeader) => ({
    background: isHovered 
      ? 'linear-gradient(145deg, #ffffff, #f0f0f0)' 
      : 'linear-gradient(145deg, #f8f9fa, #e9ecef)',
    borderRadius: '15px',
    padding: '1.5rem',
    boxShadow: isHovered 
      ? '0 15px 35px rgba(0,0,0,0.2), 0 5px 15px rgba(0,0,0,0.1)' 
      : '0 8px 25px rgba(0,0,0,0.1), 0 3px 10px rgba(0,0,0,0.05)',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
    border: isLeader ? '2px solid #ffd700' : '2px solid transparent',
    position: 'relative',
    overflow: 'hidden'
  });

  const memberNameStyle = {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '0.5rem',
    transition: 'color 0.3s ease'
  };

  const memberRoleStyle = (isLeader) => ({
    fontSize: '0.9rem',
    color: isLeader ? '#e67e22' : '#7f8c8d',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '1rem'
  });

  const leaderBadgeStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'linear-gradient(45deg, #ffd700, #ffed4e)',
    color: '#2c3e50',
    padding: '0.3rem 0.8rem',
    borderRadius: '20px',
    fontSize: '0.7rem',
    fontWeight: 'bold',
    boxShadow: '0 2px 8px rgba(255, 215, 0, 0.3)'
  };

  const hoverOverlayStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
    opacity: '0',
    transition: 'opacity 0.3s ease',
    borderRadius: '15px'
  };


  // If we're viewing a specific member, render their component
  if (currentView !== 'team') {
    return renderMemberComponent();
  }

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>Our AI & Software Team</h1>
        <p style={subtitleStyle}>
          We are a team of AI and Software students studying at ENSIA (National Higher School of Artificial Intelligence).
        </p>
      </div>

      <div style={teamGridStyle}>
        {teamMembers.map((member) => {
          const isHovered = hoveredMember === member.id;
          const isLeader = member.role === 'Team Leader';
          
          return (
            <div
              key={member.id}
              style={memberCardStyle(isHovered, isLeader)}
              onClick={() => handleMemberClick(member)}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {isLeader && <div style={leaderBadgeStyle}>LEADER</div>}
              
              <div style={hoverOverlayStyle} />
              
              <h3 style={memberNameStyle}>
                {member.name}
              </h3>
              
              <p style={memberRoleStyle(isLeader)}>
                {member.role}
              </p>
              
              <div style={{
                fontSize: '0.9rem',
                color: '#7f8c8d',
                fontStyle: 'italic'
              }}>
                Click to view portfolio
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamPage;
