  // src/pages/NotFoundPage.jsx
  import { Link } from "react-router-dom";
  const NotFoundPage = () => {
    return (
      <div
        className="page-container"
        style={{
          textAlign: "center",
          minHeight: "calc(100vh - 200px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="./images/error.png"
          alt="Page Not Found"
          style={{ marginTop: "20px", maxWidth: "240px", height: "auto" }}
        />
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <p>
          You might want to return to the{" "}
          <button style={{ background: "aqua", border: "2px solid aqua", color: "white", padding: "10px 20px", borderRadius: "5px" }}>
            <Link to="/" className="btn">
              Home Page
            </Link>
          </button>
        </p>

      </div>
    );
  };
  export default NotFoundPage;
