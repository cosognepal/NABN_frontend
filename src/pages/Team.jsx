import { useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from "../components/Footer.jsx";
import useFetch from "../hooks/useFetch.js";
import "./Team.css";

function Team() {
  const { loading, error, data } = useFetch("https://charming-trust-6afb776746.strapiapp.com/api/team?populate[pagecontent][populate]=*");

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

  // Extract page content from the response
  const pageContent = data?.data?.pagecontent || [];

  // Process the content to group team members
  const teamMembers = [];
  let currentMember = {};

  pageContent.forEach(content => {
    if (content.__component === "components.subtitle") {
      // If we already have a member with data, add it to our array
      if (currentMember.name) {
        teamMembers.push({...currentMember});
      }
      // Start a new member
      currentMember = { name: content.subtitle };
    } else if (content.__component === "components.image") {
      // Add image to current member - use the full URL directly
      const imageUrl = content.image?.url || "/placeholder-avatar.png";
      currentMember.image = imageUrl;
    } else if (content.__component === "components.description") {
      // Add description to current member
      currentMember.description = content.description;
    }
  });

  // Don't forget to add the last member
  if (currentMember.name) {
    teamMembers.push({...currentMember});
  }

  return (
    <div className="team-page">
      <Header />
      <div className="team-container">
        <h1 className="team-title">Our Team</h1>
        
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-image-container">
                <img 
                  src={member.image} 
                  alt={`${member.name} portrait`} 
                  className="member-image"
                />
              </div>
              <div className="member-details">
                <h2 className="member-name">{member.name}</h2>
                <p className="member-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Team;