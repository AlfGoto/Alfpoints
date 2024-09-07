import localFont from "next/font/local";
import "./globals.css";
import CheckUser from '../components/checkUser'


const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "AlfPoints",
    description: "The game where you need to travel the whole worlds to be the best",
};

export default function RootLayout({ children, }) {

    return (
        <html lang="en">
            <CheckUser />
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                {children}
            </body>
        </html>
    );
}
