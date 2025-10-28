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
        <h1 className="header-title">FIBC Type A, B and C</h1>
      </div>
      <div className="content">
        <h2>FIBC Type A, B and C</h2>
        <p>Test for FIBC Type A, B and C.</p>
      </div>
    </div>
  );
};

export default FIBC;
