import "./App.css";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./AppRouter";

function App() {
  return (
    <>
      <div style={{ display: "flex", gap: "10px", flexDirection: "row" }}>
        <a href="/users" target="_self">
          Users
        </a>
        <a href="/posts" target="_self">
          Posts
        </a>
      </div>
      <div className="card">
        <RouterProvider router={AppRouter} />
      </div>
    </>
  );
}

export default App;
