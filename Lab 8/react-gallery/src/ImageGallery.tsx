import React from 'react'
import { Image } from './Image';

interface ImageGalleryProps {
    images: Image[]
    setSelectedImage: (image: string) => void
}
const ImageGallery:React.FC<ImageGalleryProps> = (props) => {

  return (
    <>
        {props.images.map((image, index) => {
            return (
                <div key={index} className="col-1 w-16 content-center  mx-auto">
                    <img src={image.url} className="bg-image rounded w-full h-full mx-auto object-cover" alt='galleryImage' onClick={()=>{ props.setSelectedImage('https://picsum.photos/id/' + image.id + '/350/350'); }}/>
                </div>
            )
        }  
        )}
    </>
  )
}

export default ImageGallery