// import React from "react";
// import "../style/ContactUs.css";
// const ContactUs = () => {
//   return (
//     <div id="contact" className="contact">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="titlepage">
//               <h2 id="contactus">Contact Us</h2>
//               {/* <span>
//                 There are many variations of passages of Lorem Ipsum available,
//                 but the{" "}
//               </span> */}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12 ">
//             <form className="main_form ">
//               <div className="row">
//                 <div className="col-md-12 ">
//                   <input
//                     className="form_contril"
//                     placeholder="Name "
//                     type="text"
//                     name="Name "
//                   />
//                 </div>
//                 <div className="col-md-12">
//                   <input
//                     className="form_contril"
//                     placeholder="Phone Number"
//                     type="text"
//                     name=" Phone Number"
//                   />
//                 </div>
//                 <div className="col-md-12">
//                   <input
//                     className="form_contril"
//                     placeholder="Email"
//                     type="text"
//                     name="Email"
//                   />
//                 </div>
//                 <div className="col-md-12">
//                   <textarea
//                     className="textarea"
//                     placeholder="Message"
//                     type="text"
//                     name="Message"
//                   ></textarea>
//                 </div>
//                 <div className="col-sm-12">
//                   <button className="send_btn">Send</button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

import React from "react";
import "../style/ContactUs.css";
import axios from "axios";
import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post("http://localhost:3000/submit-form", {
        name,
        phoneNumber,
        email,
        message,
      });

      if (result.data.success) {
        alert("Form submitted successfully!");
        // Reset form fields if needed
        setName("");
        setPhoneNumber("");
        setEmail("");
        setMessage("");
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2 id="contactus">Contact Us</h2>
              {/* <span>
                There are many variations of passages of Lorem Ipsum available,
                but the{" "}
              </span> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            <form className="main_form " onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12 ">
                  <input
                    className="form_contril"
                    placeholder="Name "
                    type="text"
                    name="Name "
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <input
                    className="form_contril"
                    placeholder="Phone Number"
                    type="text"
                    name=" Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <input
                    className="form_contril"
                    placeholder="Email"
                    type="text"
                    name="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="textarea"
                    placeholder="Message"
                    type="text"
                    name="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="col-sm-12">
                  <button className="send_btn">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;