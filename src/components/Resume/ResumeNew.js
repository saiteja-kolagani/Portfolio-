import {Container, Row} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import {AiOutlineDownload} from 'react-icons/ai'

import '../positions.css'

function ResumeNew() {
  return (
    <div className="resume-bg-container">
      <Container fluid className="resume-section">
        <Row style={{justifyContent: 'center', position: 'relative'}}>
          <h1 className="purple" style={{fontSize: '20px'}}>
            Resume
          </h1>
          <Button
            variant="primary"
            href="https://drive.google.com/file/d/1cRLSLZCb_QIEeu1iZOr3NdJLiDmHXqqt/view?usp=sharing"
            target="_blank"
            style={{maxWidth: '250px'}}
          >
            <div className="download-btn-container">
              <AiOutlineDownload />
              &nbsp;Download
            </div>
          </Button>
        </Row>
        <Row
          style={{
            justifyContent: 'center',
            position: 'relative',
            margin: '50px',
          }}
        >
          <h1 className="purple" style={{fontSize: '20px'}}>
            Curriculum Vitae(CV)
          </h1>
          <Button
            variant="primary"
            href="https://drive.google.com/file/d/1RpDFKUpiafjOiCNMPtdTtCFgmlP3re9U/view?usp=sharing"
            target="_blank"
            style={{maxWidth: '250px'}}
          >
            <div className="download-btn-container">
              <AiOutlineDownload />
              &nbsp;Download
            </div>
          </Button>
        </Row>
      </Container>
    </div>
  )
}

export default ResumeNew
