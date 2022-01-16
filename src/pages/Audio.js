import React from 'react'
import AudioPlayer from '../components/AudioNew/AudioPlayer'

import { tracks } from '../assets/data/tracks'

const Audio = () => {
    return (
        <>
            <AudioPlayer tracks={tracks} />
        </>
    )
}

export default Audio
