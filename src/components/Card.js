import React from 'react';
import ReactTooltip from 'react-tooltip'; //https://www.npmjs.com/package/react-tooltip
class Card extends React.Component {

    constructor(props) {
        super(props);

        // this.state = { spans:0 };
        // this.imageRef = React.createRef();
    }

    // setSpans = () => {
    //     console.log(this.imageRef);
    //     const height = this.imageRef.current.clientHeight;
    //     const spans = Math.ceil(height / 5);
    //     this.setState({spans:spans});
    // }

    // componentDidMount(){
    //     this.imageRef.current.addEventListener('load', this.setSpans) 
    // }

    parseDate (dateInMiliseconds) {
        var d = new Date(dateInMiliseconds);
        var ds = d.toUTCString();
        return ds;
    }

    render() {

        const {title, excerpt, hyperlink, date_published} = this.props.card;

        return(
            <div className="card bg-light mb-3" style={{width:'18rem'}}>
                {/* <div className="card-header">
                    Featured
                </div> */}
                
               
                <div className="card-body">
                    <p className="card-text">{title}</p>
                    <a href={hyperlink} className="card-link">button</a>
                    <br></br>
                    
                    <p className="card-text"><small className="text-muted">{this.parseDate(date_published)}</small></p>
                
                </div>
                <div><button data-tip data-for={title} type="button" className="btn btn-success float-right mb-2 mr-2">?</button>
                    </div>

                    <ReactTooltip place='right' id={title}>
              
              <p>{excerpt}</p>
          
              </ReactTooltip>
            </div>
            
        )
    }
}

export default Card;