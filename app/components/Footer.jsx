'use client';

const Footer = () => {
  return (
    <footer className="bg-[#60b3c7] text-white py-6 text-center">
      <div className="container mx-auto px-4">
        <p>My New Red Shoes is a 501(c)3 Non-Profit Organization</p>
        <p>EIN: 20-4683289</p>
        <a
          href="http://www.mynewredshoes.org"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black"
        >
          www.mynewredshoes.org
        </a>
        <p className="mt-4 text-sm text-[#F5F5F5]">
          <a
            href="https://bobbynaluz.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:text-black"
          >
            Website designed and developed by Bobby Naluz.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
