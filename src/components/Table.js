import React from 'react';

export default class Table extends React.Component {

    constructor(props){
      super(props);
      this.getHeader = this.getHeader.bind(this);
      this.getRowsData = this.getRowsData.bind(this);
      this.getKeys = this.getKeys.bind(this);

    }

    getAudio = (clipUrl) => {
        var audio = new Audio("/audio/" + clipUrl + ".mp3");
        return audio.play();
    };

    getKeys = function(){
      return Object.keys(this.props.data[0]);
    }
    
    getHeader = function(){
      var keys = this.getKeys();
      return keys.map((key, index)=>{
        return <th key={key}>{key.toUpperCase()}</th>
      })
    }
    
    getRowsData = function(){
      var items = this.props.data;
      var keys = this.getKeys();
      return items.map((row, index)=>{
        return (
        <tr key={index}>
            {/*<RenderRow key={index} data={row} keys={keys} />*/}

            {keys.map((key, index)=>{
                    if (key === "audio") {
                    return (
                    <td key={row[key] + ".mp3"}><img src="data:image/gif;base64,R0lGODlhEAAQAJEAADOZzP///////wAAACH5BAEAAAIALAAAAAAQABAAAAIxlI+pBtgrwDvTSVUjCG82CQYcRYEbV3WnCEYMY5ruHMukVns3fM1+mfmVEsGdEKIoAAA7" border="0" className="playbutton" onClick={() => this.getAudio(row[key])} /></td>
                    )
                    } else return <td key={row[key]}>{row[key]}</td>
            })}

            </tr>
        )  
    })
    }
    
    render() {
        return (
          <div>
            <table>
            <thead>
              <tr>{this.getHeader()}</tr>
            </thead>
            <tbody>
              {this.getRowsData()}
            </tbody>
            </table>
          </div>
          
        );
    }
}
{/*
const RenderRow = (props) =>{
  return props.keys.map((key, index)=>{
      if (key === "audio") {
        return <td key={props.data[key]}><a href="#"><img src="data:image/gif;base64,R0lGODlhEAAQAJEAADOZzP///////wAAACH5BAEAAAIALAAAAAAQABAAAAIxlI+pBtgrwDvTSVUjCG82CQYcRYEbV3WnCEYMY5ruHMukVns3fM1+mfmVEsGdEKIoAAA7" border="0" /></a></td>
      } else return <td key={props.data[key]}>{props.data[key]}</td>
  })
}
*/}