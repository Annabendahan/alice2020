import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import video from "../images/sitealice/backstage.mp4"
import logo from "../images/sitealice/12H50.png"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="video">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="pres">
        <div className="top">
          <img src={logo} alt="logo" />
          <h4> alicethonnier@live.fr</h4>
        </div>
        <p>
          {" "}
          Alice Thonnier designer parisienne passionnée de mode et
          particulierement par le modélisme depuis toujours réalise ses études à
          Esmod Paris de 2015 à 2018. <br /> Elle commence à faire ses preuves
          durant un stage de modéliste chez Bleu Comme Gris, marque de luxe pour
          enfant en 2016. En 2017 elle lance sa marque 12:50. Sa marque vise un
          vestiaire collectif unisexe au style casualwear. Son objectif est de
          pouvoir habiller les femmes et les hommes avec les mêmes vêtements en
          obtenant un volume différent. Oversizes chez la femme et ajustés chez
          l’homme. Diplomée en 2018 grâce à sa collection Heures de Pointe elle
          est repérée par la Galerie Lyncée qui lui propose d’exposer ses
          collections lors d’expositions temporaires. <br /> A la suite de son
          diplôme Alice effectue un stage de modélisme chez Balzac Paris et
          trouve ensuite un emploi dans le groupe GPE (Sergent Major , DPAM,
          Natalys). Durant sont temps libre elle continue tout de même de créer
          des collections.{" "}
        </p>
      </div>
    </div>
  </Layout>
)

export default About
