import React from "react";
import { Card } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
const ChooseCraftsman = () => {
  const chooseCarftsman = [
    {
      img: "https://www.travaux.com/images/sr/small/c0850481-3622-4b61-86d9-4d416542edab.jpg",
      title: "60 m²; Tailler les arbres, Taillehaie et abatt...",
      headerContent: "Le projet de chantier a été réalisé par JEROME FIQUET",
      review: "",
      content:
        "travail conforme au devis et équipe intervenante au Top. Un petit 4 pour la communication car nous avons demandé de nous recontacter pour d travaux et un mois après ce nest toujours pas fait.",
    },

    {
      img: "https://www.travaux.com/images/sr/small/c8ce1429-ff21-4e8e-9283-5baa4f848bb9.jpg",
      title: "Refaire une clôture en maçonnerie; Ex...",
      headerContent: "Le projet de chantier a été réalisé par JEROME FIQUET",
      review: "",
      content:
        "travail conforme au devis et équipe intervenante au Top. Un petit 4 pour la communication car nous avons demandé de nous recontacter pour d travaux et un mois après ce nest toujours pas fait.",
    },

    {
      img: "https://www.travaux.com/images/sr/small/84a93af6-df47-4c95-9283-ac3d625994c9.jpg",
      title: "Rénovation complète; 2 pièces; Massif sol",
      headerContent: "Le projet de chantier a été réalisé par JEROME FIQUET",
      review: "",
      content:
        "travail conforme au devis et équipe intervenante au Top. Un petit 4 pour la communication car nous avons demandé de nous recontacter pour d travaux et un mois après ce nest toujours pas fait.",
    },
  ];
  return (
    <div style={{ backgroundColor: "#008cd4" }} className="py-5 ">
      <div className="container">
        <h1 className="py-5 text-white">
          Pour vous aider à choisir le bon artisan
        </h1>
        <div className="row">
          {chooseCarftsman.map(({ title, img, content, headerContent }) => (
            <div className="col-md-4" key={title}>
              <Card style={{ borderRadius: "10px",marginBottom:'20px' }}>
                <div className="header d-flex align-item-center p-2 gap-2">
                  <div className="card_image">
                    <img
                      src={img}
                      alt=""
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "10%",
                      }}
                    />
                  </div>
                  <div className="card_header">
                    <h6 className="text-primary">{title}</h6>
                  </div>
                </div>
                <Card.Body>
                  <p className="text-secondary">"{headerContent}"</p>
                  <Card.Text>" {content}"</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <div className="footer_content pt-4 d-flex  gap-3">
                      <p className="text-white" style={{fontSize:'30px'}}> <FaUserAlt /></p>
         <p className="text-white"> Les avis sur Travaux.com sont rédigés par des <br />
          particuliers comme vous.</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseCraftsman;
