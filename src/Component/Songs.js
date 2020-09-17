import React, { Component } from 'react';
import mp3 from '../mp3/song.mp3';



class MusicList extends Component {
    constructor(){
        super();
        this.state={
            
            playing: true
        }
    }
           

    //  setting up function for play and pause of song
    handlePlay=()=> {
        const x=document.getElementById('mp3_file');
        const {playing}=this.state;
        if(!playing) {
            console.log('playing');
            x.play();
            this.setState({playing:true})
        }else {
            x.pause();
            this.setState({playing:false})
        }
    }
    render() {
        const {playing} = this.state;
        return (
            <div className="song-div">
            <div className="singer-image">
             
            <audio id='mp3_file'src={mp3} ref='audio_tag' controls autoPlay/>
           
           
            </div>
           
           
            <div className="mouse-rotate" id="play-btn">
                 <div className="song-btn">
                    { playing? <button id="song-btn"onClick={this.handlePlay}>play</button>:
                     <button id="song-btn"onClick={this.handlePlay}>pause</button>}
            </div>
            </div>
            </div>
            
        );
    }
}

export default MusicList;