import headerImg from "../assets/facilities-header.jpg";

const Facilities = () => {
  return (
    <div className="page">
      <div 
        className="header-image" 
        style={{
          backgroundImage: `url(${headerImg})`
        }}
      >
        <h1 className="header-title">Our Facilities</h1>
      </div>
      <div className="content">
        <h2>Manufacturing Facilities</h2>
        <p>State-of-the-art manufacturing infrastructure. This is the Facilities page. Content will be added later.</p>
      </div>
    </div>
  );
};

export default Facilities;
