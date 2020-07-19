import React, { Component } from 'react';

class VideoAnalyzer extends Component {

  	constructor(props){
	    super(props);
	    this.state = {
	    	

    	};
    	this.frameRef = React.createRef();
    	this.canvasRef = React.createRef();

  	}

  	componentDidMount(){

  	/*	const can = this.refs.can
   		const ctx = can.getContext("2d")
    	const img = this.refs.image

    	img.onload = () => {
	      	ctx.drawImage(img, 0, 0)
	      	ctx.font = "40px Courier"
	      	
	    }*/
	    //console.log("hello world");
	    //console.log(this.canvasRef.current);

	    const frame = this.canvasRef.current;
	    const ctx = frame.getContext('2d');
	    const f = this.frameRef.current;

	    f.onload = () => {
		    ctx.drawImage(f, 0, 0);
		    //ctx.font = "40px Courier"
		    //ctx.fillText(this.props.text, 210, 75)
		}

	    
  	}
  	// <canvas ref="can" width={640} height={425} />
  	
 	render () {
	    return ( 
	    	<div>
        		<img ref={this.frameRef} src={require('./example-informationLocation.jpg')} alt='example' className="hidden"/>
        		<canvas ref={this.canvasRef} width={1920} height={1080} style={{border:'1px solid #000000'}} />
	    	</div> 
	    );
	}
}

export default VideoAnalyzer;