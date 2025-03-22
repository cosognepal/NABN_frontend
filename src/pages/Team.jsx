import { useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from "../components/Footer.jsx";
import useFetch from "../hooks/useFetch.js";
import "./Team.css";

function Team() {
  const { loading, error, data } = useFetch("http://localhost:1337/api/teammembers?populate=*");

  useEffect(() => {
    // Set page title when component mounts
    document.title = "Our Team | NABN";
  }, []);

  if (loading) return (
    <div className="team-page">
      <Header />
      <div className="team-loading">Loading team information...</div>
      <Footer />
    </div>
  );

  if (error) return (
    <div className="team-page">
      <Header />
      <div className="team-error">Error loading team information. Please try again later.</div>
      <Footer />
    </div>
  );

  // Get the team members data from the response
  const teamMembers = data?.data || [];

  return (
    <div className="team-page">
      <Header />
      <div className="team-container">
        <h1 className="team-title">Our Team</h1>
        
        <div className="team-members">
          {teamMembers.length > 0 ? (
            teamMembers.map(member => (
              <div key={member.id} className="team-member">
                <div className="member-image-container">
                  <img 
                    src={member.image?.url ? `http://charming-trust-6afb776746.strapiapp.com${member.image.url}` : "/placeholder-avatar.png"} 
                    alt={`${member.name} portrait`} 
                    className="member-image"
                  />
                </div>
                <div className="member-details">
                  <h2 className="member-name">{member.name}</h2>
                  <p className="member-position">{member.position}</p>
                  <div className="member-contact-info">
                    {member.phone && (
                      <p className="member-phone">
                        <span className="contact-label">Phone:</span> {member.phone}
                      </p>
                    )}
                    {member.address && (
                      <p className="member-address">
                        <span className="contact-label">Address:</span> {member.address}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No team members found</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Team;