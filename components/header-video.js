import styled from 'styled-components'

const Header = styled.header`
  overflow: hidden;
`

const HeaderVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: calc(100vh - 50px);
  display: block;
  background-color: ${props => props.theme.primary};
`

const HeaderOverlay = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgb(205, 19, 56);
  background: linear-gradient(
    to top,
    rgba(205, 19, 56, 0.8) 0%,
    rgba(86, 16, 35, 0.9) 40%,
    rgba(86, 16, 35, 0.9) 60%,
    rgba(205, 19, 56, 0.8) 100%
  );
`

const HeaderTitle = styled.h1`
  color: ${props => props.theme.primary};
  font-size: 100px;
  margin: 0;
  padding: 0;
  text-align: center;
`

const HeaderSubTitle = styled.h2`
  color: #fff;
  font-size: 80px;
  margin: -20px 0 0 0;
  padding: 0;
  line-height: 0.8;
  text-align: center;
`

export default ({ video }) => (
  <Header>
    <HeaderVideo
      preload="true"
      autoPlay="autoplay"
      loop="loop"
      muted="true"
      poster="/static/images/red-feet-symbol.svg"
    >
      <source src={video.mov.url} type="video/mov" />
      <source src={video.mp4.url} type="video/mp4" />
    </HeaderVideo>

    <HeaderOverlay>
      <HeaderTitle>#GO</HeaderTitle>
      <HeaderSubTitle>RED FEET</HeaderSubTitle>
    </HeaderOverlay>
  </Header>
)
