import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        console.log(this.imageRef);
    }

    render(){
        const {descripcion,urls} = this.props.image;
        
        return(
            <div>
                <img 
                ref={this.imageRef}
                alt={descripcion}
                src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;