import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Popup from 'reactjs-popup'
import {CgWebsite} from 'react-icons/cg'
import {BsGithub} from 'react-icons/bs'
import '../positions.css'

function ProjectCards(props) {
  const truncatedDescriptionFnc = description => {
    if (description.length > 50) {
      return description.substring(0, 300) + '...'
    }
    return description
  }

  const truncatedDescription = truncatedDescriptionFnc(props.description)

  return (
    <div className="popup-main-container">
      <Popup
        modal
        trigger={
          <Card className="project-card-view" style={{cursor: 'pointer'}}>
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text style={{textAlign: 'justify'}}>
                {truncatedDescription}
              </Card.Text>
            </Card.Body>
          </Card>
        }
      >
        {close => (
          <div className="popup-content">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div className="popup-buttons">
              <Button
                variant="primary"
                href={props.ghLink}
                target="_blank"
                style={{marginLeft: '10px', marginTop: '10px'}}
              >
                <div className="position-btn-container">
                  <BsGithub /> &nbsp;
                  {props.isBlog ? 'Blog' : 'GitHub'}
                </div>
              </Button>
              {!props.isBlog && props.demoLink && (
                <Button
                  variant="primary"
                  href={props.demoLink}
                  target="_blank"
                  style={{marginLeft: '10px', marginTop: '10px'}}
                >
                  <div className="position-btn-container">
                    <CgWebsite /> &nbsp; {'Demo'}
                  </div>
                </Button>
              )}
              <Button
                variant="secondary"
                onClick={() => close()}
                style={{marginLeft: '10px', marginTop: '10px'}}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default ProjectCards
