import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map((video)=>{
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
    });
    //array de videos que queremos mostrar como html
    return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;