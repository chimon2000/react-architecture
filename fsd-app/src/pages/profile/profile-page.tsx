import { useNavigation, useLoaderData } from "react-router-dom";

import ProfileDetails from "../../entities/profile/ui/profile-details/profile-details";
import ProfileHeader from "../../entities/profile/ui/profile-header/profile-header";

export default function ProfilePage() {
  const navigation = useNavigation();
  const data = useLoaderData() as {};

  if (navigation.state === "loading") return <>"Loading..."</>;

  return (
    <div>
      <ProfileHeader />
      <ProfileDetails profile={data} />
    </div>
  );
}
