import React from "react";

const Navbar = () => {
  return (
    <div className="flex p-6 h-1/8 w-full items-center justify-between">
      {/* Logo */}
      <div className="flex justify-center items-center gap-6 flex-row">
        <img src="public/images/car.svg" alt="logo du site web" />
        <h1 className="font-bold text-2xl">Car Rental</h1>
      </div>

      {/* Navigation */}
      <div className="nav">
        <ul className="flex gap-6 font-light">
          {["Home", "Vehicule", "Details", "About Us", "Contact Us"].map(
            (item, index) => (
              <li
                key={index}
                className="hover:font-bold hover:border-b-2 hover:text-primary transition-all duration-100"
              >
                {item}
              </li>
            )
        )}
        </ul>
      </div>

      {/* Section droite (contact) */}
      <div className="flex justify-center gap-2">
        <img src="public/images/phone.svg" alt="icone pour appel" />
        <div className="flex flex-col items-center">
          <p>Need help ?</p>
          <p className="font-bold">+243 XXX-XXX</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
