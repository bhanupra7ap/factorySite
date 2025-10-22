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
        <h2>FIBC Solutions</h2>
        <p>Flexible Intermediate Bulk Containers. This is the FIBC products page. Content will be added later.</p>
      </div>
    </div>
  );
};

export default FIBC;
