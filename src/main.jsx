import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import './App.css'
import Parent, {UserForm} from "./Components/Parent.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        main.jsx
        <Parent/>
        <UserForm/>
    </StrictMode>
)
