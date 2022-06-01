import React from 'react';
import Home from './Home';
import Music from './Music';
import Games from './Games';
import Settings from './Setting';
import NowPlaying from './NowPlaying';
import Playlist from './Playlist';

const Screen = (props) => { 
    
    const {activeItem, activePage} = props.data;
    
    return(
        <div className = 'display' id='screen-container'>
            {activePage==='Home'?<Home activeItem={activeItem}/> : null}
            {activePage==='Music'?<Music activeItem={activeItem}/> : null}
            {activePage==='Games'?<Games /> : null}
            {activePage==='Settings'?<Settings /> : null}
            {activePage==='NowPlaying'?<NowPlaying  /> : null}
            {activePage==='Playlist'?<Playlist /> : null}    
        </div>
    );
}

export default Screen;