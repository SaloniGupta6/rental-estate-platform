const Footer = () => (
  <footer className="bg-[#1A1A1A] text-gray-200 py-4 text-center shadow-inner">
    <p className="text-sm">
      &copy; {new Date().getFullYear()}{" "}
      <span className="text-primary font-semibold">RentalEstate</span>. All
      rights reserved.
    </p>
  </footer>
);

export default Footer;
