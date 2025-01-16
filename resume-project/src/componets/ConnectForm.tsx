import { useState } from "react";
import "./componetStyles/ConnectFormStyle.css";
function ConnectForm(){
    const [name, setName] = useState({firstName: '',lastName: ''});
    const [email, setEmail] = useState({email: ''});
    const [message, setMessage] = useState({message: ''});

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        window.location.reload();
        console.log(name);
        console.log(email);
        console.log(message);
    }

    return (
        <div className="container-form text-center">
            <div className="row">
                <div className="col">
                    <h1>Connect with me</h1>
                </div>
            </div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <h1>First Name</h1>
                <input 
                onChange={(e)=>setName({...name, firstName: e.target.value})} 
                type="text" 
                value={name.firstName} 
                />
                <h1>Last Name</h1>
                <input 
                onChange={(e)=>setName({...name, lastName: e.target.value})}
                type="text" 
                value = {name.lastName} 
                />
                <h1>Email</h1>
                <input 
                onChange={(e)=>setEmail({email: e.target.value})}
                type="text" 
                value = {email.email} 
                />
                <h1>Message</h1>
                <input 
                onChange={(e)=>setMessage({message: e.target.value})}
                type="text" 
                value = {message.message} 
                />
                <div className="row">
                    <button type="submit">Submit</button>
                </div>
                

            </form>
        </div>
    )
};

export default ConnectForm;
