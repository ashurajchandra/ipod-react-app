import ZingTouch from 'zingtouch';
import React, { Component } from 'react';
import CoverFlow from './CoverFlow';
import Music from './Music';
import Games from './Games';
import Setting from './Setting';
import MyList from './MyList';



class Ipod extends Component {
constructor(){
    super();
    this.state={
        // state tomanage components
        toggleScreen: true,
        showCoverFlow: false,
        showMusic: false,
        showGames: false,
        showSetting: false,
       
    }
}

    // function to handle mouse rotate 
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


                // making diffrent component active based on wheel distance 

                // initilly cardflow state is true
                if(distance>0 && distance<85) 
                {
                    context.setState({
                        showCoverFlow:true,
                        showMusic:false,
                        showSetting:false
                       
                    })
                }

                // maiking coverFlow state false and music state true
                else if(distance>85 && distance<177 )
                {
                    context.setState({
                        showMusic:true,
                        showCoverFlow:false,
                        showGame:false,
                
                    })
                }

                // ,aking game state true and music false
                else if (distance>177 && distance<264 )
                {
                     context.setState({
                         showMusic:false,
                         showGame:true,
                         showSetting:false,
                       
                        })
                }

                //setting active as settings 
                else if(distance>244 && distance < 340)
                {
                    context.setState({
                        showGame:false,
                        showSetting:true,
                       
                    })
                }


                // repeating same for anticlock rotation
                if(distance>-90 && distance<0)
                {
                    context.setState({
                        showCoverFlow:false,
                        showSetting:true,
                        showGame:false,
                       
                    });
                }
                else if(distance>-168 && distance<-90)
                {
                    context.setState({
                        showGame:true,
                        showSetting:false,
                        showMusic:false,
                        showCoverFlow:false
                       
                    });
                }
                else if (distance>-271 && distance<-168)
                {
                    context.setState({showGame:false, showCoverFlow:false,showMusic:true});
                }
                else if (distance>-340 && distance<-271)
                {
                    context.setState({showSetting:false, showCoverFlow:true,showMusic:false});
                }
            })  
    }






// function to toggle the screen 
 handleToggleButton =()=>{
    this.setState({toggleScreen:false})
 }


    // function to handle menu click
    handleMenuClick=()=>
    {
        this.setState({toggleScreen:true})
    }

    render() {
        //getting items from state
        const { toggleScreen,  showCoverFlow, showMusic, showGames, showSetting} = this.state;
        return (
            <div className="Ipod">
                {toggleScreen? <MyList handleMenuClick={this.handleMenuClick}/>
                : showCoverFlow ? <CoverFlow handleMenuClick={this.handleMenuClick}/>
                : showMusic ? <Music handleMenuClick={this.handleMenuClick}/>
                : showGames ? <Games handleMenuClick={this.handleMenuClick}/>
                :  <Setting/>   
                
                 
                
                  }  

                  {/* <button className="toggle-button"
                  handleZesture={this.handleZesture}
                  handleMenuClick={this.handleMenuClick}
                  handleToggleButton ={this.toggleButton}>
                       </button> */}
                       <div className="mouse-rotate"  onClick={this.handleZesture}>
                           <div className="menu-btn">
                               <button id="menu-btn"   onClick={this.hnandleMenuClick}>Menu</button>
                           </div>
                           <div className="enter-btn" >
                               <button id="enter-btn" onClick ={this.toggleButton}></button>
                           </div>
                       </div>

             
                
            </div>
        );
    }
}

export default Ipod;