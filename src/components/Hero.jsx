import './Hero.css'
import useFetch from "../hooks/useFetch.js";

function Hero() {
  const { loading, error, data } = useFetch("http://localhost:1337/api/home?populate[pagecontent][populate]=*");

  if (loading) return <div className="hero-section loading">Loading...</div>;
  if (error) return <div className="hero-section error">Error loading content</div>;

  // Find the CTA component for the button text
  const pageContent = data?.data?.pagecontent || [];
  const ctaComponent = pageContent.find(
    component => component.__component === "components.cta"
  );
  
  // Find the image component
  const imageComponent = pageContent.find(
    component => component.__component === "components.image"
  );
  
  const imageUrl = imageComponent?.image 
    ? `http://localhost:1337${imageComponent.image.url}` 
    : null;

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              National Adolescent Boys Network Nepal
            </h1>
            <p className="hero-description">
              Empowering Nepal's youth
            </p>
            <a
              href="https://www.facebook.com/nabn.nepal/"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              
              {ctaComponent?.CTAbutton || "Learn More"}
            </a>
          </div>
          <div className="hero-image">
            {imageUrl && (
              <img 
                src={imageUrl} 
                alt="NDBN Nepal Logo" 
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;