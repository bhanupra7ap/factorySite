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
        <h1 className="header-title">Builder Bag</h1>
      </div>
      <div className="content">
        <h2>Builder Bag</h2>
        <p>Test for Builder Bag.</p>
      </div>
    </div>
  );
};

export default FIBC;
