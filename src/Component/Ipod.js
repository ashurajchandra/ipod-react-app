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
        
        toggleScreen: true,
        showCoverFlow: false,
        showMusic: true,
        showGames: false,
        showSetting: false,
       
    }
}

 toggleButton =()=>{
    this.setState({toggleScreen:false})
 }





 


    render() {
        const { toggleScreen,  showCoverFlow, showMusic, showGames, showSetting} = this.state;
        return (
            <div className="Ipod">
                {toggleScreen? <MyList/>
                : showCoverFlow ? <CoverFlow/>
                : showMusic ? <Music/>
                : showGames ? <Games/>
                :  <Setting/>               
                  }  

                  <button className="toggle-button" onClick={this.toggleButton}>
                      
                       </button>

             
                
            </div>
        );
    }
}

export default Ipod;