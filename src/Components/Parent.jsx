import Child from "./Child.jsx";
import {useState} from "react";

function Parent() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div>
                <h1>Parent Component</h1>
                <Child name="Witthaya"/>
                <Child name='Claude'/>
            </div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>

        </>
    )
}

export function UserForm() {
    const [user, setUser] = useState({name: '', email: ''});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    return (
        <form>
            <input
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
            />
        </form>
    );
}

export default Parent


