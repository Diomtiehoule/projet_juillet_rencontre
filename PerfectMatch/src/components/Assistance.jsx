import React, { useState , useEffect } from 'react';
import '../components/css/assistance.css'
import NavbarUser from './navbarUser';
import { useParams } from 'react-router-dom';
import Footer from './Footer';

function Assistance() {

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

    const [ problem , setProblem] = useState('')
    const [ solution , setSolution] =useState({
        solution1 : 'Vérifier votre connexion , si vous êtes bien connecté , veuillez vérifier vos identifiants (Adresse mail et mot de passe)',
        solution2 : "Une fois connectez , rendez-vous dans l'espace profile puis cliquez sur le boutton visiter mon profile pour avoir accès à votre profile",
        solution3 : "Pour supprimer votre compte , il cous suffit de vous rendre dans l'espace profile , ensuite cliquer sur SUPPRIMER MON COMPTE et suuivre la procedure de supression",
        solution4: "Pour organiser une rencontre , vous devez vaider le profile d'un utilisateur et cliquer sur le boutton rencontrer pour organiser votre rencontre ou vous pouvez tout simplement programmer votre rencontre via votre discussion avec l'utilisateur en question. Il est préférable d'organiser vos renvontre dans des endroit publique et pensez à informer un proche pour éviter les surprise.",
        solution5: "",
        solution6 :""
    })


    

    console.log(problem)
    const handlSolution = ()=>{
        const mess = document.querySelector('.solutions')
        if(problem === 'problem1'){
            mess.innerHTML = solution.solution1
        }
        else if(problem === 'problem2'){
            mess.innerHTML = solution.solution2
        }
        else if(problem === 'problem3'){
            mess.innerHTML = solution.solution3
        }
        else if(problem === 'problem4'){
            mess.innerHTML = solution.solution4
        }
        else if(problem === 'problem5'){
            mess.innerHTML = solution.solution5
        }
        else if(problem === 'problem6'){
            mess.innerHTML = solution.solution6
        }else if(problem === ''){
            mess.innerHTML = "Saisissez votre probleme ou choisissez parmi l'un des probleme pour avoir une solution au probleme qui vous préoccupe en ce moment."
        }
        }
    
    return (
        <div className='body_assistance'>
        <NavbarUser />
            <div className="search-problem">
                {/* <input type="text" className='problem' 
                placeholder='Comment pouvons-nous vous aider ?'/> */}
                <select name="ls-problem" id=""  onChange={e => setProblem(e.target.value)}
                onClick={handlSolution
                }>
                <option value="">Comment pouvons-nous vous aider ?</option>
                    <option value="problem1">Vous n'arrivez pas a vous connecter a votre compte </option>
                    <option value="problem2">Vous rencontez des difficulter a acceder a votre profile </option>
                    <option value="problem3">Vous voulez supprimer votre compte</option>
                    <option value="problem4">Quelles sont les procédures pour les rencontres</option>
                    <option value="problem5">j'aimerais modifier mes information personnelles</option>
                    <option value="problem6">Je n'arrive pas a envoyer des messages à un autre utilisateurs</option>
                </select>
            </div>

            <div className="result_problem">
                <p className='solutions'>Saisissez votre probleme ou choisissez parmi l'un des probleme pour avoir une solution au probleme qui vous préoccupe en ce moment.</p>
            </div>

            <div className="contact">

                <button className='contact_us' >
                    Contactez-nous
                </button>
            </div>
            < Footer />
        </div>
    );
}

export default Assistance;