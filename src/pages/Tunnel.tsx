import headerImg from "../assets/fibc-header.jpg";

const FIBC = () => {
  return (
    <div className="page">
      <div 
        className="header-image" 
        style={{
          backgroundImage: `url(${headerImg})`
        }}
      >
        <h1 className="header-title">Tunnel</h1>
      </div>
      <div className="content">
        <h2>Tunnel</h2>
        <p>Test for Tunnel.</p>
      </div>
    </div>
  );
};

export default FIBC;
