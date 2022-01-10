import React, { useEffect, useState } from 'react';
import ReactPlayer from "react-player";
import Duration from '../components/Player/Duration';

const Player = () => {
    const [duration, setDuration] = useState(0);
    const [time, setTime] = useState(0);
    const [seek, setSeek] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);
    const [playing, setPlaying] = useState(false);

    const handleProgress = (state) => {
        console.log('onProgress', state)
        setSeek(state.played)
        setTrackProgress(state.playedSeconds)
    }

    console.log(seek);

    const handleDuration = (duration) => {
        setDuration(duration);
    }

    console.log(duration);

    const handlePlay = () => {
        setPlaying(true)
    }

    const handlePause = () => {
        setPlaying(false)
    }

    const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
    
    const trackStyling = `
        -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
    `;

    console.log(trackStyling);
    
    function pad (string) {
        return ('0' + string).slice(-2)
    }

    useEffect(() => {
        setTime(() => {
            const date = new Date(duration * 1000)
            const hh = date.getUTCHours()
            const mm = date.getUTCMinutes()
            const ss = pad(date.getUTCSeconds())
            if (hh) {
                return `${hh}:${pad(mm)}:${ss}`
              }
              return `${mm}:${ss}`
        })
    }, [duration, pad])

    return (
        <div>
            <h3>Audio player in React - <a href="https://www.cluemediator.com">Clue Mediator</a></h3>
            <ReactPlayer
                url="http://localhost:3002/audio/MORNING_MOTIVATION.mp3"
                width="400px"
                height="50px"
                playing={playing}
                controls={true}
                onPlay={handlePlay}
                onPause={handlePause}
                onProgress={handleProgress}
                onDuration={handleDuration}
            />
            <div>
                {time}
            </div>

            <div className={`color-boxPlayer ${playing ? 'playing' : 'paused'} h-60 w-60 bg-green-500`}></div>
        </div>
    )
}

export default Player
