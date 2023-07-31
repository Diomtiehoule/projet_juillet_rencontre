import React ,{useState , useEffect}from 'react';
import { useParams , Link } from 'react-router-dom';
import '../components/css/home.css'
import { getDocs ,auth , doc , userCollection } from '../DB/firebaseConfig';
import NavbarHome from './navbarHome';
import photo from '../media/mainImage.jpg'
import photo1 from '../media/sms-love.png'
import photo2 from '../media/texto.jpg'
import photo3 from '../media/couple1.jpeg'
import Footer from './Footer';

function Home() {

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

    return (
        <div>
          < NavbarHome />
          <div className="main-image">
            
            <h2>Bienvenu sur Our<span>Match</span></h2>
            
            <p>Enregistrez-vous gratuitement, <br/>profitez de notre  plateforme pour faire des rencontres <br/> trouver le ou la partenaire idéal(e) pour vous</p>

            <div className="register-button"><Link to='/register'>S'inscrire</Link>
            </div>
          </div>

          {/* <img src={photo1} alt="" />
          <img src={photo2} alt="" className='photo2' /> */}

          
          

          



          <h2 className="h2-procedure">Comment sa marche</h2>
          <div className="procedure">

            <div className="steps">
              <div className='step'>
                <h2><i className="fa-sharp fa-solid fa-magnifying-glass"></i> Decouverte</h2>
                <p>Parcourez notre sélection des hommes et des femmes prêt de chez vous</p>
              </div>

              <div className='step'>
                <h2><i className='fa fa-duotone fa-comments'></i> Echange</h2>
                <p>Echangez avec des hommes et les femmes qui vous conviennent , tisser des discution qui marquerons le début d'une relation à deux</p>
              </div>

              <div className='step'>
              <h2><i className='fa fa-duotone fa-calendar-days'></i> Date</h2>
                <p>Organisez des Date pour tester votre affiniter avec votre correspondant et déboucher sur une relation sérieuse.</p>
              </div>

              <div className='step'>
              <h2><i className="fa fa-solid fa-heart"></i> Couple</h2>
                <p>Formez le couple de vos rêve avec la personne pour qui votre coeur s'attachera.</p>
              </div>
            </div>
          </div>

          <div className="bonus">
          <div className="findLove">
            <img src={photo1} alt="" />
            <div className="textPhoto1">
              <h2>Message</h2>
              <p>
              Tout commence par un message , pour sa que nous avons mit sur pieds un moyen de chatez avec vos correspondant sans effet ni achat de pack ou quelconque abonnement.</p>
            </div>

          </div>

          <div className="findLove">
            <img src={photo3} alt="" />
            <div className="textPhoto1">
              <h2>Trouver la bonne personne</h2>
              <p>
              Trouver celui dont les defauts et les qualité vous font vous sentir spéciale.</p>
            </div>

          </div>

          <div className="findLove">
            <img src={photo3} alt="" />
            <div className="textPhoto1">
              <h2>Trouver la bonne personne</h2>
              <p>
              Trouver celui dont les defauts et les qualité vous font vous sentir spéciale.</p>
            </div>

          </div>
          
          </div>



          <h2 className="h2-property">A propos</h2>
          <div className='property'>
            <div className="free">
              <div className="icon-free">
              <i className=' fa fa-solid fa-dollar-sign'></i>
              <h3>Gratuit</h3>

              </div>
              <p>Une inscription et un service totalement gratuit . Nous vous offrons une exprerience de rencontre pour 0 depense.</p>
            </div>

            <div className="security">
              <div className="icon-security">
              <i className=' fa fa-solid fa-shield'></i>
              <h3>Securité</h3>
              </div>
              <p>Une plateforme totalement sécurisé. Vos information sont protégées et vous pouvez discuter en toute securité avec des personnes et des comptes vérifiés.</p>
            </div>

            <div className="accounts">
              <div className="icon-acounts">
              <i className=' fa fa-solid fa-users'></i>
              <h3>Comptes</h3>
              </div>
              <p>Nous avons +5K d'utilisateurs inscrit depuis la création de Our<span style={{color:'rgb(225 , 95 , 95)', fontWeight:'bold'}}>Match</span> .</p>
            </div>

          </div>

          


          <div className="slider">

            <input type="radio" name="slide" id='slide-1' checked/>
            <input type="radio" name="slide" id='slide-2' />
            <input type="radio" name="slide" id='slide-3' />

            <div className="slides">
              <div className="slide slide-1">
              <div className="slide-data">
                <h1>Julien & Sophie</h1>
                <p>
                  Julien 24ans , Directeur d'une société agricole et Sophie 22 , Assistante de direction. Il se sont rencontrés sur OurMatch en quête d'amour il y'a 1ans de cela. Après s'être trouvé , s'être envoyé des messages et s'être rencontré , ils forment aujourd'hui un très beau couple ou l'amour rêgne.<br/><br/>

                  Faite comme eux , inscrivez-vous et trouvez votre âme-soeur.
                </p>
              </div>
              </div>
              <div className="slide slide-2"> 
              <div className="slide-data">
                <h1>Florient & Nathaly</h1>
                <p>
                Florient 30ans , Informaticien et Nathaly 25 , Infirmière. Il se sont rencontrés sur OurMatch en quête d'amour il y'a 2ans de cela. Après s'être trouvé , s'être envoyé des messages et s'être rencontré ,la jeune nathaly est tombée sur le charme de Florient et aujourd'hui ils forment un très beau couple solide qui enchaine les années ensemble.<br/><br/>

Faite comme eux , inscrivez-vous et trouvez votre âme-soeur.
                </p>
              </div>
              </div>
              <div className="slide slide-3">
              <div className="slide-data">
                <h1>Trouver le compagnon qui est fait pour vous </h1>
                <p>
                   <i className='fa fa-solid fa-quote-left' style={{color:'black'}}></i> personne n'est fait pour vivre seule , l'amour est l'essence même de notre existence. Aimer et être aimer <i className='fa fa-solid fa-quote-right' style={{color:'black'}}></i> <br/>
                  Faite comme tout ces personnes devenus des couple après s'être rencontré sur OurMatch , vous aussi venez trouver votre amour.
                </p>
              </div>
              </div>
            </div>

            <div className="arrows arrows-left">
              <label htmlFor="slide-3">
                <span><i className="fas fa-angle-left"></i></span>
              </label>
              <label htmlFor="slide-1">
                <span><i className="fas fa-angle-left"></i></span>
              </label>
              <label htmlFor="slide-2">
                <span><i className="fas fa-angle-left"></i></span>
              </label>
            </div>

            <div className="arrows arrows-right">
              <label htmlFor="slide-2">
                <span><i className="fas fa-angle-right"></i></span>
              </label>
              <label htmlFor="slide-3">
                <span><i className="fas fa-angle-right"></i></span>
              </label>
              <label htmlFor="slide-1">
                <span><i className="fas fa-angle-right"></i></span>
              </label>
            </div>

            <div className="dots">
              <label htmlFor="slide-1"></label>
              <label htmlFor="slide-2"></label>
              <label htmlFor="slide-3"></label>
            </div>
          </div>

          < Footer />
        </div>
    );
}

export default Home;