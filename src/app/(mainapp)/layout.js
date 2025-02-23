import { Onest } from "next/font/google";

const onest = Onest({ subsets: ["latin"] });

export default function Layout({ children }) {
    return (
        <div className="flex h-screen items-center">
            <div
                className={`max-w-xl w-5/6 m-auto py-8 font-mono ${onest.className}`}
            >
                {children}
            </div>
        </div>
    );
}
