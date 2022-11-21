import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import Details from './Components/Details';
import Lista from './Components/Lista';
import {obtenerImagenes} from './API/images';
import ImageList from './Components/ImageList';

const App = () => {
  const [activo, setActivo] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    obtenerImagenes().then(data => {
      setImages(data);
    });
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      {
        <ImageList images={images} /> /*
        activo ? (
        <Details setActivo={setActivo} />
      ) : (
        <Lista setActivo={setActivo} />
      )
        */
      }
    </SafeAreaView>
  );
};

export default App;
