import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Text from "../components/text"

import HDP7 from "../images/sitealice/HDP7.jpg"
import N1 from "../images/sitealice/N1.png"
import BX1 from "../images/sitealice/BX1.png"
import Q1 from "../images/sitealice/Q1.png"

class Collections extends Component {
  state = {
    collection: 0,
  }

  setCollection = coll => {
    this.setState({ collection: coll })
  }
  render() {
    let img = <img src={HDP7} alt="pic" className="picture" />

    if (this.state.collection === 1) {
      img = <img src={HDP7} alt="pic" className="picture" />
    } else if (this.state.collection === 2) {
      img = <img src={BX1} alt="pic" className="picture" />
    } else if (this.state.collection === 3) {
      img = <img src={N1} alt="pic" className="picture" />
    } else if (this.state.collection === 4) {
      img = <img src={Q1} alt="pic" className="picture" />
    }
    return (
      <Layout>
        <div className="collections">
          <div className="choices">
            <div className="coll">
              <div className="infos" onClick={() => this.setCollection(1)}>
                <h4>
                  HEURES DE POINTE - <span className="date">2018</span>
                </h4>
              </div>
              {this.state.collection == 1 ? (
                <div>
                  <Text
                    desc=" Heures de Pointe est une collection unisexe inspirée du métro aux Heures
        les plus fréquentées. Le concept de la collection est de fusionner des
        vêtements de personnes positionnées côte à côte pour obtenir des
        vêtements à pluri-apparence."
                    t1="DESIGNER"
                    n1="ALICE THONNIER"
                    t2="PHOTOGRAPHER"
                    n2="CARA PHOTOGRAPHIES"
                    t3="MODEL"
                    n3="MONIQUE ANDREW / ARNAUD PAGNARO "
                    t4="MAKE UP"
                    n4="MARIA M ZOLA"
                    t5="STUDIO -"
                    n5="STUDIO VALMY"
                    link="/heures-de-pointe"
                  />
                </div>
              ) : null}
            </div>

            <div className="coll">
              <div className="infos" onClick={() => this.setCollection(2)}>
                <h4>
                  BANLIEUE X - <span className="date">2018</span>
                </h4>
              </div>
              {this.state.collection == 2 ? (
                <div>
                  <Text
                    desc="What do young people do in a post-apocalyptic world, where perfection is not wanted anymore and borders are abolished? They start creating. They do fashion. They dance. They put their forces together and build something new. A story about a group of friends that is not afraid of the future. The timeless Banlieue serves as setting, under the artistic direction of Oana von Rave – in exclusive for The Flow House. - Karim Coppola"
                    t1="DESIGNER"
                    n1="ALICE THONNIER - HELOISE SAUVET - MARINE FOURNIER - ROXANE DE KORODY"
                    t2="PHOTOGRAPHER"
                    n2=" JEAN MARC JALEEL"
                    t3="STARRING"
                    n3="YAMINE KHIAR - PAUL HUET - HELMY EL WAKIL (WILLIAMS MANAGEMENT) - STEPHANIE ARNAUD - JULIENNE I - LAURA UNG "
                    t4="HAIR & MAKE UP"
                    n4="ANTOINE L'HEBRELLEC - CHLOÉ BADEAU"
                    t5="DANCERS -"
                    n5="PERKINS KELLEY - MR BROMA"
                    t6="STYLED BY -"
                    n6="OANA VON RAVEN"
                    t7="BRANDS -"
                    n7="ALICE THONNIER - ASOS - LA PERLA - AMERICAN APPAREL - NIKE - DR MARTENS - TOD'S - ACNE STUDIO - VINTAGE ARMY  IN EXCLUSIVE FOR: THE FLOW HOUSE"
                    link="/banlieue-x"
                  />
                </div>
              ) : null}
            </div>

            <div className="coll">
              <div className="infos" onClick={() => this.setCollection(3)}>
                <h4>
                  NINA - <span className="date">2018</span>
                </h4>
              </div>
              {this.state.collection == 3 ? (
                <div>
                  <Text
                    t1="DESIGNER"
                    n1="ALICE THONNIER"
                    t2="PHOTOGRAPHER"
                    n2="GABRIELLE RIOUAH"
                    t3="MODEL"
                    n3="NINA STEIMEL "
                    t4="MAKE UP"
                    n4="CAROLINE MADISON"
                    link="/nina-collection"
                  />
                </div>
              ) : null}
            </div>

            <div className="coll">
              <div className="infos" onClick={() => this.setCollection(4)}>
                <h4>
                  KNICKS QUEENS - <span className="date">2018</span>
                </h4>
              </div>
              {this.state.collection == 4 ? (
                <div>
                  <Text
                    desc="Knicks Queens est une collection de mode inspirée du monde du basketball . Elle rappelle les couleurs de l’équipe des Knicks Queens, le bleu, le orange et le blanc. Le sweat en résille fait écho aux filets et aux grillages des terrains de basket de rue américains. Les poches rondes sur la veste et le pantalon rappellent la forme du ballon de basket."
                    t1="DESIGNER"
                    n1="ALICE THONNIER - HELOISE SAUVET - MARINE FOURNIER - ROXANE DE KORODY"
                    t2="PHOTOGRAPHER"
                    n2=" ROXANE DE KORODY"
                    t3="MODEL"
                    n3="ATHENA LISNYJ "
                    t4="PLACE"
                    n4="PIGALLE BASKETBALL"
                    link="knicks-queens"
                  />
                </div>
              ) : null}
            </div>
          </div>
          <div className="picture">{img}</div>
        </div>
      </Layout>
    )
  }
}

export default Collections
