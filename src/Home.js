import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <img src="/sunflower2.jpg" alt="Sunflower Sunset" className="stretch-image" />
      <div className="intro-content">
        <h1 className="center-text">Welcome to Sunflower Therapy Co.</h1>
        <p className="center-text">
          At Sunflower Therapy Co, we believe in the transformative power of healing, growth, and self-discovery. Our mission is to provide a warm and supportive space where individuals can embark on a journey to emotional well-being and personal empowerment.
        </p>
        <p className="center-text">
          Guided by compassion and empathy, our Licensed Clinical Social Worker, Tarin McCarthy, is dedicated to helping you navigate life's challenges. Whether you are seeking support for anxiety, depression, stress management, or relationship difficulties, we're here to assist you on your path to a brighter and more fulfilling life.
        </p>
        <p className="center-text">
          Take the first step towards positive change. Explore our website to learn more about our services, discover valuable resources, and reach out to begin your therapeutic journey with Sunflower Therapy Co.
        </p>
      </div>
    </div>
  );
};

export default Home;