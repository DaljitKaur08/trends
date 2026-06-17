import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="error-page container">

      <div className="error-box">

        <h1>404</h1>

        <p>This page does not exist or was moved.</p>
        <p>Please check the URL or return home.</p>

        <Link className="btn btn-primary" to="/">
          Go Home
        </Link>

      </div>

    </section>
  );
}

export default NotFound;