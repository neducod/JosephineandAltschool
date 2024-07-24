import "./App.css";
// import Navbar from "@/components/navbar/Navbar";
// import { useState } from "react";
// import { SelectedPage } from "@/shared/types";
// import Features from "@/components/features/Features";
// import Pricing from "@/components/pricing/Pricing";
// import Analytics from "@/components/analytics/Analytics";
// import Faqs from "@/components/faqs/Faqs";
// import MyUrls from "./MyURLs/MyUrls";
import { Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import { initializeApp } from "firebase/app";
import { config } from "./config/config";

import { AuthProvider } from "./context/AuthContext.tsx";
import Dashboard from "./Pages/Dashboard.tsx";

initializeApp(config.firebaseConfig);

function App() {
  // const [selectedPage, setSelectedPage] = useState<SelectedPage>(
  //   SelectedPage.MyURLs
  // );
  return (
    <AuthProvider>
      <BrowserRouter>
        {
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          // ) && (
          // <section className="app bg-primary-100 w-screen h-screen">
          //   <Navbar
          //     selectedPage={selectedPage}
          //     setSelectedPage={setSelectedPage}
          //   />

          //   <MyUrls
          //     selectedPage={selectedPage}
          //     setSelectedPage={setSelectedPage}
          //   />
          //   {/* <create my url component for the main home component> */}
          //   <Features
          //     selectedPage={selectedPage}
          //     setSelectedPage={setSelectedPage}
          //   />
          //   <Pricing
          //     selectedPage={selectedPage}
          //     setSelectedPage={setSelectedPage}
          //   />
          //   <Analytics
          //     selectedPage={selectedPage}
          //     setSelectedPage={setSelectedPage}
          //   />
          //   <Faqs
          //     selectedPage={selectedPage}
          //     setSelectedPage={setSelectedPage}
          //   />
          // </section>
        }
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
