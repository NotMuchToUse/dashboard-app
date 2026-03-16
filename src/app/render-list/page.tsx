// "use client";

// import { Button } from "@/components/ui/button";
// import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Photos {
  albumId?: number;
  id?: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

// React Thuần

// const Page = () => {
//   const [pokemon, setPokemon] = useState<Photos[]>([]);
//   const limit = "?_limit=30";
//   const handleFn = async () => {
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/photos/${limit}`,
//     );
//     const data = await res.json();
//     console.log(data);
//     setPokemon(data);
//   };
//   return (
//     <div className="flex flex-col gap-2">
//       <span>Render danh sách</span>
//       <Button onClick={handleFn}>Render</Button>
//       <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 grid-flow-rows gap-4">
//         {pokemon.map((photo, index) => (
//           <Item
//             key={photo.id ?? index}
//             title={photo.title}
//             thumbnailUrl={photo.thumbnailUrl}
//             url={photo.url}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Page;

// export function Item({ title, thumbnailUrl, url }: Photos) {
//   return (
//     <div className="border p-2 flex flex-col gap-2 shadow-sm">
//       <p className="text-sm font-semibold text-neutral-800">{title}</p>
//       <div>
//         <img src={thumbnailUrl} alt="thumnail" />
//       </div>
//       <a
//         href={url}
//         className="text-xs font-medium hover:border-b hover:border-amber-500"
//       >
//         {title}
//       </a>
//     </div>
//   );
// }

//  Next

const fetchFn = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos/?_limit=100",
    {
      next: {
        revalidate: 3600, // cache trong 1h
      },
    },
  );

  if (!res.ok) {
    throw new Error("Lấy data không thành công!");
  }

  return res.json();
};

const Page = async () => {
  const photoApi: Photos[] = await fetchFn();
  return (
    <div className="flex flex-col gap-2">
      <span>Render danh sách</span>
      {/* <Button onClick={fetchFn}>Render</Button> */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 grid-flow-rows gap-4">
        {photoApi.map((photo, index) => (
          <Item
            key={photo.id ?? index}
            title={photo.title}
            thumbnailUrl={photo.thumbnailUrl}
            url={photo.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;

export function Item({ title, thumbnailUrl, url }: Photos) {
  return (
    <div className="border p-2 flex flex-col gap-2 shadow-sm">
      <p className="text-sm font-semibold text-neutral-800">{title}</p>
      <div className="relative aspect-square">
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 12vw"
          className="object-cover"
          loading="eager"
        />
      </div>
      <Link
        href={url}
        target="_blank"
        className="text-xs font-medium text-blue-600 hover:underline truncate"
      >
        {title}
      </Link>
    </div>
  );
}
