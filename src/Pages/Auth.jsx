import { useEffect, useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut, sendEmailVerification } from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [view, setView] = useState(false);

    useEffect(() => {
        console.log(auth?.currentUser);
    }, []);

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            sendEmailVerification();
            alert("Signed in successfully");
        } catch(err) {
            console.error(err);
            alert("There was a problem");

        }
    };

    const googleSignIn = async () => {
        try {
            signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.log(err);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            console.log("signed out");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <input
                value={email}
                type="email"
                placeholder='Email...'
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                value={password}
                type={view ? "text" : "password"}
                placeholder="Password..."
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={() => setView(!view)}></button>
            <button onClick={() => createUserWithEmailAndPassword(auth, email, password)}>Create User</button>
            <div>
                <button onClick={signIn}>Sign In</button>
            </div>
            <div>
                <button onClick={() => sendEmailVerification(auth.currentUser)}>
                    Verify Email
                </button>
            </div>
            <div>
                <button onClick={googleSignIn}>Sign In With Google</button>
            </div>
            <div>
                <button onClick={logout}>Log Out</button>
            </div>
        </div>
    )
}

export default Auth