import React , { useState} from 'react';
import { auth , signInWithEmailAndPassword , getDocs , userCollection } from '../DB/firebaseConfig';
import '../components/css/login.css'
import { Link , useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Login() {


    const navigate = useNavigate()
    const [formLogin , setFormLogin ] = useState({
        email : "",
        password : ""
    });

    const { email , password} = formLogin;

    const handleChange = (e)=>{
        setFormLogin({
            ...formLogin,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async (e)=>{
        e.preventDefault();

        const userId = await recupereDocumentId(userCollection, formLogin.email, formLogin.password);

        signInWithEmailAndPassword(auth , formLogin.email , formLogin.password)
        .then((userCredential) =>{
            console.log('logged in user ID : ', userId)
            navigate(`/moreInfo/${userId}`)
        })
        .catch((e) =>{
            console.log("vous n'avez pas de compte")
        });
    };

    async function recupereDocumentId (userCollection , email , password){
        try {
            const querySnapshot = await getDocs(userCollection);
            for(const doc of querySnapshot.docs){
                const documentData = doc.data()
                const documentId = doc.id;
                if(documentData.email === email && documentData.password === password){
                    console.log(documentId, 'only id')
                    return documentId;
                }
            }
            console.log('aucun document trouvé avec les identifiants')
            return null
        } catch(err){
            console.log(err)
            return null
        }
    }
    return (
        <div className='bodyLogin'>
            <form className="form" onSubmit={handleLogin}>
                <Link to='/'><h2 className='h2-formLogin'>Our<span style={{color : 'rgb(225 , 95 , 95)'}}>Match</span></h2></Link>
    <p className="title">Connexion</p>
    <p className="message">Connectez-vous pour ne louper aucune chance de trouver l'amour.</p>
     
            
    <label>
        <input required="" placeholder="" type="email" className="input" name='email' value={email} onChange={handleChange}/>
        <span>Email</span>
    </label> 
        
    <label>
        <input required="" placeholder="" type="password" className="input" name='password'value={password} onChange={handleChange}/>
        <span>Mot de passe</span>
    </label>

    <button className="submit">Connexion</button>
    <p className="signin">Vous n'avez aucun compte ? <Link to={"/register"}>Inscrivez-vous</Link> </p>
</form>
        </div>
    );
}

export default Login;