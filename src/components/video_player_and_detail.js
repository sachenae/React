import React from 'react'

const VideoPlayer = ({vi}) => {
    const VideoID = vi.id.VideoId;
    const url = `https://www.youtube.com/embed/${VideoID}`;
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{vi.snippet.title}</div>
                <div>{vi.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoPlayer