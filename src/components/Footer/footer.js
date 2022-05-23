import { useContext } from "react";
import ThemeContext from "../../context/themeContext";

const Footer = (props) => {
  const color = useContext(ThemeContext);
  
  return (
    <div className={`text-center mb-3 text-${color.theme}`}>
      {" "}
      Noclegi 2022
    </div>
  )
}

export default Footer;

