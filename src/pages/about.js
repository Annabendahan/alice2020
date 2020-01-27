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
          <div className="socials">
            <a href="https://www.instagram.com/alice_thonnier/">
              <svg
                width="20"
                height="20"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.1119 0H14.888C6.67861 0 0 6.67861 0 14.888V40.1123C0 48.3213 6.67861 54.9999 14.888 54.9999H40.1123C48.3213 54.9999 54.9999 48.3213 54.9999 40.1123V14.888C54.9999 6.67861 48.3213 0 40.1119 0V0ZM51.7756 40.1123C51.7756 46.5434 46.5434 51.7756 40.1119 51.7756H14.888C8.45652 51.7756 3.22433 46.5434 3.22433 40.1123V14.888C3.22433 8.45652 8.45652 3.22433 14.888 3.22433H40.1123C46.5434 3.22433 51.7756 8.45652 51.7756 14.888V40.1123Z"
                  fill="#263654"
                />
                <path
                  d="M27.5 12.4614C19.2076 12.4614 12.4614 19.2076 12.4614 27.5C12.4614 35.7925 19.2076 42.5387 27.5 42.5387C35.7925 42.5387 42.5387 35.7925 42.5387 27.5C42.5387 19.2076 35.7925 12.4614 27.5 12.4614V12.4614ZM27.5 39.3143C20.9859 39.3143 15.6858 34.0146 15.6858 27.5C15.6858 20.9859 20.9859 15.6858 27.5 15.6858C34.0146 15.6858 39.3143 20.9859 39.3143 27.5C39.3143 34.0146 34.0146 39.3143 27.5 39.3143V39.3143Z"
                  fill="#263654"
                />
                <path
                  d="M42.8981 7.12036C40.4475 7.12036 38.4543 9.11396 38.4543 11.5641C38.4543 14.0147 40.4475 16.0082 42.8981 16.0082C45.3486 16.0082 47.3422 14.0147 47.3422 11.5641C47.3422 9.11354 45.3486 7.12036 42.8981 7.12036ZM42.8981 12.7835C42.2259 12.7835 41.6787 12.2363 41.6787 11.5641C41.6787 10.8914 42.2259 10.3447 42.8981 10.3447C43.5707 10.3447 44.1179 10.8914 44.1179 11.5641C44.1179 12.2363 43.5707 12.7835 42.8981 12.7835Z"
                  fill="#263654"
                />
              </svg>
            </a>
            <a href="https://www.instagram.com/_indetails_/">
              <svg
                width="20"
                height="20"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.1119 0H14.888C6.67861 0 0 6.67861 0 14.888V40.1123C0 48.3213 6.67861 54.9999 14.888 54.9999H40.1123C48.3213 54.9999 54.9999 48.3213 54.9999 40.1123V14.888C54.9999 6.67861 48.3213 0 40.1119 0V0ZM51.7756 40.1123C51.7756 46.5434 46.5434 51.7756 40.1119 51.7756H14.888C8.45652 51.7756 3.22433 46.5434 3.22433 40.1123V14.888C3.22433 8.45652 8.45652 3.22433 14.888 3.22433H40.1123C46.5434 3.22433 51.7756 8.45652 51.7756 14.888V40.1123Z"
                  fill="#263654"
                />
                <path
                  d="M27.5 12.4614C19.2076 12.4614 12.4614 19.2076 12.4614 27.5C12.4614 35.7925 19.2076 42.5387 27.5 42.5387C35.7925 42.5387 42.5387 35.7925 42.5387 27.5C42.5387 19.2076 35.7925 12.4614 27.5 12.4614V12.4614ZM27.5 39.3143C20.9859 39.3143 15.6858 34.0146 15.6858 27.5C15.6858 20.9859 20.9859 15.6858 27.5 15.6858C34.0146 15.6858 39.3143 20.9859 39.3143 27.5C39.3143 34.0146 34.0146 39.3143 27.5 39.3143V39.3143Z"
                  fill="#263654"
                />
                <path
                  d="M42.8981 7.12036C40.4475 7.12036 38.4543 9.11396 38.4543 11.5641C38.4543 14.0147 40.4475 16.0082 42.8981 16.0082C45.3486 16.0082 47.3422 14.0147 47.3422 11.5641C47.3422 9.11354 45.3486 7.12036 42.8981 7.12036ZM42.8981 12.7835C42.2259 12.7835 41.6787 12.2363 41.6787 11.5641C41.6787 10.8914 42.2259 10.3447 42.8981 10.3447C43.5707 10.3447 44.1179 10.8914 44.1179 11.5641C44.1179 12.2363 43.5707 12.7835 42.8981 12.7835Z"
                  fill="#263654"
                />
              </svg>
            </a>
            <p> alicethonnier@live.fr</p>
          </div>
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
