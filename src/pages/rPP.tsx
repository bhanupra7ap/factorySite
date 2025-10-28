import headerImg from "../assets/fibc-header.jpg";

const RPP = () => {
  return (
    <div className="page">
      <div 
        className="header-image" 
        style={{
          backgroundImage: `url(${headerImg})`
        }}
      >
        <h1 className="header-title">FIBC rPP</h1>
      </div>
      <div className="content">
        <h2>FIBC rPP</h2>
        <p>Test for FIBC rPP.</p>
      </div>
    </div>
  );
};

export default RPP;
