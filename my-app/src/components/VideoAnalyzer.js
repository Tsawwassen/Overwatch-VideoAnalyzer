import React, { Component } from 'react';

class VideoAnalyzer extends Component {

  	constructor(props){
	    super(props);
	    this.state = {

    	};
  	}

  	componentDidMount(){

  	/*	const can = this.refs.can
   		const ctx = can.getContext("2d")
    	const img = this.refs.image

    	img.onload = () => {
	      	ctx.drawImage(img, 0, 0)
	      	ctx.font = "40px Courier"
	      	
	    }*/
  	}
  	// <canvas ref="can" width={640} height={425} />
  	
 	render () {
	    return ( 
	    	<div>
	    	   
        		<img src={require('./example-informationLocation.jpg')} alt='example' className="hidden" width='75%' height='75%'/>
	    	</div> 
	    );
	}
}

export default VideoAnalyzer;