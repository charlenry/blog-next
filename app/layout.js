// import './globals.css'
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "@/components/Container/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Écrivain.io",
  description: "Le blog communautaire des aficionados de l'écriture des romans.",
  keywords: "blog des romanciers, roman, romancier, écrire un roman, lire un roman",
  author: "Charles-Henri SAINT-MARS"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
