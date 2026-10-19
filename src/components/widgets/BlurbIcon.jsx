const BlurbIcon = ({is_img, icon, title, description}) => {
    return (
        <div className="blurb-icon__container grid">
            <div className="blurb-icon">
                {is_img ? <img src={icon} alt=""/> : icon}
            </div>
            <div className="blurb-title">{title}</div>
            <div className="blurb-description">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default BlurbIcon;