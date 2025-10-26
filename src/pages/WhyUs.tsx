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
        <h1 className="header-title">FIBC Products</h1>
      </div>
      <div className="content">
        <h2>WHY US</h2>
        <p>Test for why us.</p>
      </div>
    </div>
  );
};

export default FIBC;
