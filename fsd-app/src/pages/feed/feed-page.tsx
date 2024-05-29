import { useLoaderData, useNavigation } from "react-router-dom";
import FeedList from "../../entities/feed/ui/feed-list/feed-list";

export default function FeedPage() {
  const navigation = useNavigation();
  const data = useLoaderData() as { feed: [] };

  if (navigation.state === "loading") return <>"Loading..."</>;

  return (
    <div>
      <div>Feed page</div>
      <FeedList feed={data.feed} />
    </div>
  );
}
