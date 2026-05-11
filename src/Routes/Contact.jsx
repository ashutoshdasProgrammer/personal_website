import React from "react";

const Contact = () => {
  return (
    <>
      <div className="absolute bg-linear-to-br from-[#0e1629] via-[#0f1522] to-[#141b27] h-110 w-110 left-2/3 top-1/2 transform -translate-y-1/2 -translate-x-1/2 flex items-center justify-around gap-5 rounded-3xl shadow-2xl ">
        <div className="grid grid-cols-2 gap-4">
          {/* left side  */}
          <div className="flex flex-col gap-2 ">
            <div className="h-60 w-52 group border border-white/10 bg-white/20 transition duration-300 flex items-center justify-center rounded-3xl shadow-2xl cursor-pointer backdrop-blur-lg hover:scale-105 ">
              <img
                src="/ContactImages/twitter.png"
                alt="Twitter"
                className="h-28 group-hover:rotate-6 transition duration-300  "
              />
            </div>
            <div className="h-36 w-52 group border border-white/10 bg-white/20 flex items-center justify-center rounded-3xl shadow-2xl hover:scale-105 cursor-pointer backdrop-blur-lg   ">
              <img src="/ContactImages/gmail.avif" alt="Gmail" className="group-hover:scale-110 h-20 transition duration-300" />
            </div>
          </div>
          {/* right side */}
          <div className="flex flex-col gap-2">
            <div className="h-36 w-52 group flex justify-center items-center border border-white/10 bg-white/20  cursor-pointer rounded-3xl shadow-2xl backdrop-blur-lg hover:scale-110 transition duration-300 ">
              <img src="/ContactImages/linkedin.webp" alt="LinkedIn" className="h-20 group-hover:scale-105 transition duration-300  "/>
            </div>
            <div className="h-60 w-52 group border border-white/10 bg-white/20 hover:scale-110 transition duration-300 cursor-pointer shadow-3xl rounded-2xl backdrop-blur-lg flex items-center justify-center ">
              <img src="/ContactImages/instagram.png" alt="Instagram" className="group-hover:-rotate-6 h-28 transition duration-300 " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
