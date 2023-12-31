import React from "react";
import ReactDOM from "react-dom/client";

import { DarkModeProvider } from "./hooks/useDarkMode.tsx";
import { App } from "./App.tsx";

import { register } from "swiper/element/bundle";
register();
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
   <React.StrictMode>
      <Toaster position="top-center" reverseOrder={false} />
      <DarkModeProvider>
         <App />
      </DarkModeProvider>
   </React.StrictMode>
);
