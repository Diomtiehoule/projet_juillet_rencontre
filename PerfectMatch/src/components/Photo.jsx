import React , {useEffect , useState , useRef}from 'react';
import photo from '../media/client2.jpg'
import '../components/css/image.css'
import { addDoc } from 'firebase/firestore';
import { getDocs , userCollection , db , doc} from '../DB/firebaseConfig';


function Photo() {

    const inputRef = useRef(null)
    const [ image , setImage ] = useState('')

    const handleImageClick = () =>{
        inputRef.current.click()
    }

    const handleImageChange = (event) =>{
        const file =  event.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.addEventListener('load', ()=>{
                setImage(reader.result())
            })
            reader.readAsDataURL(file)
        }else{
            setImage('')
        }
        
    };
    console.log(image)

    const handleSavePhotoUser = async () => {
        await addDoc(userCollection , {
            Photo_profile : image
        });
        console.log(addDoc)
    }
    return (

        <div className='image-update-container'>
            <div className='box-decoration'>
                <label htmlFor="image-upload-input" className='image-upload-label'>
                    {image ? image.name : 'choisir une image'}
                </label>
                    <div onClick={handleImageClick} style={{cursor : 'pointer'}}>
                    {image ? <img src={URL.createObjectURL(image)} alt='' className='image-display-after'/> : < img src={photo}  className='image-display-before'/>}

                    <input type="file" ref={inputRef} name='image'
                     onChange={handleImageChange}
                      style={{ display: 'none'}}/>
                </div>
                <button className='image-upload-button' onClick={handleSavePhotoUser}>Choisir</button>
            </div>



            <div className="text">
        
                <img src={image} alt="" />
            </div>
        </div>
        
    );
}

export default Photo;