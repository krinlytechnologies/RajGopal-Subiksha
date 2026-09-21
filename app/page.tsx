import { Hero } from "@/components/invitation/Hero";
import { InvitationLetter } from "@/components/invitation/InvitationLetter";
import { BabyShowerIntro } from "@/components/invitation/BabyShowerIntro";
import { Welcome } from "@/components/invitation/Welcome";
import { OurStory } from "@/components/invitation/OurStory";
import { LittleMoments } from "@/components/invitation/LittleMoments";
import { Dreams } from "@/components/invitation/Dreams";
import { EventDetails } from "@/components/invitation/EventDetails";
import { Venue } from "@/components/invitation/Venue";
import { Closing } from "@/components/invitation/Closing";

export default function Home() {
  return (
    <>
      <Hero />
      <InvitationLetter />
      <BabyShowerIntro />
      <Welcome />
      <OurStory />
      <LittleMoments />
      <Dreams />
      <EventDetails />
      <Venue />
      <Closing />
    </>
  );
}
