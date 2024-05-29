import React, { useEffect } from "react";
import "./music.css"
import img from '../media/Covers-Vol.-1-Cover.jpg'
import audio from '../media/375405000-1-30232.mp3'

export default function Music(){
    let progress
    let audioControl
    let playButton

    useEffect(()=>{
        progress = document.getElementById('progress');
        audioControl = document.getElementById("audio-control")
        playButton = document.getElementsByClassName("play-circle")[1]

        audioControl.onloadedmetadata = function(){
        progress.max = audioControl.duration;
        progress.value = audioControl.currentTime;
        }
    }, [])

    function playPause(event){
        console.log(            audioControl.currentTime            )
        if(event.target.classList.contains("paused")){
            event.target.classList.remove("paused")
            event.target.innerText = "pause"
            audioControl.play()
        }else{
            event.target.classList.add("paused")
            event.target.innerText = "play_arrow"
            audioControl.pause()
        }
    }

    function setTimeOnProgressBar(){
        progress.value = audioControl.currentTime
    }

    function setTimeOnAudio(){
        audioControl.currentTime = progress.value
    }

    return(
        <div className="music-player">
            <nav>
            <div className="circle">
                <span className="material-symbols-outlined">arrow_back</span>
            </div>                
            <div className="circle">
                <span className="material-symbols-outlined">menu</span>
            </div>
            </nav>
            <img 
            src={img}
             className="thumbnail"
             alt="thumbnail"
             ></img>
            <h1 className="song-name">Song Name</h1>
            <p>Singer</p>

            <audio id="audio-control" onTimeUpdate={setTimeOnProgressBar}>
                <source src={audio}></source>
            </audio>
            <input type="range" value={audioControl?.currentTime} id="progress" onChange={setTimeOnAudio}/>
            <div className="controls">
                <div className="circle">
                    <span className="material-symbols-outlined skip-previous-btn">skip_previous</span>
                </div>
                <div className="circle play-circle">
                    <span 
                    className="material-symbols-outlined play-btn paused" 
                    onClick={playPause}
                    >play_arrow</span>
                </div>
                <div className="circle">
                    <span className="material-symbols-outlined skip-next-btn">skip_next</span>
                </div>
            </div>
        </div>
    )
}