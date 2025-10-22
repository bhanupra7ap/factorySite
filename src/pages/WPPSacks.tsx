import headerImg from "../assets/wpp-sack-header.jpg";

const WPPSacks = () => {
  return (
    <div className="page">
      <div 
        className="header-image" 
        style={{
          backgroundImage: `url(${headerImg})`
        }}
      >
        <h1 className="header-title">WPP Sacks</h1>
      </div>
      <div className="content">
        <h2>WPP Sack Solutions</h2>
        <p>Woven Polypropylene Sacks. This is the WPP Sacks page. Content will be added later.</p>
      </div>
    </div>
  );
};

export default WPPSacks;
