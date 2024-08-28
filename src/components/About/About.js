import {Container, Row, Col} from 'react-bootstrap'
import Particle from '../Particle'
import Github from './Github'
import Techstack from './Techstack'
import Aboutcard from './AboutCard'
import Toolstack from './Toolstack'

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{justifyContent: 'center', padding: '10px'}}>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px',
            }}
          >
            <h1 style={{fontSize: '2.1em', paddingBottom: '20px'}}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{paddingTop: '120px', paddingBottom: '50px'}}
            className="about-img"
          >
            <img
              src="https://res.cloudinary.com/dmy1fpyxm/image/upload/v1719835874/Pngtree_vector_programming_structure_diagram_5400823_dij3gi.png"
              alt="about"
              className="img-fluid img-fluid-about"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Tools </strong> I have using
        </h1>
        <Toolstack />
        {/* <Github /> */}
      </Container>
    </Container>
  )
}

export default About
