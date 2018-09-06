import React, { Component } from 'react';
import './Slap.css';


class Slap extends Component {
    
    constructor(props)
    {
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.handleMoveClick=this.handleMoveClick.bind(this);
        this.handleMouseDown=this.handleMouseDown.bind(this);
        this.handleMouseUp=this.handleMouseUp.bind(this);
        this.handleMouseMove=this.handleMouseMove.bind(this);
        this.state={ flag:false , flag1:true, chan:'barry',col2:'red',absPos:50,posX:50,posY:50, diffX:0, diffY:0, moveStarted:false,cursorType:'auto'};
    }

    handleMoveClick()
    {
        const pos=this.state.absPos+5;
        this.setState({absPos:pos});
    }




    handleClick() {
        //e.preventDefault();
        // this.setState({ bgColor : 'blue'});
        // this.setState({style: {fontSize: "10"}});
        //this.style={
        //width:"500px",
        //height:"100px",
        //border:"5px",
        //};
        
        const fl=this.state.flag;
        

        if(fl)
        {
           this.setState({ flag:false, flag1:true, col2:'red'});
        }
        else
        {
            this.setState({ flag:true, flag1:false, col2:'blue'});
            this.setState({ col2:'blue'});
        }

        if(this.state.col2=='red')
        {
           this.setState({col2:'blue'})     
        }
        else
        {
            this.setState({col2:'red'})     
        }
    }


    handleMouseDown(evt)
    {
        evt.preventDefault();

        const dx=evt.nativeEvent.clientX-this.state.posX;
        const dy=evt.nativeEvent.clientY-this.state.posY;
        this.setState({diffX:dx, diffY:dy,moveStarted:true,cursorType:'copy'});
         //this.setState({posX:evt.nativeEvent.clientX, posY:evt.nativeEvent.clientY})     
       //this.setState({posX:pos});   
       //this.setState({absPos:pos});  
    }


    handleMouseUp(evt)
    {
       if(this.state.moveStarted)
       {
            // this.setState({mouseX:evt.nativeEvent.clientX, mouseY:evt.nativeEvent.clientY})     
            //const newPosX=evt.nativeEvent.clientX-this.state.diffX;
            //const newPosY=evt.nativeEvent.clientY-this.state.diffY;

            //this.setState({absPos:pos});

            //this.setState({posX:newPosX, posY:newPosY});     
       }
       this.setState({moveStarted:false, cursorType:'auto'});     

    }



    handleMouseMove(evt)
    {
        if(this.state.moveStarted)
        {
             // this.setState({mouseX:evt.nativeEvent.clientX, mouseY:evt.nativeEvent.clientY})     
             const newPosX=evt.nativeEvent.clientX-this.state.diffX;
             const newPosY=evt.nativeEvent.clientY-this.state.diffY;
 
             //this.setState({absPos:pos});
 
             this.setState({posX:newPosX, posY:newPosY, cursorType:'copy'});     
        }

        //if(this.state.moveStarted)
       {
       // this.setState({cursorType:'auto'});     
       }
        // console.log("The event is "+evt.nativeEvent.clientX);
    }



  render() {

    let divBoxCyan=        <div id="divD" className="DivBoxCyan" onClick={this.handleClick}>    <p >Slap</p>    </div>;
    const fl=this.state.flag;
    const fl1=this.state.flag1;
    const div1Class=fl1?"DivBox1a":"DivBox1b";
    const divSty="cyan";
    const thePosX=this.state.posX+"px";
    const thePosY=this.state.posY+"px";
    const curType=this.state.cursorType;
    if(fl)
    {
        divBoxCyan=<div id="divD" className="DivBoxBlue" onClick={this.handleClick}>    <p >Slap</p>    </div>;
    }

    return (
          <div style={{ cursor:curType}}  onMouseUp={this.handleMouseUp} onMouseMove={this.handleMouseMove}>
        {divBoxCyan}

        <div className={div1Class}>
            Telling Style class to choose through a JSX variable
        </div>    
        <div style={{  width:"300px",    height:"300px",    border:"5px", color:this.state.col2}}>
        Changing a particular style by using a state variable
        </div>

        <div style={{ cursor:curType, position: "absolute",    top:thePosY,    left:thePosX , width: "200px",   height: "100px", color:"gray",   backgroundColor: "rgb(200,190,164)"  }} onClick={this.handleMoveClick}     onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}> Absolute Here it is  </div>
       {/*  <div style={{ position: "absolute",    top:{thePos},    left:{thePos} , align:"centre", valign:"middle",    width: {thePos},    height: "200px", color:"gray",   backgroundColor: "rgb(200,190,164)"  }} onClick={this.handleMoveClick}> Absolute Here it is  </div> */}

        </div>
    );
  }
}

export default Slap;
