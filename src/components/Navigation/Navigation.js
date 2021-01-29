import * as React from "react";
import '../Navigation/Navigation.scss'
const links = [
    {
        name:"Home"
    },
    {
        name:"about"
    },
    {
        name:"Portfolio"
    },
    
    {
        name:"Contact & Quote"
    },
]



export const Navigation = ({open}) => {
   return (
    <nav className="nav">
    <ul className={open ? 'active' : null}>
        {links.map((link) => (
            <li key={link.name}>
            <a href="">{link.name}</a>
            </li>
        ))}
    </ul>
</nav>
   )
}