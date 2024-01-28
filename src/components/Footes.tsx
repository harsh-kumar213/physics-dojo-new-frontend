import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full px-2 py-20 bg-primary border-t-4 border-secondary">
      <div className="w-full max-w-screen-2xl flex  flex-col md:flex-row justify-center items-center mx-auto   ">
       
        <div className=" md:w-[80%]  hover:scale-110 my-2 py-2 flex h-full justify-center items-center rounded-lg flex-col">
          <h2 className="text-2xl font-bold">Other Work</h2>
          <div className="flex max-w-[80%] pt-5">
            The Eigensolvers have other projects going on, follow us on LinkedIn
            and GitHub for more details.
          </div>
        </div>
        <div className="md:w-[80%] hover:scale-110 my-2 py-2 flex h-full justify-center items-center flex-col">
          <h2 className="text-2xl font-bold">Contribute</h2>
          <div className="flex max-w-[80%] pt-5">
            You can contribute by applying in the contribution page here. You
            will most likely get a response within a few hours
          </div>
        </div>
        <div className="md:w-[80%] hover:scale-110 my-2 py-2 flex h-full justify-center items-center flex-col">
          <h2 className="text-2xl font-bold">Community</h2>
          <div className="flex max-w-[80%] pt-5">
            physics dojo aims at not only being an education and entertainment
            platform, but also bringing together a global community of
            physisists and other related fields.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
