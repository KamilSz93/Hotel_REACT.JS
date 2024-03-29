import { useContext } from "react";
import ThemeContext from "../../context/themeContext";

const Footer = (props) => {
  const theme = useContext(ThemeContext);
  
  return (
    <div className={`text-center mb-3 text-${theme.color}`}>
      {" "}
      Noclegi 2022
    </div>
  )
}

export default Footer;

