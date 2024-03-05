"use client";
import { ParallaxScroll } from "./ui/parallax-scroll";

export function ParallaxScrollDemo() {
  return <ParallaxScroll images={images} />;
}

const images = [
  {
    src: '/assets/figma.svg',
    title: 'Figma'
  },
  {
    src: '/assets/selenium.svg',
    title: 'Selenium'
  },
  {
    src: '/assets/flutter.svg',
    title: 'Flutter'
  },
  {
    src: '/assets/mongo.svg',
    title: 'MongoDB'
  },
  {
    src: '/assets/aws.svg',
    title: 'AWS'
  },
  {
    src: '/assets/azure.svg',
    title: 'Azure'
  },
  {
    src: '/assets/html.svg',
    title: 'HTML'
  },
  {
    src: '/assets/react.svg',
    title: 'React.JS'
  },
  {
    src: '/assets/vue.svg',
    title: 'Vue.JS'
  },
  {
    src: '/assets/redis.svg',
    title: 'Redis'
  },
  {
    src: '/assets/my-sql.svg',
    title: 'MySQL'
  },
  {
    src: '/assets/docker.svg',
    title: 'Docker'
  },
  {
    src: '/assets/node.svg',
    title: 'Node.JS'
  },
  {
    src: '/assets/python.svg',
    title: 'Python'
  },
  {
    src: '/assets/laravel.svg',
    title: 'Laravel'
  },
  {
    src: '/assets/golang.svg',
    title: 'Golang'
  },
  {
    src: '/assets/nest.svg',
    title: 'Nest.JS'
  },
  {
    src: '/assets/cloud.svg',
    title: 'Google Cloud'
  },
];
