// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import BottomNav from "@/components/BottomNav";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "60 Days of Code - Coding Challenge Platform",
//   description: "Join the 60-day coding challenge for Indian college students",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <div className="max-w-[390px] mx-auto min-h-screen bg-slate-950 text-slate-50 shadow-2xl overflow-x-hidden relative">
//           {children}
//           <BottomNav />
//         </div>
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "60 Days of Code - Coding Challenge Platform",
  description: "Join the 60-day coding challenge for Indian college students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative mx-auto min-h-screen max-w-[390px] overflow-x-hidden bg-slate-950 text-slate-50 shadow-2xl">
          {children}
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
