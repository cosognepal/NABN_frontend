import '../components/CTA.css'
import useFetch from "../hooks/useFetch.js";

function CTA() {
  const { loading, error, data } = useFetch("http://localhost:1337/api/home?populate[pagecontent][populate]=*");

  if (loading) return <div className="cta-section loading">Loading...</div>;
  if (error) return <div className="cta-section error">Error loading content</div>;

  // Find the CTA component
  const pageContent = data?.data?.pagecontent || [];
  const ctaSection = pageContent.find(
    component => component.__component === "components.cta"
  );

  return (
    <section className="cta-section">
      <div className="container">
        <h2 className="cta-title">
          {ctaSection?.CTAtitle || "Ready to Make a Difference?"}
        </h2>
        <p className="cta-description">
          {ctaSection?.CTAsubtitle || "Join us in empowering Nepal's youth"}
        </p>
        <div>
          <button className="button button-primary">
            <a href="#">
            {ctaSection?.CTAbutton || "Donate Now"}
            </a>

          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA