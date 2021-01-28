import * as React from "react";
import '../Navigation/Navigation.scss'
const links = [
    {
        name:"start"
    },
    {
        name:"about"
    },
    {
        name:"portfolio"
    },
    {
        name:"showroom"
    },
    {
        name:"contact"
    },
]


export const Navigation = () => {
   return (
    <nav className="nav">
    <ul>
        {links.map((link) => (
            <li>
            <a href="">{link.name}</a>
            </li>
        ))}
    </ul>
</nav>
   )
}