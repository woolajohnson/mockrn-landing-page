"use client";

import * as React from "react";

export function HeroSection() {
    return (
        <section className="relative max-w-7xl mx-auto px-4 pt-24 pb-20">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900" />

            <div className="flex flex-col items-center text-center">
                {/* Badge */}
                {/* <div className="inline-block mb-6 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
          <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
            🎯 AI-Powered Mock Interviews for Healthcare Professionals
          </span>
        </div> */}

                {/* Main Headline */}
                <h1 className="sm:text-balance text-4xl sm:text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl mb-9">
                    <span className="text-gray-900 dark:text-white">
                        AI Mock Interviews for
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                        Nursing Applicants
                    </span>
                </h1>

                {/* Subtext */}
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 mx-auto leading-relaxed max-w-2xl opacity-60">
                    Practice real interview questions with instant AI feedback
                    to boost your confidence and land your dream nursing job.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-lg font-medium transition-colors flex items-center">
                        Try Free Interview
                        <svg
                            className="ml-2 w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </button>
                    <button className="border border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-900/20 px-8 py-3 text-lg rounded-lg font-medium transition-colors flex items-center">
                        <svg
                            className="mr-2 w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-4h10a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2z"
                            />
                        </svg>
                        Watch Demo
                    </button>
                </div>

                {/* Video Placeholder */}
                <div className="relative mx-auto max-w-5xl w-full">
                    <div className="relative">
                        {/* Subtle contained glow effects */}
                        <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/20 via-purple-500/15 to-blue-500/20 rounded-2xl blur-2xl opacity-60" />
                        <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/25 via-indigo-400/20 to-blue-400/25 rounded-xl blur-xl opacity-70" />

                        {/* Video container with enhanced styling */}
                        <div className="relative w-full h-auto p-1 rounded-xl ring-1 ring-inset bg-white/10 dark:bg-gray-900/10 ring-gray-200/20 dark:ring-gray-700/20 backdrop-blur-sm">
                            <div className="relative overflow-hidden w-full aspect-video rounded-lg shadow-2xl ring-1 ring-gray-900/10 dark:ring-gray-100/10">
                                {/* YouTube embed */}
                                <iframe
                                    className="w-full h-full rounded-lg"
                                    src="https://www.youtube.com/embed/8GK8R77Bd7g"
                                    title="MockRN Demo Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
