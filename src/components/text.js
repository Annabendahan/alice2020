import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Text = props => (
  <div>
    <div className="text">
      <div className="part1">
        <h4> {props.date}</h4>
        <h4> DESIGNER & PATTERN MAKER</h4>
      </div>
      <h3> {props.title} </h3>
      <p> {props.desc}</p>
      <h4>
        {props.t1} - <b>{props.n1}</b>
      </h4>
      <h4>
        {props.t2} - <b>{props.n2}</b>
      </h4>
      <h4>
        {props.t3} - <b>{props.n3}</b>
      </h4>
      <h4>
        {props.t4} - <b>{props.n4}</b>
      </h4>
      <h4>
        {props.t5} <b>{props.n5}</b>
      </h4>
      <h4>
        {props.t6} <b>{props.n6}</b>
      </h4>
      <h4>
        {props.t7} <b>{props.n7}</b>
      </h4>
    </div>
  </div>
)

export default Text
