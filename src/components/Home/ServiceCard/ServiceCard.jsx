import React from "react";
import { Card } from "react-bootstrap";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from "react-router-dom";
import plumbing from "../../../assets/images/tc-20-600w.avif";
import window from "../../../assets/images/tc-25-600w.avif";
import door from "../../../assets/images/tc-7-600w.avif";
const ServiceCard = () => {
  const serviceData = [
    {
      id: 1,
      serviceTitle: "Plomberie",
      icon: "https://www.travaux.com/static/svg-icons/plumbing.svg",
      description:
        "Vous voulez en savoir plus sur les travaux de plomberie ? Grâce à nos articles, nous pouvons vous donner",
      linkTitle: "Toutes les informations sur plomberie",
      img: plumbing,
      path: "/",
      subDescription: {
        title: "6244 plombiers ",
        path: "/",
        firstImage:
          "https://www.travaux.com/static/featured-services-service-pros/seasonal/fr/0/48ab622a-3ee9-42c6-969c-1b88a300dfae.jpg",
        secondImage:
          "https://www.travaux.com/static/featured-services-service-pros/seasonal/fr/0/300454a7-72ee-4820-beac-ec6b7e3bd3e0.jpg",
      },
    },
    {
      id: 2,
      serviceTitle: "Plomberie",
      icon: "https://www.travaux.com/static/svg-icons/plumbing.svg",
      description:
        "Vous voulez en savoir plus sur les travaux de plomberie ? Grâce à nos articles, nous pouvons vous donner",
      linkTitle: "Toutes les informations sur plomberie",
      img: window,
      path: "/",
      subDescription: {
        title: "6244 plombiers ",
        path: "/",
        firstImage:
          "https://www.travaux.com/static/featured-services-service-pros/seasonal/fr/0/48ab622a-3ee9-42c6-969c-1b88a300dfae.jpg",
        secondImage:
          "https://www.travaux.com/static/featured-services-service-pros/seasonal/fr/0/300454a7-72ee-4820-beac-ec6b7e3bd3e0.jpg",
      },
    },
    {
      id: 3,
      serviceTitle: "Plomberie",
      icon: "https://www.travaux.com/static/svg-icons/plumbing.svg",
      description:
        "Vous voulez en savoir plus sur les travaux de plomberie ? Grâce à nos articles, nous pouvons vous donner",
      linkTitle: "Toutes les informations sur plomberie",
      img: door,
      path: "/",
      subDescription: {
        title: "6244 plombiers ",
        path: "/",
        firstImage:
          "https://www.travaux.com/static/featured-services-service-pros/seasonal/fr/0/48ab622a-3ee9-42c6-969c-1b88a300dfae.jpg",
        secondImage:
          "https://www.travaux.com/static/featured-services-service-pros/seasonal/fr/0/300454a7-72ee-4820-beac-ec6b7e3bd3e0.jpg",
      },
    },
  ];
  return (
    <div className="container my-5 ">
      <h1>Soyez prêt pour l'hiver</h1>
      <div className="service_card row">
        {serviceData.map(({img,serviceTitle,icon,description,linkTitle,path}) => (
          <div className="col-md-4 py-3">
            <div className='card-item'>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title> <img src={icon} alt="" style={{width:'30px'}}/> {serviceTitle}</Card.Title>
                <Card.Text className="text-secondary">{description}</Card.Text>
                <p className="linkTab" ><Link to={path} className="text-primary"><AiOutlineArrowRight /> {linkTitle}</Link></p>
              </Card.Body>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
