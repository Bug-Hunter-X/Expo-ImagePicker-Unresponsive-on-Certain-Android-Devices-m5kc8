The solution involves using a more robust image picker library that handles potential errors gracefully and provides better platform compatibility. This example uses react-native-image-crop-picker, a widely used and reliable alternative. Make sure to install it using `expo install react-native-image-crop-picker`.

```javascript
import React, { useState } from 'react';
import { Button, Image, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const ImagePickerScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
      });
      setSelectedImage(image.path);
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  return (
    <View>
      <Button title="Pick Image" onPress={pickImage} />
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={{ width: 300, height: 300 }} />
      )}
    </View>
  );
};

export default ImagePickerScreen;
```
This updated code uses the `react-native-image-crop-picker` library to handle image selection. It provides more robust error handling and compatibility across various Android devices.