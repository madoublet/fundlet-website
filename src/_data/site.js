module.exports = {
  url: "https://www.fundlet.app",
  name: "Fundlet",
  legalName: "Fundlet",
  tagline: "Beautiful branded fundraisers for Shopify and Square stores",
  description:
    "Fundlet is an app for Shopify and Square that lets merchants run branded fundraisers for schools, sports teams, and churches directly from their own store. Organizations sell the merchant's products to their community, every sale is tracked to a participant automatically, and payouts are calculated for you.",

  // Default social sharing image (absolute URL built at render time).
  ogImage: "/resources/img/tracking-dashboard.png",

  shopifyAppUrl: "https://apps.shopify.com/fundlet",
  squareAppUrl: "https://raise.fundlet.app",

  publisher: {
    name: "Next Half",
    url: "https://nexthalf.app/"
  },

  // Shopify App Store rating.
  // ratingCount MUST be the real number of ratings. Schema.org AggregateRating
  // is only emitted when ratingCount is set — Google treats a rating without a
  // count as invalid markup, so leaving this null is the safe default.
  rating: {
    value: "4.9",
    ratingCount: 22,
    best: "5"
  },

  // Shopify App Store reviews shown on the homepage and emitted as schema.org
  // Review objects. Verbatim quotes — do not paraphrase.
  reviews: [
    {
      author: "Popus Gourmet Popcorn",
      body: "We launched our initiative and raised over $11,000 in less than a week. Self-contained, in-house fundraising has never been easier — the best investment my client has made for their business, ever.",
      featured: true
    },
    {
      author: "Bouncing Off The Walls",
      body: "EXACTLY what I've been looking for. The pages look professional and they're easy to set up. He's thought of everything you need to run successful fundraisers."
    },
    {
      author: "Peleman Industries",
      body: "It's elegantly simple which I appreciate — nothing added that doesn't need to be there. I tried other apps and solutions; this is the best."
    },
    {
      author: "UpTop Treats",
      body: "I searched high and low for an app to allow fundraising for my candy site — this was exactly what I was looking for. Highly recommend."
    },
    {
      author: "A3 Beauty by Arhi",
      body: "From day one, Matt has been flexible, patient, and incredibly thorough. At no point did I feel rushed or dismissed. It's a partnership."
    }
  ],

  // Pricing tiers, mirrored from src/_layouts/pricing.njk.
  // Keep in sync when prices change.
  plans: [
    { name: "Grow", price: "19", tagline: "For growing fundraisers." },
    { name: "Pro", price: "49", tagline: "For larger fundraisers with sustained volume." },
    { name: "Premium", price: "99", tagline: "For established fundraisers with high volume." },
    { name: "Unlimited", price: "299", tagline: "For teams running at scale." }
  ]
};
