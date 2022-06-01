import React from 'react';
class MyMusic extends React.Component{
    
    render(){
        return(
            <div style={styles.myMusicContainer}>
                    <h1>Not Playing Anything</h1>
            </div>
        );
    }
    
}

const styles = {
    myMusicContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
    },
}

export default MyMusic;