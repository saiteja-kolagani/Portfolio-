import {Container, Row, Col} from 'react-bootstrap'
import Tilt from 'react-parallax-tilt'
import {AiFillGithub} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsTwitterX} from 'react-icons/bs'

import '../positions.css'

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{fontSize: '2.6em'}}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and, believe it or not, I've
              actually learned a thing or two along the way! 😅
              <br />
              <br />
              Fluent in classics like
              <i>
                <b className="purple"> Python and Javascript. </b>
              </i>
              <br />
              <br />I dive headfirst into building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{' '}
                <b className="purple">Machine Learning.</b>
              </i>
              <br />
              <br />
              Whenever possible, I channel my passion into developing cool stuff
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {' '}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
                &nbsp; Because who doesn’t love a little React magic in their
                life?
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar ">
            <Tilt>
              <div className="my-image-container">
                <img
                  src="https://res.cloudinary.com/dmy1fpyxm/image/upload/v1719823954/1000052942-photoaidcom-cropped_mqolhz.png"
                  className="img-fluid-my-image img-fluid my-image"
                  alt="avatar"
                />
              </div>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/saiteja-kolagani"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/SaitejaKolagani"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <BsTwitterX />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sai-teja-kolagani/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2
