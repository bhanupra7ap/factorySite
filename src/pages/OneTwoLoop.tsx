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
        <h1 className="header-title">One-Two Loop</h1>
      </div>
      <div className="content">
        <h2>One-Two Loop</h2>
        <p>Test for One-Two Loop.</p>
      </div>
    </div>
  );
};

export default FIBC;
