import headerImg from "../assets/contact-header.avif";

const ContactUs = () => {
  return (
    <div className="page">
      <div 
        className="header-image" 
        style={{
          backgroundImage: `url(${headerImg})`
        }}
      >
        <h1 className="header-title">Contact Us</h1>
      </div>
      <div className="content">
        <h2>Contact Information</h2>
        <p>Get in touch with our team. This is the Contact Us page. Content will be added later.</p>
      </div>
    </div>
  );
};

export default ContactUs;
