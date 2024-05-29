import { useNavigate } from "react-router";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h2>Something went Wrong🥲</h2>
      <div>
        <button onClick={() => navigate("/")}>Go back</button>
      </div>
    </div>
  );
}

export default PageNotFound;
