import React from 'react'
import '../Footer/Footer.scss'


export const Footer = () =>  (
    <div className="footer">
    <div className="feature">
    <div className="feature__item">
        Free delivery <span>$50 & over</span>
    </div>
    <div className="feature__item">
        Next day delivery.
        <span>order before 8pm</span>
    </div>
    <div className="feature__item">
        free returns
    </div>

    </div>
    <div className="socials">
    <div className="socials__inner">
    <div className="socials__item">
            Facebook
        </div>
        <div className="socials__item">
            twitter
        </div>
        <div className="socials__item">
            instagram
        </div>
        <div className="socials__item">
            youtube
        </div>
    </div>
    </div>
    <p className="footer__copyright">© 2021 P.L All Rights Reserved</p>
    </div>
)