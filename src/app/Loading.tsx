export default function Loading() {
  return (
    <div className="loader flex items-center justify-center min-h-screen">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
