import { Link } from "react-router-dom";
import menu_data from "./menu_data";

 

export default function NavMenu() {
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
      <ul>
        {menu_data.map((item, i) => (
          <li key={i} className={`${item.has_dropdown && "has-dropdown"}`}>
            <a href={item.link} onClick={(e) => handleClick(e, item.link)}>{item.title}</a>
            {item.has_dropdown &&
              <ul className="sub-menu">
                {item.sub_menus?.map((sub_menu, index) => (
                  <li key={index}><Link to={sub_menu.link}>{sub_menu.title}</Link></li>
                ))}
              </ul>
            }
          </li>
        ))} 
      </ul>
    </>
  )
}
