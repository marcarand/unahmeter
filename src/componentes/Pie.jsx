import React from "react";
import logo from "./logo.png";
import logoDiscord from "./Discord-Logo-Color.svg";
import logoGitHub from "./logoGitHub.png";
import logoTelegram from "./Telegram_logo.svg";

function Pie() {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img src={logo} alt={"logo"} className="bi" width="30" height="24" />
                   </a>
                   <span className="text-muted">© 2021 UNaH Meter, Inc</span>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="https://discordapp.com/users/659785268563542025"><img className="bi" width="24" height="24" src={logoDiscord} alt={"logoDiscord"} /></a></li>
                    <li className="ms-3"><a className="text-muted" href="https://github.com/marcarand"><img className="bi" width="24" height="24" src={logoGitHub} alt={"logoGitHub"} /></a></li>
                    <li className="ms-3"><a className="text-muted" href="https://t.me/marcarand"><img className="bi" width="24" height="24" src={logoTelegram} alt={"logoTelegram"} /></a></li>
                </ul>
            </footer>
        </div>
    );
};

export default Pie;
