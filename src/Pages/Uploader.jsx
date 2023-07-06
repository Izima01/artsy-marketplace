import { useState } from "react";
import { storage } from '../config/firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

const Uploader = () => {
    const [image, setImage] = useState(null);

    const uploadImage = () => {
        if (!image) return;
        const imageRef = ref(storage, `productImages/${image.name + v4()}`);
        uploadBytes(imageRef, image)
        .then(() => console.log('File uploaded'));
    };

    return (
        <div>
            <input type='file' onChange={(e) => setImage(e.target.files[0])} />
            <button onClick={uploadImage}>Upload Button</button>
        </div>
    )
}

export default Uploader