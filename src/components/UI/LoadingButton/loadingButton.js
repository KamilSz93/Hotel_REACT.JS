export default function LoadingButton (props) {

    const className = props.className || 'btn-primary';

    return (
        props.log
            ? (
                <button className={`btn ${className} mt-3 `} type="button" disabled>
                  <span className="spinner-border spinner-border-sm"role="status"aria-hidden="true"></span>
                  <span className="sr-only">Loading...</span>
                </button>
            ) : <button {...props} className={`btn ${className} mt-2`}>{ props.children }</button>
    );
}