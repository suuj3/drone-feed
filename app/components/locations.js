import SideNavbar from "./components/SideNavbar";
import TopNavbar from "./components/TopNavbar";

export default function Locations() {
  return (
   
    <div className="bg-gray-800 min-h-screen flex flex-col">
         <TopNavbar/>
    <div className="flex flex-1">
        <SideNavbar />
        <main className="flex-grow p-6 ml-60 lg:ml-64">
          <h1 className="text-white text-3xl">Location Page</h1>
         
        </main>
      </div>
      </div>
  );
}
