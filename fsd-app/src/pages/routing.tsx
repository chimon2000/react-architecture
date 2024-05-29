import { lazy } from "react";
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import { getProfile } from "../entities/profile/api/profile";
import { getFeed } from "../entities/feed/api/feed-api";

const FeedPage = lazy(() => import("./feed/feed-page"));
const ProfilePage = lazy(() => import("./profile/profile-page"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route
        index
        loader={async () => {
          const feed = await getFeed();

          return { feed };
        }}
        element={<FeedPage />}
      />
      <Route
        path="profile"
        loader={async () => {
          const profile = await getProfile();

          return { profile };
        }}
        element={<ProfilePage />}
      />
    </Route>
  )
);

function Root() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
