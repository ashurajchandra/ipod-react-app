import React, { Component } from 'react';
import ZingTouch from 'zingtouch';
import Artist from './Artist';
import Playlist from './Playlist';
import Songs from './Songs';

class Music extends Component {
    constructor(){
        super();
        this.state={
            // state to manage music
          showArtist:false,
          showSongs:false,
          showPlaylist:false,
          showMusicComponent:false,
           
        }
    }

      // function to handle zesture 
      handleZesture=(e)=>
      {
          console.log('state',this.state);
  
          const context=this;
          var distance=0;
          var region=new ZingTouch.Region(e.target)
              region.bind(e.target,'rotate',function(e)
              {
  
                  console.log('last distancce details',e.detail.distanceFromLast);
                  console.log('rorate details',e.detail.distanceFromOrigin);
                  distance=e.detail.distanceFromOrigin;
  
  
                  // setting active state based on condition
                  if(distance>0 && distance<85) 
                  {
                      context.setState({
                         
                          showSongs:true,
                          showArtist:false,
                          showPlaylist:false
                      })
                  }
                  else if(distance>85 && distance<177 )
                  {
                      context.setState({
                          
                          showSongs:false,
                          showArtist:true,
                          showPlaylist:false
                      })
                  }
                  else if (distance>177 && distance<264 )
                  {
                       context.setState({
                          
                           showPlaylist:true,
                           showArtist:false
                          })
                  }
                  else if(distance>244 && distance < 340)
                  {
                      context.setState({
                         
                          showPlaylist:true,
                          showArtist:false,
                          showSongs:false
                      })
                  }
  
                  if(distance>-90 && distance<0)
                  {
                      context.setState({
                         
                          showArtist:true,
                          showPlaylist:false,
                          showSongs:false
                      });
                  }
                  else if(distance>-168 && distance<-90)
                  {
                      context.setState({
                         
                          showSongs:true,
                          showArtist:false
                      });
                  }
              })  
      }

       // function to handle enter click
    handleEnter=()=>
    {
        this.setState({showMusicComponent:true});
    }



    // // function to handle wheel rotation
    // handleWheelClick=(e)=>
    // {
    //     const {handleZesture}=this.props;
    //     handleZesture(e);
    // }

    //function to handle menu click
    handlemenuClick=()=>
    {  
        const{showMusicComponent}=this.state;
        const {handleMenuClick}=this.props;
        if(!showMusicComponent) handleMenuClick();
        else
        this.setState({showMusicComponent:false});
    }
    render() {

        const {showArtist,showMusicComponent,showPlaylist,showSongs}=this.state;
       // const {showMusicComponent}=this.props;
        console.log('state',this.state);
        return (
            
            <div className="outer-container"> 
            <div className="lists" >

                {/* // rendering diffrent component based on codition */}
                 
                {showMusicComponent?showSongs?
                <div >
                    <Songs /></div>:
                    showArtist?<div ><Artist /></div>:
                    <div ><Playlist/></div>:
                  
                
                 <div className="music-card" >
                       <span className='title'><h1>Music</h1></span> 
                 <div className="music-sub-parts">
                 <div className={` ${showSongs?'active':''}`}>
                 All songs
                 </div>
                 <div className={` ${showArtist?'active':''}`}>
                 Artist
                 </div>
                 <div className={` ${showPlaylist?'active':''}`}>
                 Playlist
                 </div>
                 </div>
 
               
                
            </div>
                }
   
            </div>
               {/* rendering wheel div  */}
               <div className="mouse-rotate"  id="inside-music" onClick={this.handleZesture}>
                ..
            <div className="menu-btn">
                    <button id="menu-btn" onClick={this.handlemenuClick}>MENU</button>
            </div>
            <div className="enter-btn" >
                               <button id="enter-btn" onClick ={this.handleEnter}></button>
                           </div>
                           
            
            </div>
            </div>
        );
    }
}

export default Music;