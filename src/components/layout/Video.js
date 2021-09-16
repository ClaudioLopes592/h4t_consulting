import Paty from '../video/paty.mp4'
import styles from './Video.module.css'

const Video = () => {
    return (
        <div>
            <div>
                <video autoPlay loop muted
                style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: "-1"
                }}
                >
                <source src={Paty} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}

export default Video