import { useNavigate } from "react-router-dom";

function Gallery() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1></h1>

      <img
        src="./images/image3.jpg"
        alt="/images/image3.jpg"
        width="200"
        height={200}
      />

      <img
        src="/images/image2.jpg"
        alt="photo2"
        width="200"
        height={200}
      />

      <br />

      <button
        onClick={() => navigate("/countdown")}
      >
        One Last Thing
      </button>
    </div>
  );
}

export default Gallery;