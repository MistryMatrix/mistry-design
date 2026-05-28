export type Project = {
  name: string;
  tag: string;
  description: string;
  url: string;
  /** Short URL shown in the fallback tile if the iframe is blocked. */
  displayUrl: string;
};

export const projects: Project[] = [
  {
    name: "The Bent Spoon",
    tag: "Ice Cream Shop · Princeton NJ",
    description:
      "A neighborhood institution. Site built to match their handcrafted identity.",
    url: "https://the-bent-spoon.vercel.app/",
    displayUrl: "the-bent-spoon.vercel.app",
  },
  {
    name: "Nassau Barbers",
    tag: "Barbershop · Princeton NJ",
    description: "Clean, direct, and built for local search.",
    url: "https://nassau-barbers.vercel.app/",
    displayUrl: "nassau-barbers.vercel.app",
  },
  {
    name: "La Mezzaluna",
    tag: "Italian Restaurant · Princeton NJ",
    description: "Old-world warmth, considered editorial layout.",
    url: "https://la-mezzaluna.vercel.app/index.html",
    displayUrl: "la-mezzaluna.vercel.app",
  },
];
