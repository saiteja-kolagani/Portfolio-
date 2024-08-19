import {useState, useEffect} from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import CertificateCard from './CertificateCard'

import './Certifications.css'

const Certifications = () => {
  const [certificates, viewCertificate] = useState([])

  useEffect(() => {
    fetch('/certifications.json')
      .then(res => res.json())
      .then(data => {
        viewCertificate(data)
      })
  }, [])

  const settings = {
    dots: true,
    infinite: false,
    initialSlide: 0,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="certs-container">
      <Slider {...settings}>
        {certificates.map((cert, i) => (
          <CertificateCard key={i} cert={cert} />
        ))}
      </Slider>
    </div>
  )
}

export default Certifications
