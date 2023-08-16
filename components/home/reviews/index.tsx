import { AiFillStar } from "react-icons/ai";
const Reviews = () => {
  return (
    <main className="pb-28 mx-auto container px-5 lg:px-10">
      <h1 className="text-2xl lg:text-3xl py-2 font-bold text-center">Reviews</h1>
      <p className="text-center font-medium">
        Feedback from our satisfied clients.
      </p>
      <section className="flex lg:flex-row flex-col gap-y-5 sm:text-base text-sm justify-between lg:space-x-5 mt-14">
        <div className="shadow-sm p-5 space-y-2">
          <div className="flex items-center">
          <img src="/static/a1.svg" alt="avatar" className="h-20 w-20"/>
            <div className="flex pl-3 text-2xl text-[#FFC700]">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
          <p className="text-center">
            I was excited to try out some new crochet patterns, and this website
            did not disappoint! They had a great selection of patterns
          </p>
        </div>
        <div className="shadow-sm p-5 space-y-2">
          <div className="flex items-center">
          <img src="/static/a2.svg" alt="avatar" className="h-20 w-20"/>
            <div className="flex pl-3 text-2xl text-[#FFC700]">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
          <p className="text-center">
            I was excited to try out some new crochet patterns, and this website
            did not disappoint! They had a great selection of patterns
          </p>
        </div>
        <div className="shadow-sm p-5 space-y-2">
          <div className="flex items-center">
            <img src="/static/a3.svg" alt="avatar" className="h-20 w-20"/>
            <div className="flex pl-3 text-2xl text-[#FFC700]">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
          <p className="text-center">
            I was excited to try out some new crochet patterns, and this website
            did not disappoint! They had a great selection of patterns
          </p>
        </div>
      </section>
    </main>
  );
};

export default Reviews;
