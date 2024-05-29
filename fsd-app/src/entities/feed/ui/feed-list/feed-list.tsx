import FeedRow from "../feed-row/feed-row";

export default function FeedList({ feed }: { feed: [] }) {
  return (
    <div>
      {feed.map(() => (
        <FeedRow />
      ))}
    </div>
  );
}
