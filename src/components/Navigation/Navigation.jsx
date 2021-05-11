import { React } from "react";
import { Link } from "react-router-dom";
import './Navigation.css'

const links = [
  {
    to: '/cursor.edu-hw-thunk-redux/',
    label: 'Home Page'
  },
  {
    to: '/cursor.edu-hw-thunk-redux/adduser',
    label: 'Add user'
  },
  {
    to: '/cursor.edu-hw-thunk-redux/users',
    label: 'Users'
  }
];

export const Navigation = () => (
  <nav className="navigation">
    <ul className="navigation__menu">
      {links.map(link => (
        <li className="navigation__item" key={link.to}>
          <Link to={link.to}>{link.label}</Link>
        </li>
      ))}
    </ul>
  </nav>
)