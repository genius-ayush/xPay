"use client";

import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type FeatureCardProps = {
    heading: string;
    subheading: string;
    buttonText: string;
    image: string;
    icon?: LucideIcon;
    className?: string;
};

export default function FeatureCard({
    heading,
    subheading,
    buttonText,
    image,
    icon: Icon,
    className,
}: FeatureCardProps) {
    return (
        <div
            className={cn(
                "relative w-full overflow-hidden rounded-2xl bg-white p-10",
                "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white",
                className
            )}
        >
            {/* Left content */}
            <div>
                {Icon && (
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <Icon size={20} />
                    </div>
                )}

                <h3 className="text-[32px] leading-[1.2] font-semibold text-black mb-4">
                    {heading}
                </h3>

                <p className="max-w-md text-[15px] leading-[1.7] text-gray-600 mb-8">
                    {subheading}
                </p>

                <button className="inline-flex items-center gap-2 rounded-full bg-[#4F6EF7] px-6 py-3 text-sm font-medium text-white hover:bg-[#3F5DE6] transition">
                    {buttonText}
                    <ArrowRight size={16} />
                </button>
            </div>

            {/* Right media */}
            <div className="relative rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#E0F2FE,#ECFEFF,#FFFFFF)]" />

                <div className="relative z-10 flex justify-center ">
                    <Image
                        src={image}
                        alt={heading}
                        width={420}
                        height={420}
                        className="rounded-xl shadow-xl"
                    />
                </div>
            </div>
        </div>
    );
}
