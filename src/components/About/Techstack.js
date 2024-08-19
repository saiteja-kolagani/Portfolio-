import {Col, Row} from 'react-bootstrap'
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiSqllite,
  DiBootstrap,
} from 'react-icons/di'

import {
  SiExpress,
  SiTailwindcss,
  SiPowershell,
  SiNextdotjs,
} from 'react-icons/si'

import '../positions.css'

function Techstack() {
  return (
    <Row style={{justifyContent: 'center', paddingBottom: '50px'}}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-container">
          <DiMongodb style={{marginBottom: '8px'}} />
          <h4 style={{fontSize: '16px'}} className="purple">
            MongoDB
          </h4>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-container">
          <SiExpress style={{marginBottom: '8px'}} />
          <h4 style={{fontSize: '16px'}} className="purple">
            Express JS
          </h4>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-container">
          <DiReact style={{marginBottom: '8px'}} />
          <h4 style={{fontSize: '16px'}} className="purple">
            React JS
          </h4>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-container">
          <DiNodejs style={{marginBottom: '8px'}} />
          <h4 style={{fontSize: '16px'}} className="purple">
            Node JS
          </h4>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-container">
          <DiJavascript1 style={{marginBottom: '8px'}} />
          <h4 style={{fontSize: '16px'}} className="purple">
            JavaScript
          </h4>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-container">
          <DiPython style={{marginBottom: '8px'}} />
          <h4 style={{fontSize: '16px'}} className="purple">
            Python
          </h4>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-container">
          <DiSqllite style={{marginBottom: '8px'}} />
          <h4 style={{fontSize: '16px'}} className="purple">
            SQLite
          </h4>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-container">
          <DiBootstrap style={{marginBottom: '8px'}} />
          <h4 style={{fontSize: '16px'}} className="purple">
            Bootstrap
          </h4>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-container">
          <SiTailwindcss style={{marginBottom: '8px'}} />
          <h4 style={{fontSize: '16px'}} className="purple">
            Tailwind CSS
          </h4>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-container">
          <DiGit style={{marginBottom: '8px'}} />
          <h4 style={{fontSize: '16px'}} className="purple">
            Git
          </h4>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-container">
          <SiPowershell style={{marginBottom: '8px'}} />
          <h4 style={{fontSize: '16px'}} className="purple">
            Shell Scripting
          </h4>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-container">
          <SiNextdotjs style={{marginBottom: '8px'}} />
          <h4 style={{fontSize: '16px'}} className="purple">
            Next JS
          </h4>
        </div>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-container">
          <SiRedux style={{marginBottom: '8px'}} />
          <h4 style={{fontSize: '16px'}} className="purple">
            Redux
          </h4>
        </div>
      </Col> */}
    </Row>
  )
}

export default Techstack
