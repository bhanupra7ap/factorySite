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
        <h1 className="header-title">FIBC Food Grade</h1>
      </div>
      <div className="content">
        <h2>FIBC Food Grade</h2>
        <p>Test for FIBC Food Grade.</p>
      </div>
    </div>
  );
};

export default FIBC;
