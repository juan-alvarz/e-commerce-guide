import Login from "@/components/Auth/Login@";
import { GoogleAnalytics } from "@/components/GoogleAnalytics@";
import Home from "@/components/Home@";
export default function Homepage() {
  return (
    <>
      {/* <Login /> */}
      <GoogleAnalytics />
      <Home />
    </>
  );
}
