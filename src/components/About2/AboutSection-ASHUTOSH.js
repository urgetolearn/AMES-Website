import React, { useEffect } from 'react';
import { useFadeUpOnScroll } from '../../animation/useFadeUpOnScroll';
import './AboutSection-ASHUTOSH.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Footer from '../Footer/footer';

function AboutSection() {
  const fadeRefs = useFadeUpOnScroll();
  
  const teamMembers = [
    {
      id: 1,
      name: "Sir name",
      role: "Cultivate a culture of engineering excellence through shared knowledge and collaborative initiatives.",
      image: "/portrait.jpg",
      linkedin: "#",
      email: "mailto:example@nitk.edu.in"
    },
    {
      id: 2,
      name: "Sir name",
      role: "Cultivate a culture of engineering excellence through shared knowledge and collaborative initiatives.",
      image: "/portrait.jpg",
      linkedin: "#",
      email: "mailto:example@nitk.edu.in"
    }
  ];

  const adminMembers = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: `Admin Name ${i + 1}`,
    image: "/portrait.jpg",
    linkedin: "#",
    github: "#"
  }));

  const makeMembers = (count, prefix, start = 10) =>
    Array.from({ length: count }, (_, i) => ({
      id: `${prefix}-${i + 1}`,
      name: `${prefix} ${i + 1}`,
      image: `https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${start + i}.jpg`,
      linkedin: '#',
      github: '#'
    }));

  const teams = [
    { id: 'team-academic', title: 'Academic & Technical Division', cols: 4, members: makeMembers(8, 'Academic', 21) },
    { id: 'team-projects', title: 'Projects Team', cols: 4, members: makeMembers(4, 'Projects', 31) },
    { id: 'team-aarc', title: 'AMES Alumni Relations Cell (AARC)', cols: 3, members: makeMembers(6, 'AARC', 41) },
    { id: 'team-marketing', title: 'Marketing & Outreach Department', cols: 2, members: makeMembers(2, 'Marketing', 51) },
    { id: 'team-web', title: 'Web Team', cols: 2, members: makeMembers(2, 'Web', 61) }
  ];

  useEffect(() => {
    if (window.location && window.history && window.history.state && window.history.state.usr && window.history.state.usr.scrollToTeams) {
      const section = document.getElementById('teams-backbone-section');
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
    }
  }, []);

  return (
    <section className="detailed-about-container">
      <div className="detailed-about-content">
        
        {/* About NITK Section */}
        <div className="detailed-info-row" ref={el => fadeRefs.current[0] = el}>
          <div className="detailed-img-col">
            <div className="detailed-img-box detailed-img-nitk" style={{ backgroundImage: 'url(/temp.jpg)' }} />
          </div>
          <div className="detailed-text-col">
            <h2 className="detailed-section-title">About NITK</h2>
            <p className="detailed-main-text">
              We love what we do, and we do it with passion.<br />
              We value the experimentation of the message and smart incentives.
            </p>
          </div>
        </div>

        {/* About AMES Section */}
        <div className="detailed-info-row reverse" ref={el => fadeRefs.current[1] = el}>
          <div className="detailed-text-col centered-ames">
            <h2 className="detailed-section-title">About AMES</h2>
            <p className="detailed-main-text">
              We love what we do, and we do it with passion.<br />
              We value the experimentation of the message and smart incentives.
            </p>
          </div>
          <div className="detailed-img-col">
            <div className="detailed-img-box detailed-img-ames" style={{ backgroundImage: 'url(/temp.jpg)' }} />
          </div>
        </div>

        {/* Teams Backbone Section */}
        <div className="teams-backbone-wrapper" id="teams-backbone-section" ref={el => fadeRefs.current[2] = el}>
          <h2 className="teams-header-title">Teams Backbone</h2>
          <div className="teams-main-grid">
            {teamMembers.map((member) => (
              <div className="member-info-card" key={member.id}>
                <div className="member-image-circle">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-details">
                  <h3 className="member-name-text">{member.name}</h3>
                  <p className="member-role-text">{member.role}</p>
                  <div className="member-social-links">
                    <a href={member.linkedin} className="social-btn linkedin" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={20} />
                    </a>
                    <a href={member.email} className="social-btn email">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Admin Team Section */}
        <div className="admin-team-wrapper" ref={el => fadeRefs.current[3] = el}>
          <h2 className="admin-header-title">Admin Team</h2>
          <div className="admin-custom-grid">
            {adminMembers.map((member) => (
              <div className="admin-custom-card" key={member.id}>
                <div className="admin-card-img">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3 className="admin-card-name">{member.name}</h3>
                <div className="admin-card-socials">
                  <a href={member.linkedin} className="social-btn linkedin"><FaLinkedin size={18} /></a>
                  <a href={member.github} className="social-btn github"><FaGithub size={18} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Team Sections */}
        {teams.map((team) => (
          <section className="dynamic-team-section" key={team.id} id={team.id}>
            <h2 className="teams-header-title">{team.title}</h2>
            <div className="dynamic-team-grid" style={{ gridTemplateColumns: `repeat(${team.cols}, 1fr)` }}>
              {team.members.map(member => (
                <div className="member-info-card" key={member.id}>
                  <div className="member-image-circle">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h3 className="member-name-text">{member.name}</h3>
                  <div className="member-social-links">
                    <a href={member.linkedin} className="social-btn linkedin"><FaLinkedin /></a>
                    <a href={member.github} className="social-btn github"><FaGithub /></a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

      </div>
      <Footer />
    </section>
  );
}

export default AboutSection;