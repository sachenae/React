import React from 'react'

const VideoList = (props) => {

    return (
        <ul className='col-md-4 list-item'>
        {props.videos.length}
        </ul>

    )
}
export default VideoList
