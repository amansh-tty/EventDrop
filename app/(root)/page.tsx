import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10s">
    <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">

      <div className="flex flex-col justify-center gap-8">
        <h1 className="h1-bold">Never Missout on any other college events</h1>
        <p className="p-regular-20 md:egular-24">
            Register for the events  happening at your preferred colleges. Get updates about upcoming events, workshops and much more.
          Get updates about the latest news, announcements and important dates of your preferred colleges.
          <br />
          <span className="font-bold underline">Sign up</span>  now to get notified instantly!
        </p>
        <Button  asChild className="button w-full sm:w-fit">
          <Link href="#events">
          Explore Events
          </Link>
        </Button>
      </div>
      <Image
      src='/assets/images/fest.jpg'
      alt='fest'
      width={1000}
      height={1000}
      className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]" />
      </div>
   </section>
   
   <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
    <h2 className="h2-bold">
      Trusted by 
      <br />
      Few of my friends
    </h2>

    <div className="flex w-full flex-col gap-5 md:flex-row">
      search
      <br/>
      category filter
    </div>
   </section>
   </>
  );
}
