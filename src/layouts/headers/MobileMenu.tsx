 
import  { useState } from 'react'
import menu_data from './menu_data' 
import { Link } from 'react-router-dom';


export default function MobileMenu() {

  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (link.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>

      <div className="mean-bar"> 
        <nav className="mean-nav">
          <ul>
            {menu_data.map((item, i) => (
              <li key={i} className={`${item.has_dropdown && "has-dropdown"} ${navTitle === item.title ? "dropdown-opened" : ""}`}>
                <a href={item.link} className="linkstyle" onClick={(e) => handleClick(e, item.link)}>{item.title}</a>
                {item.has_dropdown &&
                  <>
                    <ul className="sub-menu" style={{ display: navTitle === item.title ? "block" : "none" }}>
                      {item.sub_menus?.map((sub_menu, index) => (
                        <li key={index}><Link to={sub_menu.link}>{sub_menu.title}</Link></li>
                      ))}
                    </ul>
                    <a className={`mean-expand ${navTitle === item.title ? "mean-clicked" : ""}`}
                      onClick={() => openMobileMenu(item.title)}
                      style={{ fontSize: "18px", cursor: "pointer" }}><i className="fal fa-plus"></i></a>
                  </>
                }
              </li>
            ))}
          </ul>
        </nav>
      </div>

    </>
  )
}
