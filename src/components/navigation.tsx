"use client";

import * as React from "react";
import Link from "next/link";

export function Navigation() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isDark, setIsDark] = React.useState(false);

    React.useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (
            theme === "dark" ||
            (!theme &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDark(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDark(true);
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur">
            <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">M</span>
                    </div>
                    <span className="font-bold text-xl text-gray-900 dark:text-white">
                        MockRN
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link
                        href="#features"
                        className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                    >
                        Features
                    </Link>
                    <Link
                        href="#pricing"
                        className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                    >
                        Pricing
                    </Link>
                    <Link
                        href="#faq"
                        className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                    >
                        FAQ
                    </Link>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        {isDark ? (
                            <svg
                                className="h-5 w-5 text-gray-700 dark:text-gray-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-5 w-5 text-gray-700 dark:text-gray-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            </svg>
                        )}
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                        Get Started
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center space-x-2">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        {isDark ? (
                            <svg
                                className="h-5 w-5 text-gray-700 dark:text-gray-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-5 w-5 text-gray-700 dark:text-gray-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            </svg>
                        )}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        {isOpen ? (
                            <svg
                                className="h-5 w-5 text-gray-700 dark:text-gray-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-5 w-5 text-gray-700 dark:text-gray-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                    <nav className="max-w-7xl mx-auto flex flex-col space-y-4 px-4 py-6">
                        <Link
                            href="#features"
                            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            href="#pricing"
                            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Pricing
                        </Link>
                        <Link
                            href="#faq"
                            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            FAQ
                        </Link>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors w-full">
                            Get Started
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
