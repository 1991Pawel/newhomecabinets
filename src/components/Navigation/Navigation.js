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
        name:"Showroom"
    },
    {
        name:"Contact"
    },
]



export const Navigation = () => {
   return (
    <nav className="nav">
    <ul>
        {links.map((link) => (
            <li key={link.name}>
            <a href="">{link.name}</a>
            </li>
        ))}
    </ul>
</nav>
   )
}