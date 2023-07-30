import React, { useEffect, useState } from 'react';
import '../components/css/moreInfo.css'
import { getDoc , updateDoc , doc , db } from '../DB/firebaseConfig';
import { userCollection} from '../DB/firebaseConfig';
import {  useNavigate, useParams , Link} from 'react-router-dom';

function MoreInfo() {

  let navigate = useNavigate()
  

    // let navigate = useNavigate();

    // Envoyer les information de l'utilisateur dans la base de données
    const [ Age , setAge] = useState(0);
    const [ Profession , setProfession] = useState('')
    const [ Genre , setGenre] = useState('')
    const [Description , setDescription] = useState('')
    const [ Quartier  , setQuartier] = useState('')
    const [ Ville  , setVille] = useState('')
    const [ Pays  , setPays] = useState('')
    const [ AgeMinimum  , setAgeMinimum] = useState('')
    const [ AgeMaximum  , setAgeMaximum] = useState('')
    const [ Statut , setStatut ] = useState('')

    // const userData = async(e) =>{
    //     e.preventDefault()
    //      await addDoc(userCollection , id , { age : Age , profession : Profession , genre : Genre , description : Description , ageMin : AgeMinimum , ageMax : AgeMaximum , pays : Pays , ville : Ville , quartier : Quartier , statut : Statut})
    // }


    
    async function updateUser(){
      const docUser = doc (db , 'users' , id);

      const newfield = {age : Age , profession : Profession , genre : Genre , description : Description , ageMin : AgeMinimum , ageMax : AgeMaximum , pays : Pays , ville : Ville , quartier : Quartier , statut : Statut};

      await updateDoc(docUser , newfield)
  }

    // Renvoyer les information de l'utilisateur connecté selon son id
    let {id} = useParams()
    console.log('votre id est : ', id);

    const [ userInfo , setUserInfo] = useState('')
    async function getInfoUsers (id){
        try {
            const querySnapshot = await getDoc(userCollection);
            for(const doc of querySnapshot.docs){
                const documentData = doc.data()
                const documentId = doc.id;
                if(id === documentId){
                    setUserInfo(documentData)
                    console.log(userInfo)
                }
            }
            console.log('en cours')
        } catch (error) {
            console.log(error)
            console.log('erreur de recuperation des données')
        }
    }

    useEffect(()=>{
        getInfoUsers(id);
    }, [id])

    return (
        <div className='moreInfo'>
            <h1>Vos information personnelles</h1>

             <form action="">
                <h2>{userInfo.nom}</h2>
                <div className='age'>
                <label htmlFor="">Vous avez :<br/>
                <input type="number" name='info-age' onChange={(e) =>{setAge(e.target.value)}}/>
            </label>
                </div>

                <h2>Votre lieu  de residence</h2>
            <div className='residence'>
            <label htmlFor="">Votre quartier :<br/>
                <input type="texte" onChange={(e)=>{setQuartier(e.target.value)}}/>
            </label>

            <label htmlFor="">Votre ville :<br/>
                <input type="texte" onChange={(e)=>{setVille(e.target.value)}}/>
            </label>

            <label htmlFor="">Votre pays :<br/>
                <input type="texte" onChange={(e)=>{setPays(e.target.value)}}/>
            </label>
            </div>

            <h2>Statut professionnel</h2>
            <div className='profession'>
                <label htmlFor="">Votre profession :
                    <input type="text" onChange={(e) =>{setProfession(e.target.value)}}/>
                </label>
            </div>


            <h2>Votre statut matrimonial</h2>
            <label>Vous êtes
        <div className="radio-container">
  <div className="radio-wrapper">
    <label className="radio-button">
      <input type="radio" name="radio" id="choix1" value ='Célibataire' onClick={(e)=>setStatut(e.target.value)}/>
      <span className="radio-checkmark"></span>
      <span className="radio-label">Célibataire</span>
    </label>
  </div>

  <div className="radio-wrapper">
    <label className="radio-button">
      <input type="radio" name="radio" id="choix2" value = 'En couple' onClick={(e)=>setStatut(e.target.value)}/>
      <span className="radio-checkmark"></span>
      <span className="radio-label">En couple</span>
    </label>
  </div>

  <div className="radio-wrapper">
    <label className="radio-button">
      <input type="radio" name="radio" id="choix3" value = 'Marié(e)' onClick={(e)=>setStatut(e.target.value)}/>
      <span className="radio-checkmark"></span>
      <span className="radio-label">Marié(e)</span>
    </label>
  </div>
</div>

    </label>


            <h2>Votre genre</h2>
            <label>Vous rechercher ?
        <div className="radio-container">
  <div className="radio-wrapper">
    <label className="radio-button">
      <input type="radio" name="radio-group" id="option1" value ='homme' onClick={(e)=>setGenre(e.target.value)}/>
      <span className="radio-checkmark"></span>
      <span className="radio-label">Homme</span>
    </label>
  </div>

  <div className="radio-wrapper">
    <label className="radio-button">
      <input type="radio" name="radio-group" id="option2" value = 'femme' onClick={(e)=>setGenre(e.target.value)}/>
      <span className="radio-checkmark"></span>
      <span className="radio-label">Femme</span>
    </label>
  </div>
</div>

    </label>

    <h2>La tranche d'age</h2>
    <div className='tranche_age'>
                <label htmlFor="">Entre :
                <div>
                <input type="number" onChange={(e)=>{setAgeMinimum(e.target.value)}}/>
                et 
                <input type="number" onChange={(e)=>{setAgeMaximum(e.target.value)}}/>
                </div>
                </label>
            </div>

            <h2>Votre description</h2>
            <div className="description">
                <label htmlFor="">Décrivez-vous<br></br>
                    <textarea name="description" id="" cols="30" rows="10" onChange={(e) =>{setDescription(e.target.value)}}></textarea>
                </label>
            </div>

            <div className="buttons">
                
            <button className='cancel'>Plus tard</button>
                <button className='submitInfo' onClick={updateUser}>< Link to={`/profil/${id}`}>Ajouter information</Link></button>

            </div>

             </form>
        </div>
    );
}

export default MoreInfo;