import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";

const App = () => {
  return (
    <div style={{ maxWidth: "600px", width: "96%", margin: "0 auto", padding: "10px 0" }}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
