import "./globals.scss";
import { Poppins } from "next/font/google";

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["300", "400", "500", "600"],
   display: "swap",
});

export const metadata = {
   title: "No. 1 Photography in Kumbakonam - Weddings, Events | VSA Creations",
   description:
      "VSA Creations, the top-rated photography studio in Kumbakonam, specializes in weddings, events, and baby shoots. Trust us to turn your memories into timeless art!",
   robots: "index,follow",
   other: {
      "google-site-verification": "xccayAt77bVxMDUFl_B-GKQNZVXV_3ebGCznao5ZAnY",
   },
};
export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={poppins.className}>{children}</body>
      </html>
   );
}
