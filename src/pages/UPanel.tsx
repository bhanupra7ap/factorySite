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
        <h1 className="header-title">U Panel</h1>
      </div>
      <div className="content">
        <h2>U Panel</h2>
        <p>Test for U Panel.</p>
      </div>
    </div>
  );
};

export default FIBC;
