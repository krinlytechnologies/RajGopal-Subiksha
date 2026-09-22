// Centralized invitation content. Edit here to update copy across the site —
// never hardcode names, dates or venue details inside individual components.

const partnerOne = "Raj Gopal";
const partnerTwo = "Subhiksha";

export const couple = {
  partnerOne,
  partnerTwo,
  full: `${partnerOne} & ${partnerTwo}`,
  initials: "R & S",
};

/**
 * Single source of truth for the event logistics.
 * Update these values only — every section that displays the date, time or
 * venue reads from here.
 */
export const eventDetails = {
  day: "Sunday",
  date: "25 October 2026",
  time: "10:00 AM onwards",
  venue: "Raj Banquets",
  mapsUrl: "https://maps.app.goo.gl/vqFkBb8CXpR6TTXV7",
};

export const navigation = {
  logo: couple.initials,
  links: [
    { label: "Home", href: "#home" },
    { label: "Our Story", href: "#our-story" },
    { label: "Details", href: "#details" },
  ],
};

export const audio = {
  // Keep the file under public/audio so it can be served directly by the browser.
  src: "/audio/song.mpeg",
};

export const hero = {
  names: couple.full,
  scrollCue: "Scroll to Begin",
};

export const babyShowerIntro = {
  kicker: "Our",
  title: "Baby Shower",
  body: ["A day filled with love,", "blessings and little dreams."],
};

export const welcome = {
  lines: ["Welcome", "to our", "special day"],
  names: couple.full,
};

export const ourStory = {
  title: "Our Story",
  lines: ["Two hearts,", "one journey,", "now three..."],
  paragraphs: [
    "Our lives are about to get fuller, our home louder, our hearts bigger.",
    "We're so grateful to have you with us as we step into this beautiful new chapter.",
  ],
};

export const littleMoments = {
  title: "Little Moments",
};

export const dreams = {
  lines: ["Tiny hands.", "Big dreams.", "A brighter tomorrow."],
};

export const eventDetailsSection = {
  eyebrow: "Event Details",
  ctaLabel: "View Location",
  notes: [
    { label: "Your presence", value: "is our greatest gift" },
    { label: "Join us for", value: "love, laughter and blessings" },
  ],
};

export const venue = {
  lines: ["A beautiful day", "awaits us."],
};

export const closing = {
  title: "Thank You",
  lines: [
    "For being part of our journey.",
    "We can't wait to celebrate",
    "with you.",
  ],
  signOffLabel: "With love,",
  names: couple.full,
  final: "A new chapter begins.",
};
