import headerImg from "../assets/non-woven-header.avif";

const NonWovenBags = () => {
    return (
      <div className="page">
        <div 
          className="header-image" 
          style={{
            backgroundImage: `url(${headerImg})`
          }}
        >
          <h1 className="header-title">WPP Fabric</h1>
        </div>
        <div className="content">
          <h2>WPP Fabric Solutions</h2>
          <p>Woven Polypropylene Fabric. This is the WPP Fabric page. Content will be added later.</p>
        </div>
      </div>
    );
  };
  
  export default NonWovenBags;
  