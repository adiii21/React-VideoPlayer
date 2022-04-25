import { Image } from '../ui/elements'

const VideoDetails = ({ isWatched, title, description}) => {
    return(
        <div>
            {isWatched
                ?
                <Image
                    src="assets/image/ok.png" height={'42px'} alt="ok"
                / >
                :
                <Image 
                    src="assets/image/nok.jng" height={'42px'} alt="nok"
                />    
            }
            <h1>{title}</h1>
            <hr />
            <h3>{description}</h3>
        </div>
    );
}

export default VideoDetails;