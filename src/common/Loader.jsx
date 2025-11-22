import React from "react";
import ContentLoader from "react-content-loader";

export function PostSkeleton() {
    return (
        <ContentLoader
            speed={1.5}
            height={150}
            width={"100%"}
            backgroundColor="#e3e3e3"
            foregroundColor="#cfcfcf"
        >
            {/* Image (same as your card width + height) */}
            <rect x="0" y="0" rx="14" ry="14" width="160" height="130" />

            {/* Category */}
            <rect x="180" y="0" rx="4" ry="4" width="90" height="14" />

            {/* Title */}
            <rect x="180" y="22" rx="6" ry="6" width="240" height="18" />
            <rect x="180" y="48" rx="6" ry="6" width="200" height="18" />

            {/* Description lines */}
            <rect x="180" y="78" rx="4" ry="4" width="260" height="12" />
            <rect x="180" y="96" rx="4" ry="4" width="230" height="12" />
            <rect x="180" y="114" rx="4" ry="4" width="180" height="12" />

            {/* Author + date */}
            <rect x="180" y="135" rx="4" ry="4" width="140" height="12" />
        </ContentLoader>
    );
};

export function HandPickedSkeleton() {
    return (
        <ContentLoader
            speed={1.5}
            width="100%"
            height={260}
            backgroundColor="#e3e3e3"
            foregroundColor="#cfcfcf"
        >
            {/* Image */}
            <rect x="0" y="0" rx="14" ry="14" width="100%" height="180" />

            {/* Title */}
            <rect x="0" y="190" rx="4" ry="4" width="80%" height="15" />

            {/* Author + Date */}
            <rect x="0" y="215" rx="4" ry="4" width="60%" height="12" />
        </ContentLoader>
    );
};

export function LatestNewsSkeleton() {
    return (
        <ContentLoader
            speed={1.5}
            width="100%"
            height={70}
            backgroundColor="#e3e3e3"
            foregroundColor="#cfcfcf"
        >
            {/* Round image */}
            <circle cx="28" cy="28" r="28" />

            {/* Title */}
            <rect x="70" y="10" rx="4" ry="4" width="70%" height="14" />

            {/* Reporter + Date */}
            <rect x="70" y="32" rx="4" ry="4" width="50%" height="12" />
        </ContentLoader>
    );
};

export function CategorySkeleton() {
    return (
        <div className="mt-8">
            <div className="container px-4 mx-auto">
                <ContentLoader
                    speed={1.2}
                    width="100%"
                    height={250}
                    backgroundColor="#f0f0f0"
                    foregroundColor="#e0e0e0"
                >
                    {/* Big background rectangle */}
                    <rect x="0" y="0" rx="12" ry="12" width="100%" height="200" />

                    {/* Category Name */}
                    <rect x="20" y="20" rx="4" ry="4" width="150" height="15" />

                    {/* Description */}
                    <rect x="20" y="50" rx="4" ry="4" width="70%" height="15" />
                    <rect x="20" y="75" rx="4" ry="4" width="50%" height="15" />

                    {/* Button */}
                    <rect x="20" y="110" rx="20" ry="20" width="130" height="35" />
                </ContentLoader>
            </div>
        </div>
    );
};

export function NewsSkeleton() {
    return (
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-3 lg:gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
                <div
                    key={i}
                    className="col-span-3 sm:col-span-2 lg:col-span-1 bg-[#f5f5f5] p-4 rounded-2xl dark:bg-gray-800/70"
                >
                    <ContentLoader
                        speed={1}
                        width="100%"
                        height={140}
                        backgroundColor="#f0f0f0"
                        foregroundColor="#e0e0e0"
                    >
                        {/* Left side (text area) */}
                        <rect x="0" y="5" rx="4" ry="4" width="80" height="12" />
                        <rect x="0" y="30" rx="4" ry="4" width="90%" height="12" />
                        <rect x="0" y="50" rx="4" ry="4" width="70%" height="12" />
                        <rect x="0" y="75" rx="4" ry="4" width="40%" height="10" />

                        {/* Thumbnail on right */}
                        <rect x="210" y="0" rx="10" ry="10" width="90" height="80" />
                    </ContentLoader>
                </div>
            ))}
        </div>
    );
};

export function BlogSkeleton() {
    return (
        <div className="overflow-hidden">
            <div className="flex gap-6 animate-pulse">
                {Array.from({ length: 5 }).map((_, i) => (
                    <div
                        key={i}
                        className="flex items-start gap-3 bg-white/40 dark:bg-gray-700/40 p-4 rounded-xl w-48"
                    >
                        <ContentLoader
                            speed={1}
                            width={180}
                            height={80}
                            backgroundColor="#e6e6e6"
                            foregroundColor="#d4d4d4"
                        >
                            {/* Number index */}
                            <rect x="0" y="5" rx="4" ry="4" width="25" height="20" />

                            {/* Category */}
                            <rect x="35" y="5" rx="4" ry="4" width="60" height="10" />

                            {/* Title */}
                            <rect x="35" y="25" rx="4" ry="4" width="120" height="12" />
                            <rect x="35" y="45" rx="4" ry="4" width="90" height="10" />

                            {/* Reporter + date */}
                            <rect x="35" y="60" rx="4" ry="4" width="70" height="8" />
                        </ContentLoader>
                    </div>
                ))}
            </div>
        </div>
    );
};

export function TopNewsSkeleton() {
    return (
        <div className="grid grid-cols-12 gap-2 sm:gap-4 md:gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
                <div
                    key={i}
                    className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4"
                >
                    <ContentLoader
                        height={320}
                        width="100%"
                        speed={1.2}
                        backgroundColor="#e3e3e3"
                        foregroundColor="#d1d1d1"
                    >
                        {/* Image */}
                        <rect x="0" y="0" rx="12" ry="12" width="100%" height="200" />

                        {/* Category */}
                        <rect x="0" y="215" rx="6" ry="6" width="80" height="14" />

                        {/* Reporter + date */}
                        <rect x="90" y="215" rx="4" ry="4" width="120" height="12" />

                        {/* Title */}
                        <rect x="0" y="240" rx="4" ry="4" width="90%" height="14" />
                        <rect x="0" y="260" rx="4" ry="4" width="70%" height="12" />

                        {/* Content short excerpt */}
                        <rect x="0" y="285" rx="4" ry="4" width="100%" height="10" />
                        <rect x="0" y="300" rx="4" ry="4" width="80%" height="10" />
                    </ContentLoader>
                </div>
            ))}
        </div>
    );
};

export function HotStorySkeleton_() {
    return (
        <div className="py-3">
            <ContentLoader height={90}>
                <rect x="0" y="0" rx="10" ry="10" width="80" height="80" />
                <rect x="95" y="0" rx="4" ry="4" width="120" height="12" />
                <rect x="95" y="20" rx="4" ry="4" width="200" height="12" />
                <rect x="95" y="40" rx="4" ry="4" width="150" height="10" />
            </ContentLoader>
        </div>
    );
};

export function TopNewsSkeleton_() {
    return (
        <div className="py-3">
            <ContentLoader height={90}>
                <rect x="0" y="0" rx="10" ry="10" width="80" height="80" />
                <rect x="95" y="0" rx="4" ry="4" width="120" height="12" />
                <rect x="95" y="20" rx="4" ry="4" width="200" height="12" />
                <rect x="95" y="40" rx="4" ry="4" width="150" height="10" />
            </ContentLoader>
        </div>
    );
};

export function PostListSkeleton() {
    return (
        <div className="mb-3">
            <ContentLoader
                height={120}
                width="100%"
                className="rounded-lg"
            >
                {/* Background image placeholder */}
                <rect x="0" y="0" rx="10" ry="10" width="100%" height="120" />

                {/* Title bar */}
                <rect x="20" y="85" rx="4" ry="4" width="180" height="14" />
            </ContentLoader>
        </div>
    );
};

export function MostPopularSkeleton() {
    return (
        <div className="flex flex-col md:flex-row md:max-w-xl mb-5 sm:mb-3 md:mb-5">
            <ContentLoader
                speed={1.5}
                width={400}
                height={120}
                backgroundColor="#e3e3e3"
                foregroundColor="#f5f5f5"
                className="w-full"
            >
                {/* Image */}
                <rect x="0" y="0" rx="8" ry="8" width="160" height="90" />

                {/* Category badge */}
                <rect x="180" y="5" rx="4" ry="4" width="90" height="15" />

                {/* Title */}
                <rect x="180" y="30" rx="4" ry="4" width="180" height="15" />
                <rect x="180" y="50" rx="4" ry="4" width="150" height="15" />

                {/* Meta line 1 */}
                <rect x="180" y="75" rx="4" ry="4" width="120" height="12" />

                {/* Meta line 2 */}
                <rect x="180" y="95" rx="4" ry="4" width="100" height="12" />
            </ContentLoader>
        </div>
    );
};

export function CategorySkeleton_() {
    return (
        <ContentLoader
            speed={2}
            width="100%"
            height={320}
            viewBox="0 0 400 320"
            backgroundColor="#d1d5db"
            foregroundColor="#e5e7eb"
            style={{ width: "100%" }}
        >
            {/* Category Image */}
            <rect x="0" y="0" rx="8" ry="8" width="400" height="220" />

            {/* Title */}
            <rect x="0" y="240" rx="4" ry="4" width="250" height="20" />

            {/* Description line 1 */}
            <rect x="0" y="270" rx="4" ry="4" width="350" height="14" />

            {/* Description line 2 */}
            <rect x="0" y="290" rx="4" ry="4" width="320" height="14" />
        </ContentLoader>
    );
};

export function PopularChoiceSkeleton() {
    return (
        <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
                <ContentLoader
                    key={i}
                    speed={2}
                    height={80}
                    width="100%"
                    backgroundColor="#2e2e2e"
                    foregroundColor="#3d3d3d"
                    className="rounded-lg"
                >
                    {/* Image */}
                    <rect x="0" y="10" rx="8" ry="8" width="64" height="64" />

                    {/* Title */}
                    <rect x="80" y="15" rx="4" ry="4" width="70%" height="12" />
                    <rect x="80" y="35" rx="4" ry="4" width="50%" height="10" />

                    {/* Meta */}
                    <rect x="80" y="55" rx="4" ry="4" width="40%" height="8" />
                </ContentLoader>
            ))}
        </div>
    );
};
