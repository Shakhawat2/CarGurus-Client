import { RouterProvider } from "react-router-dom/dist";
import { router } from "./Routes/Router/Router";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
