import { RouterProvider } from "react-router-dom";
import airbnbCloneRouter from "./routes";
import { Toaster } from "react-hot-toast";
import "./assets/css/style.css";

function App() {
  return (
    <>
      <RouterProvider router={airbnbCloneRouter} />;
      <Toaster />
    </>
  );
}

export default App;
