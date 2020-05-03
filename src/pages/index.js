import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card"
import Section from "../components/section"
import Wave from "../components/wave"
import staticdata from "../../staticdata.json"
import Cell from "../components/cell"
import styled from "styled-components"
import Stats from "../components/stats"

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Learn to <br /> design and code <span>modern apps</span>
        </h1>
        <p>
          Complete courses about the best tools and design systems. Prototype
          and build apps with React and Swift.
        </p>
        <Link to="/page-2">Watch the video</Link>
        <div className="Logos">
          <img src={require("../images/logo-sketch.png")} width="50px" />
          <img src={require("../images/logo-figma.png")} width="50px" />
          <img src={require("../images/logo-studio.png")} width="50px" />
          <img src={require("../images/logo-framer.png")} width="50px" />
          <img src={require("../images/logo-react.png")} width="50px" />
          <img src={require("../images/logo-xcode.png")} width="50px" />
          <img src={require("../images/logo-swift.png")} width="50px" />
        </div>
        {/* <TrialGroup>
          <TrialButton>Try for free</TrialButton>
          <TrialSubtitle>Get 7 days free trial</TrialSubtitle>
          <TrialText>
            Then, it’s $9 per month, billed annually. Cancel anytime. No soul
            required. Free upgrade from version 2.
          </TrialText>
        </TrialGroup> */}
        <div className="ActionGroup">
          <button>Try for free</button>
          <p className="subTitle">Get 7 days free trial</p>
          <p>
            Then, it’s $9 per month, billed annually. Cancel anytime. No soul
            required. Free upgrade from version 2.
          </p>
        </div>
      </div>
      <Wave />
    </div>
    <div className="Cards">
      <h2>12 courses, more coming.</h2>
      <div className="CardGroup">
        <Card
          title="Design Systems"
          text="10 sections"
          image={require("../images/wallpaper.jpg")}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("../images/wallpaper2.jpg")}
        />
        <Card
          title="Video Editing with Screenflow"
          text="6 sections"
          image={require("../images/wallpaper3.jpg")}
        />
        <Card
          title="Sound Design with Cubase"
          text="5 sections"
          image={require("../images/wallpaper3.jpg")}
        />
        <Card
          title="Design Systems"
          text="10 sections"
          image={require("../images/wallpaper.jpg")}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("../images/wallpaper2.jpg")}
        />
        <Card
          title="Sound Design"
          text="5 sections"
          image={require("../images/wallpaper3.jpg")}
        />
        <Card
          title="ARKit 2"
          text="12 sections"
          image={require("../images/wallpaper3.jpg")}
        />
        <Card
          title="Design Systems"
          text="10 sections"
          image={require("../images/wallpaper.jpg")}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("../images/wallpaper2.jpg")}
        />
        <Card
          title="Sound Design"
          text="5 sections"
          image={require("../images/wallpaper3.jpg")}
        />
        <Card
          title="ARKit 2"
          text="12 sections"
          image={require("../images/wallpaper3.jpg")}
        />
      </div>
    </div>
    <Stats image={require("../images/wallpaper4.jpg")} />
    <Section
      image={require("../images/wallpaper2.jpg")}
      logo={require("../images/logo-react.png")}
      title="React for Designers"
      text="Learn how to build a modern site suing React and the most efficient libraries, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with netlify"
    />

    <SectionCaption>12 Sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell key={cell.title} title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup>
  </Layout>
)

export default IndexPage
