import headerImg from "../assets/who-we-are-header.avif";

const WhoWeAre = () => {
  return (
    <div className="page">
      <div 
        className="header-image" 
        style={{
          backgroundImage: `url(${headerImg})`
        }}
      >
        <h1 className="header-title">Who We Are</h1>
      </div>
      <div className="content">
        <h2>About Our Company</h2>
        <p>Learn about our company and our mission. This is the Who We Are page. Content will be added later.</p>
      </div>
    </div>
  );
};

export default WhoWeAre;
