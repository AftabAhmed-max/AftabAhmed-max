import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CollectionCardProps {
  title: string;
  image: string;
  link: string;
}

export function CollectionCard({ title, image, link }: CollectionCardProps) {
  return (
    <Link href={link} className="group relative block w-full overflow-hidden rounded-default">
      <div className="relative aspect-[16/9] md:aspect-[3/4] lg:aspect-[16/9] w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

        <div className="absolute bottom-0 left-0 p-8 w-full flex items-end justify-between">
          <div className="flex flex-col text-white">
            <span className="font-body text-[10px] font-medium tracking-[1.5px] uppercase mb-2">
              Collection
            </span>
            <h3 className="font-display text-3xl md:text-[42px] leading-tight font-light">
              {title}
            </h3>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
             <ArrowRight className="text-white w-5 h-5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
