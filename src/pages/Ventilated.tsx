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
        <h1 className="header-title">Ventilated</h1>
      </div>
      <div className="content">
        <h2>Ventilated</h2>
        <p>Test for Ventilated.</p>
      </div>
    </div>
  );
};

export default FIBC;
