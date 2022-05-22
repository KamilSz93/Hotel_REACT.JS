export default function LoadingIcon(props) {
    return (
        <div className="d-flex justify-content-center">
        <div className={`spinner-border text-${props.theme} mt-4 `} role="status">
            <span className="visually-hidden">Ladowanie...</span>
          </div>
        </div>
    );
}