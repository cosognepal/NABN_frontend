import { Link } from "react-router-dom";
import "../components/CTA.css";
// import useFetch from "../hooks/useFetch.js";
import Data from "../data/home";

function CTA() {
  // const { loading, error, data } = useFetch(
  //   "https://charming-trust-6afb776746.strapiapp.com/api/home?populate[pagecontent][populate]=*"
  // );

  // if (loading) return <div className="cta-section loading">Loading...</div>;
  // if (error)
  //   return <div className="cta-section error">Error loading content</div>;

  
  // // Find the CTA component
  // const pageContent = data?.data?.pagecontent || [];
  // const ctaSection = pageContent.find(
  //   (component) => component.__component === "components.cta"
  // );
  
  const ctaSection = Data.ctaSection;

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
            <Link to="/about" rel="noopener noreferrer">
              {ctaSection?.CTAbutton || "Donate Now"}
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
