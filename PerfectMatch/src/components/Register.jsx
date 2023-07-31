import React, { useRef , useState , useEffect} from 'react';
import '../components/css/Register.css'
import { createUserWithEmailAndPassword , auth, addDoc, userCollection , getDocs , doc} from '../DB/firebaseConfig';
import { Link , useNavigate} from 'react-router-dom';

function Register() {

    const  navigate = useNavigate()

    const [Name , setname] = useState('');
    const [ Prenom , setPrenom ] = useState('');
    const [Mail , setMail] = useState('');
    const [passWord , setPassword] = useState('');
    const [ Sexe , setSexe] = useState('');
    const [ Users , setUsers ] = useState('')
    const [ Matricule , setMatricule] = useState('')

    const signUp = (email , password) => createUserWithEmailAndPassword(auth , email , password);


    const inputs = useRef([]);
    const addInputs = el =>{
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el);
        }
    }
    const formRef = useRef()



    const handleSignUp = async(e) =>{
         e.preventDefault()

         let matriculeID = ()=>{
            return Number(Math.floor((3 + Math.random())* 0x1000).toString(3).substring(1));
        }
       setMatricule(matriculeID);
       console.log(Matricule);

        try {
            const cred = await signUp(
                inputs.current[2].value,
                inputs.current[3].value
            )
            formRef.current.reset();
            console.log('valide')
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    const userData = async() =>{
        addDoc(userCollection , {nom : Name , prenom : Prenom , sexe : Sexe , email: Mail , password : passWord , identifiant : Matricule , age : 0 , profession : "" , genre : "" , description : "" , ageMin : "" , ageMax : "" , pays : "" , ville : "" , quartier : ""  , statut : "" ,loisir : ''});

        console.log(addDoc)
    }

    useEffect(()=>{
        const getUsers = async () =>{
            const data =  await getDocs(userCollection);
            setUsers(data.docs.map(()=>({...doc.data(), id : doc.id})));
            console.log(data)
        };
        getUsers()
     }, []);

    return (
        <div className='bodyLogin'>
            <form className="form" onSubmit={handleSignUp} ref={formRef}>
            <Link to='/'><h2 className='h2-formLogin'>Our<span style={{color : 'rgb(225 , 95 , 95)'}}>Match</span></h2></Link>
    <p className="title">Enregistrement</p>
    <p className="message">Inscrivez vous maintnenant et trouver votre match parfait.</p>
        <div className="flex">
        <label>
            <input required="" placeholder="" type="text" className="input" ref={addInputs} onChange={(e)=> setname(e.target.value)}/>
            <span>nom</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" className="input"  ref={addInputs} onChange={(e)=> setPrenom(e.target.value)}/>
            <span>Prenom</span>
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="" type="email" className="input" ref={addInputs} onChange={(e)=> setMail(e.target.value)}/>
        <span>Email</span>
    </label> 
        
    <label>
        <input required="" placeholder="" type="password" className="input" ref={addInputs} onChange={(e)=>setPassword(e.target.value)}/>
        <span>Mot de passe</span>
    </label>

    
    <label>
        <div className="radio-container">
  <div className="radio-wrapper">
    <label className="radio-button">
      <input type="radio" name="radio-group" id="option1" value ='homme' onClick={(e)=>setSexe(e.target.value)}/>
      <span className="radio-checkmark"></span>
      <span className="radio-label">Homme</span>
    </label>
  </div>

  <div className="radio-wrapper">
    <label className="radio-button">
      <input type="radio" name="radio-group" id="option2" value = 'femme' onClick={(e)=>setSexe(e.target.value)}/>
      <span className="radio-checkmark"></span>
      <span className="radio-label">Femme</span>
    </label>
  </div>
</div>

    </label>
    <button className="submit" onClick={userData}>Soumettre</button>
    <p className="signin">Vous avez déjà un compte ? <Link to='/login'>Connectez-vous</Link> </p>
</form>
        </div>
    );
}

export default Register;