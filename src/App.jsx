import "./App.css";
import ProfilePic from "./assets/images/profile.jpg";
import CardFooter from "./components/CardFooter";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="min-w-screen h-screen flex overflow-x-hidden justify-center items-center inset-0 z-10 bg-[url('./assets/images/background.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div className="relative container max-w-xs bg-[#0d0d0d] shadow-lg rounded-xl">
        <img
          src={ProfilePic}
          alt=""
          className=" object-cover w-full rounded-t-xl"
        />
        <MainContent />
        <CardFooter />
      </div>
    </div>
  );
}

export default App;
