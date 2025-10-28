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
        <h1 className="header-title">Circular/ Juki</h1>
      </div>
      <div className="content">
        <h2>Circular/ Juki</h2>
        <p>Test for Circular/ Juki.</p>
      </div>
    </div>
  );
};

export default FIBC;
