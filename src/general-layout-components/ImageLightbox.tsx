import React, { Component } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface ImageLightboxProps {
  imageSrc: string;
  citation: string;
  style?: React.CSSProperties;
}

interface ImageLightboxState {
  isOpen: boolean;
}

export default class ImageLightbox extends Component<ImageLightboxProps, ImageLightboxState> {
  static defaultProps = { style: { maxHeight: 50 + 'em' } };

  constructor(props: ImageLightboxProps) {
    super(props);

    this.state = {
      isOpen: false,
    };

  }

  render() {
    const { isOpen } = this.state;

    return (
      <div
        className='w-full flex flex-col items-center justify-center '>
        <img style={this.props.style} className={" shadow-xl"} src={this.props.imageSrc} onClick={() => this.setState({ isOpen: true })} />
        <div dangerouslySetInnerHTML={{ __html: this.props.citation }} className='italic py-1 mt-2 mb-4 text-sm'>
        </div>
        <Lightbox
          open={isOpen}
          close={() => this.setState({ isOpen: false })}
          slides={[{ src: this.props.imageSrc }]}
        />
      </div>
    );
  }
}