import React, { Component } from 'react';

class VideoAnalyzer extends Component {

  	constructor(props){
	    super(props);
	    this.state = {

    	};
    	this.frameRef = React.createRef();
    	this.canvasRef = React.createRef();
    	this.canvasClick = this.canvasClick.bind();

  	}

  	componentDidMount(){


	    const frame = this.canvasRef.current;
	    const brush = frame.getContext('2d');
	    const f = this.frameRef.current;

	    f.onload = () => {
	    	console.log(brush);
		    brush.drawImage(f, 50, 50, 50, 50, 0, 0, 50, 50); 
		//DEV NOTE on Canvas Drawings: 
		//		- Using drawImage(f, 50, 50, 50, 50) will start drawing on the canvas at point 50,50 and will squish the full image in a 50x50 box
		//			- Shifts the image to 50,50 and displays the image in a 50x50 box
		//		- Using drawImage(f, 100, 100) will start drawing the canvas at point 100,100 from point 0, 0 of the image, and will will the canvas from that point
		//			- Shifts the image to 100,100 on the canvas, and keeps the original size of the image
		//drawImage Syntax (https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage)
		//	void ctx.drawImage(image, dx, dy);
		//	void ctx.drawImage(image, dx, dy, dWidth, dHeight);
		//	void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

		}

	    
  	}
  	canvasClick(event){
  		console.log("canvas clicked");
  		
  		console.log(event.clientX );
  		console.log(event.clientY);
  	}
  	
 	render () {
	    return ( 
	    	<div>
        		<img ref={this.frameRef} src={require('./example-informationLocation.jpg')} alt='example' style={{display: 'none'}}/>
        		<canvas ref={this.canvasRef} width={1920} height={1080} style={{border:'1px solid #000000'}} onClick={this.canvasClick} />
	    	</div> 
	    );
	}
}

export default VideoAnalyzer;