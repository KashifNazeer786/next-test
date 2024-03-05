"use client";
import { ParallaxScroll } from "./ui/parallax-scroll";

export function ParallaxScrollDemo() {
  return <ParallaxScroll images={images} />;
}

const images = [
  {
    src: '/assets/figma.png',
    title: 'Figma'
  },
  {
    src: '/assets/selenium.png',
    title: 'Selenium'
  },
  {
    src: '/assets/flutter.png',
    title: 'Flutter'
  },
  {
    src: '/assets/mongo.png',
    title: 'MongoDB'
  },
  {
    src: '/assets/aws.png',
    title: 'AWS'
  },
  {
    src: '/assets/azure.png',
    title: 'Azure'
  },
  {
    src: '/assets/html.png',
    title: 'HTML'
  },
  {
    src: '/assets/react.png',
    title: 'React.JS'
  },
  {
    src: '/assets/vue.png',
    title: 'Vue.JS'
  },
  {
    src: '/assets/redis.png',
    title: 'Redis'
  },
  {
    src: '/assets/my-sql.png',
    title: 'MySQL'
  },
  {
    src: '/assets/docker.png',
    title: 'Docker'
  },
  {
    src: '/assets/node.png',
    title: 'Node.JS'
  },
  {
    src: '/assets/python.png',
    title: 'Python'
  },
  {
    src: '/assets/laravel.png',
    title: 'Laravel'
  },
  {
    src: '/assets/golang.png',
    title: 'Golang'
  },
  {
    src: '/assets/nest.png',
    title: 'Nest.JS'
  },
  {
    src: '/assets/cloud.png',
    title: 'Google Cloud'
  },
];
