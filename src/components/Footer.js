import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="mt-10 text-center p-4 bg-cyan-700 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <h5>Contact Us</h5>
            <p className="flex items-center">
              <img
                className="mr-2"
                width="30"
                height="30"
                src="https://img.icons8.com/plasticine/100/000000/filled-message.png"
                alt="filled-message"
              />
              <a href="mailto:info@example.com" className="hover:underline cursor-pointer">
                Email: info@example.com
              </a>
            </p>
            <p className="flex items-center">
              <img
                className="mr-2"
                width="20"
                height="20"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/phone.png"
                alt="phone"
              />
              <a href="tel:+11234567890" className="hover:underline cursor-pointer">
                Phone: +91 1234567890
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h5>Follow Us</h5>
            <div className="flex items-center">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline cursor-pointer"
              >
                <img
                  className="mr-2"
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-glyphs/30/FFFFFF/twitter--v1.png"
                  alt="twitter--v1"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline cursor-pointer"
              >
                Twitter
              </a>
            </div>
            <div className="flex items-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline cursor-pointer"
              >
                <img
                  className="mr-2"
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-glyphs/30/FFFFFF/facebook-new.png"
                  alt="facebook-new"
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline cursor-pointer"
              >
                Facebook
              </a>
            </div>
            <div className="flex items-center">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline cursor-pointer"
              >
                <img
                  className="mr-2"
                  width="20"
                  height="20"
                  src="https://img.icons8.com/material-outlined/24/FFFFFF/instagram-new--v1.png"
                  alt="instagram-new--v1"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline cursor-pointer"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h5>Address</h5>
            <p className="flex items-center">
              <img
                className="mr-2"
                width="24"
                height="24"
                src="https://img.icons8.com/material-rounded/24/FFFFFF/marker.png"
                alt="marker"
              />
              123 Street, Delhi, India
            </p>
          </div>
        </div>

        <hr className="my-4" />

        <p>&copy; 2023 Techbumps. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
