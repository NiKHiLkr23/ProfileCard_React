import MailSvg from "../assets/images/email-svgrepo-com.svg";

export default function MainContent() {
  return (
    <div>
      <div className="leading-3 flex flex-col justify-center items-center mt-3">
        <p className="text-white text-2xl font-bold">Nikhil Kumar</p>
        <p className="text-orange-300 text-md mb-3">React Developer</p>
        <a
          href="https://kumarnikhil.netlify.app"
          target="_blank"
          className="text-gray-500 text-sm "
        >
          kumar.website
        </a>
      </div>

      <div className="flex justify-center m-0 mt-2">
        <button
          className="relative transition ease-in-out duration-300 text-md font-medium mb-2 md:mb-0 bg-gray-300
           text-black rounded-lg hover:bg-white py-2 px-5 pl-10"
        >
          <div className="absolute flex top-2.5 left-3">
            <img src={MailSvg} alt="Mail icon" className="h-5 " />
          </div>
          <span>Get in touch!</span>
        </button>
      </div>
      <p className="flex px-5 font-semibold text-md text-white mt-5">About</p>
      <p className="text-justify text-gray-300 px-5 text-xs mb-2 leading-4">
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </p>
      <p className="flex px-5 text-md text-white font-semibold">Interests</p>
      <p className="text-justify text-gray-300 mb-2 px-5 text-xs leading-4">
        Food expert. Reader. Internet fanatic. Travel geek. Coffee fanatic.
      </p>
    </div>
  );
}
