import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useState,useEffect}from "react";
import auth from '../firebaseConfig';
import { useNavigate} from "react-router-dom";


export const AuthContext=createContext(null);


export default function AuthState({children}){

    const [registerFormData,setRegisterFormData]=useState({
        name:'',
        email:'',
        password:'',
    });
    const [loginFormData,setLoginFormData]=useState({
        email:'',
        password:'',
    })

    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);
    const Navigate=useNavigate()



    function registerWithFirebase(){
        setLoading(true)

        const{email,password}=registerFormData
        return createUserWithEmailAndPassword(auth,email,password);
    }

    function loginWithFirebase(){
        setLoading(true)
        const {email,password}=loginFormData;

        return signInWithEmailAndPassword(auth,email,password);
    }
    function handleLogout(){
        return signOut(auth);
    }
    useEffect(()=>{
        const checkAuthState =
        onAuthStateChanged
        (auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false)
         });

        return ()=>{
            checkAuthState();
        };

    },[]);

    useEffect(()=>{
        if(user)Navigate('/profile')

    },[user])

    if(loading)return <h1>Loading please wait</h1>



   // console.log(user,"users");

    return (
    <AuthContext.Provider 
    value={{
        registerFormData,
        setRegisterFormData,
        registerWithFirebase,
        loading,
        user,
        loginFormData,
        setLoginFormData,
        loginWithFirebase,
        handleLogout,
        setUser,
        setLoading
    }}
    >
        {children}
        </AuthContext.Provider>
    )
}
