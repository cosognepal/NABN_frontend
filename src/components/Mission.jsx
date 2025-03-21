import './Mission.css'
import useFetch from "../hooks/useFetch.js";

function Mission() {
  const { loading, error, data } = useFetch("http://localhost:1337/api/home?populate[pagecontent][populate]=*");

  if (loading) return <div className="mission-section loading">Loading...</div>;
  if (error) return <div className="mission-section error">Error loading content</div>;

  // Find the mission section component
  const pageContent = data?.data?.pagecontent || [];
  const missionSection = pageContent.find(
    component => component.__component === "components.missionsection"
  );

  // Construct image URLs
  const icon1Url = missionSection?.icon1 
    ? `http://localhost:1337${missionSection.icon1.url}` 
    : null;
    
  const icon2Url = missionSection?.icon2
    ? `http://localhost:1337${missionSection.icon2.url}` 
    : null;
    
  const icon3Url = missionSection?.icon3
    ? `http://localhost:1337${missionSection.icon3.url}` 
    : null;

  return(
    <section className="mission-section">
      <div className="container">
        <div className="mission-grid">
          <div className="mission-card">
            {icon1Url && (
              <img
                src={icon1Url}
                alt={missionSection?.mission1 || "Adolescent Rights"}
                className="mission-icon"
              />
            )}
            <h3 className="mission-title">
              {missionSection?.mission1 || "Adolescent Rights"}
            </h3>
            <p className="mission-description">
              {missionSection?.mission1subtitle || "Advocating for the protection and fulfillment of adolescent rights in Nepal"}
            </p>
          </div>
          
          <div className="mission-card">
            {icon2Url && (
              <img
                src={icon2Url}
                alt={missionSection?.mission2 || "Gender Equality"}
                className="mission-icon"
              />
            )}
            <h3 className="mission-title">
              {missionSection?.mission2 || "Gender Equality"}
            </h3>
            <p className="mission-description">
              {missionSection?.mission2subtitle || "Ending gender-based violence and promoting equality for all adolescents"}
            </p>
          </div>
          
          <div className="mission-card">
            {icon3Url && (
              <img
                src={icon3Url}
                alt={missionSection?.mission3 || "Youth Advocacy"}
                className="mission-icon"
              />
            )}
            <h3 className="mission-title">
              {missionSection?.mission3 || "Youth Advocacy"}
            </h3>
            <p className="mission-description">
              {missionSection?.mission3subtitle || "Empowering adolescents across all seven provinces to speak up for change"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission