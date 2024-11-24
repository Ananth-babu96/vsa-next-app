import "./globals.scss";
import { Roboto, Poppins } from "next/font/google";

const roboto = Roboto({
   subsets: ["latin"],
   weight: ["400", "300", "500"],
   display: "swap",
});
const poppins = Poppins({
   subsets: ["latin"],
   weight: ["300", "400", "500", "600"],
   display: "swap",
});

export const metadata = {
   title: "vsa creations",
   description: "one stop solution for all photography needs",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={poppins.className}>{children}</body>
      </html>
   );
}
