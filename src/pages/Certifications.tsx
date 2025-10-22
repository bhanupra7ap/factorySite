import headerImg from "../assets/certification-header.avif";

const Certifications = () => {
  return (
    <div className="page">
      <div 
        className="header-image" 
        style={{
          backgroundImage: `url(${headerImg})`
        }}
      >
        <h1 className="header-title">Certifications</h1>
      </div>
      <div className="content">
        <h2>Quality Certifications</h2>
        <p>Our quality certifications and standards. This is the Certifications page. Content will be added later.</p>
      </div>
    </div>
  );
};

export default Certifications;
