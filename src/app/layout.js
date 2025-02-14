import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import AuthProvider from "@/providers/AuthProviders";
import StateProviderClient from "@/providers/StateProviderClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BackYard",
  description: "The best backyard sale!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <StateProviderClient>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </StateProviderClient>
        </AuthProvider>
      </body>
    </html>
  );
}
