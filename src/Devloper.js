import React from 'react';

class Devloper extends React.Component {
    render() {
        return (
            <div style={styles.nav}>
                <a href ="https://amiteshsethi.github.io/Resume/">
                <img style={styles.img} src="https://pbs.twimg.com/profile_images/1331301330728624128/pN3e8j2e_400x400.jpg" alt="img-error"></img>
                </a>
                <h1>Duttatrey Amitesh Sethi</h1>
            </div>
        );
    }

}

const styles = {
    nav: {
        height: 50,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    img: {
        marginRight:20,
        height:50,
        width:50,
        borderRadius:50,
    }
};


export default Devloper;