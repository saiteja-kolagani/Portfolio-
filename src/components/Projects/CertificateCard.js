import './Certifications.css'

const CertificateCard = ({cert}) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <a href={cert.link} target="__blank">
          <figure>
            <img
              src={cert.image}
              alt={cert.name}
              className="hover:scale-105 transistion-all duration-200 md:h-72"
            />
          </figure>
        </a>
        <div className="card-body">
          <h2 className="card-title card-title-font">{cert.name}</h2>
        </div>
      </div>
    </div>
  )
}

export default CertificateCard
