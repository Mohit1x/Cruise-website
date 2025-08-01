export default function HeroComponent() {
  return (
    <div className="relative w-full h-[60vh] overflow-hidden rounded">
      <img
        src="/hero-banner-1.png"
        alt="Blurred Background"
        className="absolute top-0 left-0 w-full h-full object-cover filter blur-lg scale-110 z-0 hidden"
      />

<div className="relative w-full h-full flex items-center justify-center z-10 px-2 rounded overflow-hidden">
  <img
    src="/hero-banner-1.png"
    alt="Cruise Banner"
    className="h-full w-full object-contain rounded-inherit"
  />
</div>
    </div>
  );
}
