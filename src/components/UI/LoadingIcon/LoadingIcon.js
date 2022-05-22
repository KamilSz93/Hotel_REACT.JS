import ThemeContext from "../../../context/themeContext";

export default function LoadingIcon(props) {
    return (
      <div className="d-flex justify-content-center">
        <ThemeContext.Consumer>
          {({theme}) => (
            <div className={`spinner-border text-${theme} mt-4 `} role="status">
              <span className="visually-hidden">Ladowanie...</span>
            </div>
          )}
        </ThemeContext.Consumer>
      </div>
    );
}