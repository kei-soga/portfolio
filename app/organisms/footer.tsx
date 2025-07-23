export function Footer() {
    return (
        <footer>
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex font-medium items-center md:justify-start justify-center text-gray-900">
                    <img src="/logo.png" alt="ロゴ" className="w-10 h-10" />
                    <span className="ml-3 text-xl font-bold">Soga System</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    © 2025 Soga System —
                </p>
            </div>
        </footer>
    );
}
