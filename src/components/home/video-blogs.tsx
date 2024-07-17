import { Link } from 'react-router-dom';

export default function VideoBlogs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Video Blogs
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore our collection of video blogs covering travel experiences,
            product demos, and expert interviews.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Link
            to="#"
            className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Video Thumbnail"
              width={400}
              height={225}
              className="aspect-video w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 p-4 transition-opacity duration-300 group-hover:opacity-0">
              <div className="flex h-full w-full items-center justify-center">
                <PlayIcon className="h-12 w-12 text-white" />
              </div>
            </div>
            <div className="bg-background p-4">
              <h3 className="text-lg font-medium line-clamp-2">
                Exploring the Wonders of Bali: A Travel Vlog
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                Join us as we discover the breathtaking landscapes, vibrant
                culture, and delicious cuisine of Bali.
              </p>
            </div>
          </Link>
          <Link
            to="#"
            className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1536584754829-12214d404f32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QmFja3BhY2t8ZW58MHwwfDB8fHww"
              alt="Video Thumbnail"
              width={400}
              height={225}
              className="aspect-video w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 p-4 transition-opacity duration-300 group-hover:opacity-0">
              <div className="flex h-full w-full items-center justify-center">
                <PlayIcon className="h-12 w-12 text-white" />
              </div>
            </div>
            <div className="bg-background p-4">
              <h3 className="text-lg font-medium line-clamp-2">
                Unpacking the bag: Remote Developing and Traveling
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                Follow along as we share our experiences working remotely while
                exploring new destinations.
              </p>
            </div>
          </Link>
          <Link
            to="#"
            className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1681747971522-2d7a04c78321?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Video Thumbnail"
              width={400}
              height={225}
              className="aspect-video w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 p-4 transition-opacity duration-300 group-hover:opacity-0">
              <div className="flex h-full w-full items-center justify-center">
                <PlayIcon className="h-12 w-12 text-white" />
              </div>
            </div>
            <div className="bg-background p-4">
              <h3 className="text-lg font-medium line-clamp-2">
                Customer Interview: The adventure of a lifetime
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                Hear from our customers about their unforgettable experiences
                with our products.
              </p>
            </div>
          </Link>
          <Link
            to="#"
            className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1570802378140-42383ae50e07?q=80&w=1624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Video Thumbnail"
              width={400}
              height={225}
              className="aspect-video w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 p-4 transition-opacity duration-300 group-hover:opacity-0">
              <div className="flex h-full w-full items-center justify-center">
                <PlayIcon className="h-12 w-12 text-white" />
              </div>
            </div>
            <div className="bg-background p-4">
              <h3 className="text-lg font-medium line-clamp-2">
                Exploring the Hidden Gems of Europe: A Travel Vlog
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                Join us as we discover the lesser-known but equally stunning
                destinations across Europe.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function PlayIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}
