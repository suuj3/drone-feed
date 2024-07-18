import './globals.css';
import SideNavbar from './components/SideNavbar';
import AuthProvider from "./context/authprovider";

export const metadata = {
  title: "Drone Dashboard",
  description: "Dashboard for Drone Data",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SideNavbar />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
