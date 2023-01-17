import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const images = [
  '//placekitten.com/1500/500',
  '//placekitten.com/4000/3000',
  '//placekitten.com/800/1200',
  '//placekitten.com/1500/1500',
];

export default class ImageLightbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };

  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div
      className='w-full flex flex-col items-center justify-center '>
        <img className={this.props.styling + " shadow-xl"} src={this.props.imageSrc} onClick={() => this.setState({ isOpen: true })}/>
        <div className='italic py-1 mt-2 mb-4 text-sm'>
           {this.props.citation}
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={this.props.imageSrc}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
ImageLightbox.defaultProps={styling:'max-h-60 object-contain'}