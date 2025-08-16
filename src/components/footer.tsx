"use client";

import * as React from "react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1">
                        <Link
                            href="/"
                            className="flex items-center space-x-2 mb-4"
                        >
                            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                                <span className="text-white font-bold text-sm">
                                    M
                                </span>
                            </div>
                            <span className="font-bold text-xl">MockRN</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            AI-powered mock interviews designed specifically for
                            nursing professionals. Practice, improve, and land
                            your dream job.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link
                                    href="#features"
                                    className="hover:text-white transition-colors"
                                >
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#pricing"
                                    className="hover:text-white transition-colors"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/demo"
                                    className="hover:text-white transition-colors"
                                >
                                    Demo
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/api"
                                    className="hover:text-white transition-colors"
                                >
                                    API
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-white transition-colors"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/careers"
                                    className="hover:text-white transition-colors"
                                >
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-white transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="hover:text-white transition-colors"
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link
                                    href="/help"
                                    className="hover:text-white transition-colors"
                                >
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#faq"
                                    className="hover:text-white transition-colors"
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="hover:text-white transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="hover:text-white transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © 2025 MockRN. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link
                            href="/privacy"
                            className="text-gray-400 hover:text-white text-sm transition-colors"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-gray-400 hover:text-white text-sm transition-colors"
                        >
                            Terms
                        </Link>
                        <Link
                            href="/cookies"
                            className="text-gray-400 hover:text-white text-sm transition-colors"
                        >
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
