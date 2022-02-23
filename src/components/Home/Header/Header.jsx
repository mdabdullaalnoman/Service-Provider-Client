import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container header_content">
      <div className="row py-5 mt-4">
        <h1>Trouvez un artisan près de chez vous</h1>
      </div>
      <div className="input_section">
        <h5 className="text-white py-2 " style={{ fontSize: "22px" }}>
          {" "}
          Saisissez votre projet
        </h5>
        <input
          type="text"
          name="project"
          id=""
          className="form-control"
          placeholder="Par exemple:Peinture"
          required
        />
        <button className="btn text-white">Trouver un artisan</button>
        <h6 className="text-white py-5 my-5 " >
          <Link to="/professionnel/inscription/nouvelle" className="text-white py-5">
            {" "}
            <BsFillArrowRightCircleFill style={{fontSize:'25px',color:'#e5cb4e'}} /> S'inscrire en tant que professionnel{" "}
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default Header;
