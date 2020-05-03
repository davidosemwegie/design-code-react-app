import React from "react"
import styled from "styled-components"
import Wave from "./wave"

const StatsGroup = styled.div``

const StatsTitleSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 600px;
  margin: 0 auto;
`

const StatsTitleGroup = styled.div`
  text-align: center;
  padding: 50px;
`

const StatsTitleLeft = styled.h1`
  font-size: 200px;
  margin: 0;
  padding: 0;
  background: linear-gradient(104deg, #852f56 0%, #e84378 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const StatsTextLeft = styled.p`
  margin: 0;
  padding: 0;
  background: linear-gradient(104deg, #852f56 0%, #e84378 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
`

const StatsTitleRight = styled.h1`
  font-size: 200px;
  margin: 0;
  padding: 0;
  background: linear-gradient(104deg, #e3544e 0%, #e3544e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const StatsTextRight = styled.p`
  margin: 0;
  padding: 0;
  background: linear-gradient(104deg, #e3544e 0%, #e3544e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
`

const StatsImageGroup = styled.div`
  background: url(${props => props.image});
  height: 500px;
  background-size: cover;
  position: relative;
  /* display: flexbox;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
`

const StatsImageTextGroup = styled.div`
  height: 100%;
  display: flexbox;
  justify-content: center;
  align-items: center;
`

const StatsImageText = styled.p`
  font-size: 60px;
  font-weight: bold;
  background: linear-gradient(104deg, #f5a124 0%, #d82b63 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  justify-self: center;
  align-self: center;
`

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -6px;
`

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -6px;
  transform: rotate(180deg);
`

const Stats = props => (
  <StatsGroup>
    <StatsTitleSection>
      <StatsTitleGroup>
        <StatsTitleLeft>60</StatsTitleLeft>
        <StatsTextLeft>
          hours of video content <br /> that’s downloadable and captioned
        </StatsTextLeft>
      </StatsTitleGroup>
      <StatsTitleGroup>
        <StatsTitleRight>4</StatsTitleRight>
        <StatsTextRight>
          languages supported.
          <br /> English, Chinese, French, Spanish.
        </StatsTextRight>
      </StatsTitleGroup>
    </StatsTitleSection>
    <StatsImageGroup image={props.image}>
      <WaveTop>
        <Wave />
      </WaveTop>

      <StatsImageTextGroup>
        <StatsImageText>
          Design for everyone. <br />
          Coding for designers.
        </StatsImageText>
      </StatsImageTextGroup>

      <WaveBottom>
        <Wave />
      </WaveBottom>
    </StatsImageGroup>
  </StatsGroup>
)

export default Stats
