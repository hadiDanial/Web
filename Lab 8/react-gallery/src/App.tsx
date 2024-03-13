import { useEffect, useState } from 'react';
import './App.css';
import ImageGallery from './ImageGallery';
import { Image } from './Image';

function App() {

  const [images, setImages] = useState<Image[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  
  useEffect(() => {
    // Load images
    const randomStartIndex = Math.floor(Math.random() * 50);
    const images:Image[] = [];
    for (let i = 1; i <= 20; i++) {
      images.push({
        url: `https://picsum.photos/id/` + (i + randomStartIndex) +`/50/50`,
        id: i + randomStartIndex
      });
    }  
    setImages(images);
  }, [])
  
  return (
    <div className="App">
      <div className="mr-16 ml-16">
      <h1 className="text-lg font-bold text-center mt-6">React Image Gallery</h1>
      <div>
          <div className="border grid grid-cols-10 gap-4 justify-between p-8 content-center mx-auto">
            <ImageGallery images={images} setSelectedImage={setSelectedImage}/>
          </div>
          <div className="col-1 w-1/2 mx-auto text-center">
            {selectedImage &&
            <img className="bg-image rounded w-full p-16" alt='selectedImage' src={selectedImage}/> }
          </div>
      </div>
      </div>
    </div>
  );
}

export default App;
