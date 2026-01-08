import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const ErrorMessage = () => {
    return(
        <p className="error-message"><FontAwesomeIcon icon={faTriangleExclamation}/><strong>Error:</strong> API Fetch Request Failed</p>
    )
}

export default ErrorMessage;