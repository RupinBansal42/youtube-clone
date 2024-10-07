const VideoCart = ({ props }) => {
  const { snippet, statistics } = props;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        alt="thumbnail"
        className="rounded-lg"
        src={thumbnails.medium.url}
      ></img>
      <ul>
        <li className="font-bold">{title}</li>
        <li className="px-2">{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ props }) => {
  return (
    <div className=" p-1 m-1 border border-red-400">
      <VideoCart props = {props} />
    </div>
  );
};
export default VideoCart;
