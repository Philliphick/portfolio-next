"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

 export default function HeroParallaxDemo() {

 let products = [
    {
      title: "CodeCollab - Fullstack application - React, Next.js, Express.js, MongoDB",
      link: "/CodeCollab",
      thumbnail:
        "/CodeCollab.png",
    },
    {
      title: "CounterCulture - Music Blog - HTML, Tailwind",
      link: "/CounterCulture",
      thumbnail:
        "/CounterCulture.png",
    },
    {
      title: "Geography Quiz - Single page Application",
      link: "/Quiz",
      thumbnail:
        "/Quiz-SPA.png",
    },
  
    {
      title: "CodeCollab - Fullstack application - React, Next.js, Express.js, MongoDB",
      link: "/CodeCollab",
      thumbnail:
        "/CodeCollab.png",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    },
    {
      title: "Coming Soon - KettleOn - Remote Team Building Platform", 
      link: "",
      thumbnail:
        "/KettleOnComing.png",
    },
  
    {
      title: "Spy Infiltration - Text-based game - JavaScript, HTML, Tailwind",
      link: "/TextGame",
      thumbnail:
        "/spyinfiltration.png",
    },
    {
      title: "Weather App - External API - Next.js, Axios, Tailwind",
      link: "/WeatherApp",
      thumbnail:
        "/WeatherApp.png",
    },
    {
      title: "Tailwind Master Kit",
      link: "/PlantPals",
      thumbnail:
        "/PlantPals.png",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },
  
    {
      title: "Coming Soon - KettleOn - Remote Team Building Platform", 
      link: "",
      thumbnail:
        "/KettleOnComing2.png",
    },
    {
      title: "CodeCollab - Fullstack application - React, Next.js, Express.js, MongoDB",
      link: "/CodeCollab",
      thumbnail:
        "/CodeCollab.png",
    },
    {
      title: "Back to the top", 
      link: "#",
      thumbnail:
        "/BackToTheTop.png",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    },
  ];
  
  return (<HeroParallax products={products} />);
}
 