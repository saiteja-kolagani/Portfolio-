import {Col, Row} from 'react-bootstrap'
import {FaWindows, FaGithub} from 'react-icons/fa'
import {TbBrandVscode} from 'react-icons/tb'
import {DiLinux} from 'react-icons/di'
import {SiPostman, SiRender, SiFirebase} from 'react-icons/si'

import '../positions.css'

function Toolstack() {
  return (
    <Row style={{justifyContent: 'center', paddingBottom: '50px'}}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-container">
          <FaWindows style={{marginBottom: '8px'}} />
          <h4 style={{fontSize: '16px'}} className="purple">
            Windows
          </h4>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-container">
          <DiLinux style={{marginBottom: '8px'}} />
          <h4 style={{fontSize: '16px'}} className="purple">
            Linux
          </h4>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-container">
          <TbBrandVscode style={{marginBottom: '8px'}} />
          <h4 style={{fontSize: '16px'}} className="purple">
            VS Code
          </h4>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-container">
          <SiPostman style={{marginBottom: '8px'}} />
          <h4 style={{fontSize: '16px'}} className="purple">
            Postman
          </h4>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-container">
          <SiRender style={{marginBottom: '8px'}} />
          <h4 style={{fontSize: '16px'}} className="purple">
            Render
          </h4>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-container">
          <SiFirebase style={{marginBottom: '8px'}} />
          <h4 style={{fontSize: '16px'}} className="purple">
            Firebase
          </h4>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-container">
          <FaGithub style={{marginBottom: '8px'}} />
          <h4 style={{fontSize: '16px'}} className="purple">
            GitHub
          </h4>
        </div>
      </Col>
    </Row>
  )
}

export default Toolstack
