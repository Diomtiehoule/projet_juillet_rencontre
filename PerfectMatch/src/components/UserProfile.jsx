import React, { useState , useEffect} from 'react';
import '../components/css/userProfile.css'
import NavbarUser from './navbarUser';
import photo from '../media/client2.jpg'
import { useParams } from 'react-router-dom';
import { getDocs , userCollection , db , doc} from '../DB/firebaseConfig';

function UserProfile() {


     // recuperer l'id de l'utilisateur connecter et ses information
     const [userInfo , setUserInfo] = useState({})
     let { id } = useParams()
     console.log('ID' , id)
 
     async function GetInfosUser(id) {
         try {
           const querySnapshot = await getDocs(userCollection);
           for (const doc of querySnapshot.docs) {
             const documentData = doc.data();
             const documentId = doc.id;
             if (id === documentId) {
               setUserInfo(documentData);
               console.log(userInfo)
             }
           }
           console.log("DashBoard");
         } catch (error) {
           console.error("Une erreur s'est produite lors de la récupération des documents :", error);
         }
       }
     
       useEffect(() => {
         GetInfosUser(id);
       }, [id]);
 
       console.log(userInfo)
     //   fin de la funntion pour recuperer

    // function photo({userId , onUpdate}){
    //     const [ previewSrc , setPreviewSrc] = useState('');

    //     const handlePhotoChange = (event) =>{
    //         const file =event.target.file[0];
    //         if(file){
    //             const reader =new FileReader();
    //             reader.addEventListener('load', () =>{
    //                 setPreviewSrc(reader.result);
    //             });
    //             reader.readAsDataURL(file);
    //         }else{
    //             setPreviewSrc('')
    //         }
    //     };
    // }

    
    return (
        
        <div className='body-profile-user'>
            < NavbarUser />
            <div className="profile-photo-user">
                <img src={photo} alt="" />
            </div>

            <div className="info-profile-user">
                <div className="info-principale">
                    <p><span className='nom-user'><i class="fa-solid fa-user"></i> {userInfo.nom} </span>, {userInfo.age} ans</p>
                    <p>{userInfo.sexe} / {userInfo.statut}</p>
                    <p>cherchant {userInfo.genre} , {userInfo.ageMin}-{userInfo.ageMax}</p>
                </div>

                <div className="information-secondaire">
                    <h2>Vos informations <i class=" fa fa-light fa-pen-to-square"></i></h2>
                    <div className="infos">

                        <div className="profession-user">
                        <h4>Profession :</h4>
                        <p>{userInfo.professsion}</p>
                        </div>

                        <div className="adresse-user">
                            <h4><i class="fa-solid fa-location-dot"></i> Lieu de résidence :</h4>
                            <p>{userInfo.quartier}, {userInfo.ville} , {userInfo.pays}</p>
                        </div>

                        <div className="loisir-user">
                            <h4>Loisir :</h4>
                            <p>sport , musique  et voyage</p>
                        </div>

                        <div className="type-personne">
                            <h4>Type de personne :</h4>
                            <p>personne timide et  tres impatiente</p>
                        </div>
                        
                    </div>
                </div>

                <div className="description-user">
                    <h2>A propos de vous</h2>
                    <p>{userInfo.description}</p>
                </div>

                <div className="correspondance_user">
                    <h2>Votre correspondance</h2>
                    <div className="sexe-correspondance">
                        <h4>Sexe :</h4>
                        <p>{userInfo.genre}</p>
                    </div>

                    <div className="age-correspondance">
                        <h4>Age :</h4>
                        <p>{userInfo.ageMin}-{userInfo.ageMax}</p>
                    </div>

                    <div className="Statut-correspondance">
                        <h4>Statut :</h4>
                        <p>{userInfo.statutCorrespondance}</p>
                    </div>

                    <div className="adresse-correspondance">
                        <h4>Adresse : </h4>
                        <p>{userInfo.paysCorrespondance}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;