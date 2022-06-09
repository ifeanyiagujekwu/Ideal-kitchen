import React from 'react';

export default function Contactpage() {
  return (
    <div className="p-40" id="contactpage">
      <div className="text-center font-medium p-10">Contact Us</div>
      <div>
        <form className="flex flex-col px-80 ">
          <label >First name</label>
          <input className="rounded-md shadow-md" type="text" />

          <label>Last name</label>
          <input className="rounded-md shadow-md" type="text" />
          
          <label>E-mail</label>
          <input className="rounded-md shadow-md" type="text" />

          <label>Message</label>
          <textarea className="rounded-md shadow-md" class="form-control" />

          <button className="bg-black text-white rounded-md shadow-md m-20 px-0">Submit</button>
          
        </form>
      </div>
    </div>
  );
}
