import React , {useState , useEffect , useRef} from 'react';
import { storage , getDocs , db , userCollection    } from '../DB/firebaseConfig';
import { ref , uploadBytes , listAll , getDownloadURL} from 'firebase/storage';
import '../components/css/photo.css'
import {v4} from 'uuid'
import NavbarUser from './navbarUser';
import Footer from './Footer';
import photo from '../media/add-photo.png'

function Galerie() {

    const [ img , setImg ] = useState(null)
    const [ imgList , setImgList ] = useState([])
    const imgListRef = ref(storage , 'images/')

    const addImage = () =>{
        if(img === null ) return;
        const imgRef = ref(storage , `images/${img.name + v4()}`);

        uploadBytes(imgRef , img).then((snaphsot)=>{
            getDownloadURL(snaphsot.ref).then((URL) => {
                setImgList((prev) => [...prev, URL])
            })
          
        })
    }

    useEffect(()=>{
        listAll(imgListRef).then((response)=>{
            response.items.forEach((item) => {
                getDownloadURL(item).then((URL) =>{
                    setImgList((prev) =>[...prev, URL])
                })
            })
        });
    }, [])

    const inputRef = useRef(null)

    const handleImageClick = () =>{
        inputRef.current.click()
    }
   

    return (
<>
        <div className='body-galerie'>
            < NavbarUser />
            <h2>Votre galerie</h2>

            <div className="galeries">
                {imgList.map((URL) =>{
                        return < img src={URL}/>
                    })}
            </div>


            <div className="add_photo">
            {<img src={photo} alt='' className='image-display-after' onClick={handleImageClick}/>}<br/>

<input type="file" onChange={(event) =>{setImg(event.target.files[0])}} ref={inputRef}  style={{display: 'none'}}/>

<button onClick={addImage}>ajouter photo</button>
            </div>
            
            
           
        </div>
        < Footer />
        </>
    );
}

export default Galerie;