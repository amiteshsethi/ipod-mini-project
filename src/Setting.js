import React from 'react';

class Settings extends React.Component{
    
    render(){
        return(
            <div style={styles.settings} >

                <div style={styles.titlebar}>
                        <p style={{fontWeight:'bold'}}>Settings</p>
                        <img style={styles.battery} src="https://cdn-icons.flaticon.com/png/512/664/premium/664883.png?token=exp=1650731049~hmac=5d1e9f9c125397e6994fa928c5085a7e"  alt="img-error"></img>
                </div>
                {<div style={{width : '100%' , height : '90%',display:'flex' , flexDirection : 'row' , justifyContent: 'center'}}>
                        All Settings Set to Default
                </div>}
            </div>
        );
    }
    
}

const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        flexWrap : 'wrap'
    },
    battery: {
        height: 30,
        width: 30, 
    },
    titlebar: {
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: '1rem',
        boxSizing: 'border-box',
        padding: '3px',
        backgroundColor: 'lightblue',
        boxShadow: '0px 0px 10px 3px grey inset',
        width: 'inherit',
        height: 30,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1
    }
}

export default Settings;