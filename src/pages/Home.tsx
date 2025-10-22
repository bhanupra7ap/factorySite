const Home = () => {
  return (
    <div className="page">
      <div 
        className="header-image" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <h1 className="header-title">FIBC manufacturers and exporters</h1>
      </div>
      <div className="content">
        <h2>Home Page</h2>
        <p>
          <h3>What we do?</h3>
          We are one of the leading manufacturers and exporters of FIBC (Flexible Intermediate Bulk Containers) also known as Jumbo Bags, Bulk Bags, or Big Bags. Our products are designed to meet the highest standards of quality and safety, ensuring reliable storage and transportation solutions for various industries.
        </p>
      </div>
    </div>
  );
};

export default Home;
