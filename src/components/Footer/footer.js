import ThemeContext from "../../context/themeContext";

const Footer = (props) => (
  <ThemeContext.Consumer>
    {({theme}) => (
      <div className={`text-center mb-3 text-${theme}`}>
        {" "}
        Noclegi 2022
      </div>
    )}
  </ThemeContext.Consumer>
);

export default Footer;

