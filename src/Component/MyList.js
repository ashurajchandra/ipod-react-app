import React, { Component } from 'react';

class MyList extends Component {
    render() {

        const {showCoverFlow,
            showGame,
            showMusic,
            showSetting,

            }=this.props;
         

        return (
           <div className="outer-container">
            <div className="lists">
              <div className="inside-list">  <ul>
                   <li >
                   <div className={` ${showCoverFlow ?'active':''}`} >
                   CoverFlow
                </div>
                   </li>
                   <li>
                   <div className={` ${showMusic ?'active':''}`} >
                   Music
                </div>
                   </li>
                   <li>
                   <div className={` ${showGame ?'active':''}`} >
                   Games
                </div>
                   </li>
                   <li>
                   <div className={` ${showSetting ?'active':''}`} >
                   Setting
                </div>
                   </li>
                   </ul> 
                   </div>
                   </div>
                   
            </div>
        );
    }
}

export default MyList;