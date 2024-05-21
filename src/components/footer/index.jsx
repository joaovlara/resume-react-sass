import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Jwao. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
