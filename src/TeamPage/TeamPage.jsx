import React, { useState } from 'react';
// import Ramy from './Ramy';
import Nasro from '../Nasro/Nasro';
// import Nour from './Nour';
// import Yacine from './Yacine';
import Imad from '../imad/imad';
// import Khaled from './Khaled';

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    // { id: 1, name: 'Guettal Mohamed Ramy', role: 'Team Leader', component: Ramy, key: 'ramy' },
    { id: 2, name: 'Nasrellah Kharroubi', role: 'Member', component: Nasro, key: 'nasro' },
    // { id: 3, name: 'Nour Tliba', role: 'Member', component: Nour, key: 'nour' },
    // { id: 4, name: 'Bouyahia Mokhlis Yacine', role: 'Member', component: Yacine, key: 'yacine' },
    { id: 5, name: 'Imad Smail', role: 'Member', component: Imad, key: 'imad' },
    // { id: 6, name: 'Zaabat Khaled', role: 'Member', component: Khaled, key: 'khaled' }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    contentWrapper: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px',
      color: 'white'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '20px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
    },
    subtitle: {
      fontSize: '1.2rem',
      fontWeight: '300',
      opacity: '0.95',
      lineHeight: '1.6'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '25px',
      padding: '0 10px'
    },
    card: {
      background: 'white',
      borderRadius: '16px',
      padding: '30px 25px',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      border: 'none',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    cardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
    },
    cardLeader: {
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: 'white'
    },
    memberName: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '8px',
      color: 'inherit'
    },
    memberRole: {
      fontSize: '0.9rem',
      opacity: '0.8',
      fontWeight: '500',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    badge: {
      display: 'inline-block',
      padding: '4px 12px',
      borderRadius: '12px',
      fontSize: '0.75rem',
      fontWeight: '600',
      marginTop: '10px',
      background: 'rgba(255,255,255,0.3)',
      color: 'white'
    },
    backButton: {
      position: 'fixed',
      top: '20px',
      left: '20px',
      padding: '12px 24px',
      background: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '600',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      transition: 'all 0.3s ease',
      zIndex: 1000
    }
  };

  const [hoveredCard, setHoveredCard] = useState(null);

  if (selectedMember) {
    const MemberComponent = selectedMember.component;
    return (
      <div>
        <button 
          style={styles.backButton}
          onClick={() => setSelectedMember(null)}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          ← Back to Team
        </button>
        <MemberComponent />
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <div style={styles.header}>
          <h1 style={styles.title}>ENSIA AI Team</h1>
          <p style={styles.subtitle}>
            We are a team of AI and Software students studying at ENSIA<br/>
            (National Higher School of Artificial Intelligence)
          </p>
        </div>

        <div style={styles.grid}>
          {teamMembers.map((member) => (
            <div
              key={member.id}
              style={{
                ...styles.card,
                ...(member.id === 1 ? styles.cardLeader : {}),
                ...(hoveredCard === member.id ? styles.cardHover : {})
              }}
              onClick={() => setSelectedMember(member)}
              onMouseEnter={() => setHoveredCard(member.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.memberName}>{member.name}</div>
              {member.id === 1 && (
                <div style={styles.badge}>Team Leader</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;