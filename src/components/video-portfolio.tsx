"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

const videos = [
  {
    id: "fYTbbgbOXgs",
    title:
      "TRI VUBONER PRIO MUHAMMAD (PBUH) | SLIDESHOW ISLAMIC NASHEED PROJECT",
    description:
      "A beautiful Islamic nasheed slideshow project showcasing motion graphics and video editing skills.",
    thumbnail: `https://img.youtube.com/vi/fYTbbgbOXgs/maxresdefault.jpg`,
    tags: ["Motion Graphics", "Video Editing", "Islamic Content"],
    embedUrl:
      "https://www.youtube.com/embed/fYTbbgbOXgs?si=PSgdfa7S6Chn2NRd&autoplay=1",
    category: "Motion Graphics",
  },
  {
    id: "Nr3XIPYr9M4",
    title: "Professional Logo Animation",
    description:
      "Dynamic logo animation showcasing brand identity and motion design expertise.",
    thumbnail: `https://img.youtube.com/vi/Nr3XIPYr9M4/maxresdefault.jpg`,
    tags: ["Logo Animation", "Brand Identity", "After Effects"],
    embedUrl:
      "https://www.youtube.com/embed/Nr3XIPYr9M4?si=K9TrUEgLRzfDhnAo&autoplay=1",
    category: "Logo Animation",
  },
  {
    id: "--anKmEqy0k",
    title: "Color Correction & Grading",
    description:
      "Professional color correction and grading techniques for cinematic video production.",
    thumbnail: `https://img.youtube.com/vi/--anKmEqy0k/maxresdefault.jpg`,
    tags: ["Color Correction", "Video Editing", "Cinematic"],
    embedUrl:
      "https://www.youtube.com/embed/--anKmEqy0k?si=i916jceBXJ8p8HRP&autoplay=1",
    category: "Color Correction",
  },
  {
    id: "gxtWRHMeVRs",
    title: "Advanced Video Editing",
    description:
      "Showcase of advanced video editing techniques and creative storytelling.",
    thumbnail: `https://img.youtube.com/vi/gxtWRHMeVRs/maxresdefault.jpg`,
    tags: ["Video Editing", "Storytelling", "Creative"],
    embedUrl:
      "https://www.youtube.com/embed/gxtWRHMeVRs?si=vLJBUrb86foufJGG&autoplay=1",
    category: "Video Editing",
  },
];

export function VideoPortfolio() {
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handleVideoPlay = (videoId: string) => {
    setPlayingVideo(videoId);
  };

  const handleVideoClose = () => {
    setPlayingVideo(null);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 px-4">
            Video{" "}
            <span className="bg-gradient-to-r from-red-500 to-gray-900 dark:from-red-400 dark:to-gray-100 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Explore my creative video projects showcasing motion graphics, logo
            animations, and professional video editing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="group hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <div className="relative aspect-video overflow-hidden">
                {playingVideo === video.id ? (
                  <div className="relative w-full h-full">
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                    <button
                      onClick={handleVideoClose}
                      className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <>
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className={`object-cover transition-transform duration-500 ${
                        hoveredVideo === video.id ? "scale-110" : "scale-100"
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => handleVideoPlay(video.id)}
                        className="w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transform group-hover:scale-110 transition-all duration-300 shadow-lg"
                      >
                        <Play className="w-6 h-6 ml-1" fill="currentColor" />
                      </button>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-600 text-white">
                        {video.category}
                      </Badge>
                    </div>
                  </>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2">
                  {video.title}
                </CardTitle>
                <CardDescription className="text-gray-600 line-clamp-2">
                  {video.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {video.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="bg-red-600 hover:bg-red-700 text-white flex-1"
                    onClick={() => handleVideoPlay(video.id)}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Video
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      window.open(
                        `https://www.youtube.com/watch?v=${video.id}`,
                        "_blank"
                      )
                    }
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            <ExternalLink className="w-5 h-5 mr-2" />
            View Full Channel
          </Button>
        </div>
      </div>
    </section>
  );
}
