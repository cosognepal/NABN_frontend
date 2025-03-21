import './Impact.css'
import useFetch from "../hooks/useFetch.js";

function Impact() {
  const { loading, error, data } = useFetch("https://charming-trust-6afb776746.strapiapp.com/api/home?populate[pagecontent][populate]=*");

  if (loading) return <div className="impact-section loading">Loading...</div>;
  if (error) return <div className="impact-section error">Error loading content</div>;

  // Find the impact section component
  const pageContent = data?.data?.pagecontent || [];
  const impactSection = pageContent.find(
    component => component.__component === "components.impactsection"
  );

  return (
    <section className="impact-section">
      <div className="container">
        <h2 className="section-title">{impactSection?.title || "Our Impact"}</h2>
        <div className="impact-grid">
          <div>
            <div className="impact-number">{impactSection?.fact1 || "500+"}</div>
            <p className="impact-label">{impactSection?.fact1description || "Students Taught"}</p>
          </div>
          <div>
            <div className="impact-number">{impactSection?.fact2 || "20+"}</div>
            <p className="impact-label">{impactSection?.fact2description || "Educational Programs"}</p>
          </div>
          <div>
            <div className="impact-number">{impactSection?.fact3 || "15"}</div>
            <p className="impact-label">{impactSection?.fact3description || "Partner Schools"}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact