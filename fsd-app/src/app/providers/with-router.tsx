import { RouterProvider } from "react-router-dom";
import { router } from "../../pages/routing";

export const withRouter = (component: () => React.ReactNode) => () =>
  <RouterProvider router={router} />;
