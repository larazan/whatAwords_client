import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";
import "./styles.css";

const AudioPlayer = ({ tracks }) => {
  // State
  const [time, setTime] = useState(0);
  const [seek, setSeek] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const actColor = "#00aeb0";

  // Destructure for conciseness
  const { title, artist, color, image, audioSrc } = tracks[trackIndex];

  // Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  const { duration } = audioRef.current;

  console.log(duration);
  console.log(trackProgress);

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";

  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    document.getElementById("card").style.setProperty(actColor, color);
  }, [trackIndex, color]);

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

    setSeek(() => {
        const date = new Date(trackProgress * 1000)
        const hh = date.getUTCHours()
        const mm = date.getUTCMinutes()
        const ss = pad(date.getUTCSeconds())
        if (hh) {
            return `${hh}:${pad(mm)}:${ss}`
          }
          return `${mm}:${ss}`
    })
}, [duration, trackProgress, pad])

  return (
    <>
      {/* <main>
        <div className="px-8 z-9 md:container md:mx-auto md:px-8">
          <div className="mt-5 mb-20 flex flex-wrap -m-4 "> */}
            <div
              className={`flex md:flex-shrink-0 p-2 md:p-2 color-backdrop ${
                isPlaying ? "playing" : "idle"
              } relative overflow-hidden rounded shadow-lg`}
              id="card"
            >
              <div className="flex flex-col items-center p-2 mb-4">
                <img
                  className="w-52 h-52 mb-8 rounded-md shadow-lg"
                  src="https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg"
                  alt={`track artwork for ${title} by ${artist}`}
                />

                <p className="font-sans text-white">{title}</p>
                <h3 className="mb-3 text-xl font-medium text-white">
                  {artist}
                </h3>

                <AudioControls
                  isPlaying={isPlaying}
                  onPrevClick={toPrevTrack}
                  onNextClick={toNextTrack}
                  onPlayPauseClick={setIsPlaying}
                />
                <input
                  type="range"
                  value={trackProgress}
                  step="1"
                  min="0"
                  max={duration ? duration : `${duration}`}
                  className="progress"
                  onChange={(e) => onScrub(e.target.value)}
                  onMouseUp={onScrubEnd}
                  onKeyUp={onScrubEnd}
                  style={{ background: trackStyling }}
                />
                <div className="absolute bottom-5 right-4 text-xs font-sans text-white">{seek}/{time}</div>
              </div>
              
            </div>
          {/* </div>
        </div>
      </main> */}
    </>
  );
};

export default AudioPlayer;
