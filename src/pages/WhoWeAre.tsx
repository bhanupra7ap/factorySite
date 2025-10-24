import headerImg from "../assets/who-we-are-header.avif";

const WhoWeAre = () => {
  return (
    <div className="page">
      <div 
        className="header-image" 
        style={{
          backgroundImage: `url(${headerImg})`
        }}
      >
        <h1 className="header-title">Who We Are</h1>
      </div>
      <div className="content">
        <h2>About Us</h2>
        <p>We are one of the leading manufacturers and exporters of FIBC (Flexible
            Intermediate Bulk Containers) also known as Jumbo Bags, Bulk Bags, or
            Big Bags. Our products are designed to meet the highest standards of
            quality and safety, ensuring reliable storage and transportation
            solutions for various industries.</p>
      </div>
    </div>
  );
};

export default WhoWeAre;
