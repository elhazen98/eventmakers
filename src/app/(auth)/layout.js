export default function Layout({ children }) {
    return (
        <div className="flex h-screen items-center">
            <div className="max-w-xl w-5/6 m-auto py-8 font-mono">
                {children}
            </div>
        </div>
    );
}
