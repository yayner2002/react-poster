
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <p>React Poster &copy; {currentYear} .all Rights Reserved.</p>
    </div>
  );
};

export default Footer;
