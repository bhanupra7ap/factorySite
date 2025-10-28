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
        <h1 className="header-title">Four Panel</h1>
      </div>
      <div className="content">
        <h2>Four Panel</h2>
        <p>Test for Four Panel.</p>
      </div>
    </div>
  );
};

export default FIBC;
