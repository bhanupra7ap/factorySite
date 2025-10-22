import headerImg from "../assets/quality-header.avif";

const Quality = () => {
  return (
    <div className="page">
      <div 
        className="header-image" 
        style={{
          backgroundImage: `url(${headerImg})`
        }}
      >
        <h1 className="header-title">Quality Assurance</h1>
      </div>
      <div className="content">
        <h2>Quality Standards</h2>
        <p>Our commitment to excellence. This is the Quality page. Content will be added later.</p>
      </div>
    </div>
  );
};

export default Quality;
