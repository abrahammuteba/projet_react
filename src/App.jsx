import React from "react";
import Navbar from "/components/Navbar.jsx";

const App = () => {
  return (
    <div className="flex flex-col">
      {/* Navbar importée */}
      <Navbar />

      {/* Section Hero */}
      <div className="hero flex border-box items-center h-150 p-10 bg-primary m-5 rounded-3xl">
        <div className="flex relative h-full w-full flex-row justify-between">
          <div className="left z-6 border-box flex-col gap-5 flex justify-center w-1/2">
            <h1 className="text-white font-bold text-5xl">
              Experience the road <br /> like never before
            </h1>
            <p className="text-white font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nihil
              quibusdam cumque, ad voluptatem corrupti velit vitae. Tempora
              suscipit, ad laboriosam error eveniet ea atque et rerum itaque
              sequi necessitatibus?
            </p>
            <button
              className="text-white w-2/6 cursor-pointer font-bold p-3 rounded-md bg-secondary
             hover:bg-white hover:text-secondary"
            >
              View all cars
            </button>
          </div>

          <div className="right z-6 flex justify-center items-center w-1/2 border-box">
            <div
              className="flex flex-col h-[90%] justify-center items-center
             w-[70%] bg-white rounded-xl border-box p-10 gap-5"
            >
              <h1 className="text-center text-2xl font-bold w-full">
                Book your car
              </h1>

              <div className="boxSelect flex flex-col gap-10 w-full">
                <select name="typeCar" id="" className="">
                  <option value="car-type">Car type</option>
                </select>
                <select name="place-rental" id="" className="">
                  <option value="place-rental">Place of rental</option>
                </select>
                <select name="place-return" id="" className="">
                  <option value="place-return">Place of return</option>
                </select>

                <input
                  type="date"
                  name="return-date"
                  id="return-date"
                  className="border rounded-md p-2"
                />
                <input
                  placeholder="Return date"
                  type="date"
                  id="return-date"
                  name="return-date"
                  className="border rounded-md p-2"
                />
              </div>

              <button
                className="bg-secondary w-[100%] text-1xl p-2.5 text-white
              hover:bg-white hover:text-secondary border-2
               transition-all duration-100 rounded-xl font-bold"
              >
                Book now
              </button>
            </div>
          </div>

          <img
            className="absolute w-[800px] z-3 cover top-[135px] left-[100px]"
            src="public/images/car-blur.png"
            alt="voiture floutée"
          />
          <img
            className="absolute w-[900px] z-2"
            src="public/images/pneu-marque.svg"
            alt="trace de pneu"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
 