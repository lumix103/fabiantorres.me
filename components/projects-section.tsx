"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { LinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
export default function ProjectSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const progress = count > 0 ? (current / (count - 1)) * 100 : 0;

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="w-full">
      <Carousel setApi={setApi} className="w-full">
        <div className="flex items-center justify-end gap-2 mb-2">
          <h2 className="text-white text-lg font-light sticky top-0 bg-black z-10 mr-auto">
            Projects
          </h2>
          <CarouselPrevious className="static  translate-y-0  hidden md:flex" />
          <CarouselNext className="static  translate-y-0  hidden md:flex" />
        </div>
        <CarouselContent>
          <CarouselItem>
            <Card className="border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="">
                  <a
                    href="https://fabs-drive-clone.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium flex items-center gap-2 underline"
                  >
                    Drive Clone <LinkIcon className="size-4" />
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex  items-center justify-center ">
                <Image
                  className="aspect-video rounded-lg"
                  src="/drive-clone-thumbnail.png"
                  alt="Drive Clone"
                  width={1920}
                  height={1080}
                />
              </CardContent>
              <CardFooter className="*:bg-pink-400 *:text-zinc-950 flex gap-2">
                <Badge>Tailwind CSS</Badge>
                <Badge>Next.js</Badge>
                <Badge>Single Store</Badge>
              </CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card className="border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="">
                  <a
                    href="https://fabiantorres.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium flex items-center gap-2 underline"
                  >
                    Portfolio Website <LinkIcon className="size-4" />
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex  items-center justify-center ">
                <Image
                  className="aspect-video rounded-lg"
                  src="/portfolio-thumbnail.png"
                  alt="Portfolio Website"
                  width={1920}
                  height={1080}
                />
              </CardContent>
              <CardFooter className="*:bg-pink-400 *:text-zinc-950 flex gap-2">
                <Badge>Tailwind CSS</Badge>
                <Badge>Next.js</Badge>
                <Badge>Motion</Badge>
              </CardFooter>
            </Card>
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      {/* Progress indicator */}
      <div className="w-full h-2  mt-4 overflow-hidden bg-zinc-800">
        <motion.div
          className="h-full bg-pink-400 "
          initial={{ width: 10 }}
          animate={{ width: `${progress + 1}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>

      {/* Slide counter */}
      <div className="text-sm text-muted-foreground mt-2">
        Project {current + 1} of {count}
      </div>
    </section>
  );
}
