import React from "react";
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";

const FooterLeft = () => {
  return (
    <div className="flex flex-col gap-4 mb-6 md:mb-0">
      <div className="flex">
        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
        <div>
          <p>Indra Colony Ramnagar.</p>
          <p>Uttarakhand, India</p>
        </div>
      </div>
      <strong>
        <div className="flex">
          <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />

          <h4>+91 8755855465</h4>
        </div>
      </strong>
      <strong>
        <div className="flex">
          <FaMailBulk
            size={20}
            style={{ color: "#fff", marginRight: "2rem" }}
          />
          <h4>faizansiddiquirmr@gmail.com</h4>
        </div>
      </strong>
    </div>
  );
};

export default FooterLeft;
