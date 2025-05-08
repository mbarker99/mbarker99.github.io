import React from "react";

export default function NavBar() {
  return (
    <nav className="navbar">
        <div className="navbar-left">
            <a href="/" className="text-3xl font-bold">
                Michael Barker
            </a>
        </div>

        <div className="navbar-right">
            <a href="/" className="logo">
                Michael Barker
            </a>
        </div>
    </nav>
  );
}
