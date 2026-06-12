import React from 'react';

function Header() {
  return (
    <header className="portfolio-header">
      {/* 📸 This tag reads photo.png straight from your public folder */}
      <img 
        src="/photo.png" 
        alt="Anvitha Reddy" 
        className="profile-img" 
      />
      <h1>Anvitha Reddy</h1>
      <p>My Personal Portfolio</p>
    </header>
  );
}

export default Header;