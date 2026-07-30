export const site = {
  name: "AARKON",
  url: "https://www.aarkcon.com",
  description:
    "AARKON is an independent software lab building local-first tools, verification infrastructure, and operational systems.",
  mission:
    "AARKON is an independent software lab building local-first tools, verification infrastructure, and operational systems.",
  summary:
    "A home for focused products and experiments shaped by clarity, trust, and careful engineering.",
  links: {
    github: "https://github.com/nowayhoseadev-cell",
    x: "https://x.com/aarkon",
    contact: "mailto:hello@aarkon.com",
  },
  assets: {
    mark: "/brand/aarkon-mark.png",
    emblem: "/brand/aarkon-emblem-original.png",
  },
};

export const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "Principles", href: "#principles" },
  { label: "GitHub", href: site.links.github },
];

export const principles = [
  {
    title: "Useful Before Loud",
    description:
      "Build for real workflows before broad claims.",
  },
  {
    title: "Explainable Systems",
    description:
      "Make behavior, risk, and tradeoffs visible.",
  },
  {
    title: "Trustworthy Records",
    description:
      "Use verification where records need durability and auditability.",
  },
  {
    title: "Operator Control",
    description:
      "Keep important actions intentional, reviewable, and reversible where possible.",
  },
] as const;
