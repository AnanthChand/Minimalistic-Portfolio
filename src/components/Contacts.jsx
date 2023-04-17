import React from "react";

const Contacts = () => {
  return (
    <div id="contacts" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        Contacts
      </h1>
      <form action="https://getform.io/f/f31934f0-3ca9-4d97-857d-fa85569bd9d6" method="POST" encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-4 w-fullpy-2">
          <div className="flex flex-col">
            <label className="py-2 text-sm uppercase " htmlFor="name">
              Name
            </label>
            <input
              type="text"
              className="border-2 rounded-lg p-3 flex border-gray-400"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="py-2 text-sm uppercase " htmlFor="name">
              Phone number
            </label>
            <input
              type="text"
              className="border-2 rounded-lg p-3 flex border-gray-400"
              name="phone"
            />
          </div>
          <div className="flex flex-col">
            <label className="py-2 text-sm uppercase " htmlFor="name">
              Email
            </label>
            <input
              type="text"
              className="border-2 rounded-lg p-3 flex border-gray-400"
              name="email"
            />
          </div>
          <div className="flex flex-col">
            <label className="py-2 text-sm uppercase " htmlFor="name">
              subject
            </label>
            <input
              type="text"
              className="border-2 rounded-lg p-3 flex border-gray-400"
              name="subject"
            />
          </div>
          <div className="flex flex-col">
            <label className="py-2 text-sm uppercase " htmlFor="name">
              message
            </label>
            <textarea name="message" id=""  rows="10"  className="border-2 rounded-lg p-3 flex border-gray-400"></textarea>
          </div>
          
        </div>
        <button className="bg-[#001b5e] text-white mt-4 p-4 rounded-lg w-full">Send Message</button>
      </form>
    </div>
  );
};

export default Contacts;
