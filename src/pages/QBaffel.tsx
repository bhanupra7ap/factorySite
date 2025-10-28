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
        <h1 className="header-title">Q Panel/ Baffel</h1>
      </div>
      <div className="content">
        <h2>Q Panel/ Baffel</h2>
        <p>Test for Q Panel/ Baffel.</p>
      </div>
    </div>
  );
};

export default FIBC;
