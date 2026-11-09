import React from 'react';
import styled from 'styled-components';
import image1 from '../assets/gallery/image1.jpg';
import image2 from '../assets/gallery/image2.jpg';
import image3 from '../assets/gallery/image3.jpg';
import image4 from '../assets/gallery/image4.jpg';
import image5 from '../assets/gallery/image5.jpg';

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const ImageContainer = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

const Gallery = () => {
  const images = [image1, image2, image3, image4, image5];

  return (
    <GalleryWrapper>
      {images.map((image, index) => (
        <ImageContainer key={index}>
          <Image src={image} alt={`Gallery image ${index + 1}`} />
        </ImageContainer>
      ))}
    </GalleryWrapper>
  );
};

export default Gallery;
