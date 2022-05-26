import './Background.css'

const Background = ({bgImg, marginTop}) => {
    return (
        <div className="Background" style={{backgroundImage : `url(${bgImg})`, marginTop : marginTop}}></div>
    )
}

export default Background

