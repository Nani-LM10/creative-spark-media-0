"use client"
import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import {
    Monitor,
    Camera,
    TrendingUp,
    PenTool,
    ArrowUpRight,
    MousePointer2,
    Aperture,
    MessageSquare,
    Activity,
    Smartphone,
    Package,
    Users,
    Video,
    Crown,
    ThumbsUp,
    Star,
    Play
} from "lucide-react";
import { cn } from "@/utils";

// --- Card Wrapper ---
interface BentoCardProps {
    children?: React.ReactNode;
    className?: string;
    title: string;
    icon: React.ElementType;
    description: string;
}

const BentoCard: React.FC<BentoCardProps> = ({ children, className, title, icon: Icon, description }) => {
    return (
        <motion.div
            whileHover="hover"
            id="services"
            initial="initial"
            className={cn(
                "group relative flex flex-col justify-between overflow-hidden bg-neutral-950 border border-neutral-800 p-6",
                "hover:border-white/40 transition-colors duration-500",
                className
            )}
        >
            {/* Background Grid Pattern (Subtle) */}
            <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

            {/* Content Container (Title & Text) */}
            <div className="z-10 relative mt-auto pt-32 pointer-events-none">
                <div className="mb-2 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center bg-white text-black">
                        <Icon size={16} />
                    </div>
                    <h3 className="font-semibold text-white tracking-tight">{title}</h3>
                </div>
                <p className="text-sm text-neutral-400">{description}</p>
            </div>

            {/* Hover Reveal Arrow */}
            <motion.div
                variants={{
                    initial: { opacity: 0, x: -10, y: 10 },
                    hover: { opacity: 1, x: 0, y: 0 },
                }}
                className="absolute top-6 right-6 text-white"
            >
                <ArrowUpRight />
            </motion.div>

            {/* The Micro-Interaction Canvas */}
            <div className="absolute top-0 left-0 w-full h-full">
                {children}
            </div>
        </motion.div>
    );
};

// --- Helper: Seamless Marquee ---
interface SeamlessMarqueeProps {
    children: React.ReactNode;
    direction?: "left" | "right";
    className?: string;
    velocity?: number; // Speed factor (pixels per frame roughly)
}

const SeamlessMarquee: React.FC<SeamlessMarqueeProps> = ({ children, direction = "left", className, velocity = 0.5 }) => {
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    // Mutable animation state
    const state = useRef({
        pos: direction === "right" ? -50 : 0, // Start position %
        currentVelocity: velocity
    });

    useAnimationFrame((time, delta) => {
        const s = state.current;
        const targetVelocity = isHovered ? 0 : velocity;

        // Smoothly interpolate current velocity to target (smooth stop/start)
        s.currentVelocity += (targetVelocity - s.currentVelocity) * 0.05;

        // Calculate move amount normalized roughly to 60fps (16.6ms)
        const move = (s.currentVelocity * delta) / 16;

        if (direction === "left") {
            s.pos -= move;
            // Wrap condition for left moving (0 to -50%)
            if (s.pos <= -50) {
                s.pos += 50;
            }
        } else {
            s.pos += move;
            // Wrap condition for right moving (-50% to 0)
            if (s.pos >= 0) {
                s.pos -= 50;
            }
        }

        if (contentRef.current) {
            contentRef.current.style.transform = `translate3d(${s.pos}%, 0, 0)`;
        }
    });

    return (
        <div
            className={cn("overflow-hidden w-full h-full pointer-events-auto", className)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            ref={containerRef}
        >
            {/* The inner container holds two copies of children for seamless looping */}
            <div ref={contentRef} className="flex w-max items-center h-full">
                {children}
                {children}
            </div>
        </div>
    );
};

// --- NEW: Photography (Scrolling Images) ---
const PhotographyCard = () => {
    const images = [
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500&q=80",
        "https://images.unsplash.com/photo-1550236520-7050f5296e27?w=500&q=80",
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=500&q=80",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80",
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&q=80",
    ];
    // Duplicate source array once to ensure we have enough width to fill large screens
    const gallery = [...images, ...images];

    return (
        <BentoCard
            title="Photography"
            icon={Camera}
            description="Capturing moments with timeless elegance."
            className="col-span-1 md:col-span-2 min-h-[300px]"
        >
            <div className="absolute inset-x-0 top-12 bottom-20 z-10">
                {/* Mask for fading edges */}
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-neutral-950 to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-neutral-950 to-transparent z-20 pointer-events-none" />

                <SeamlessMarquee direction="right" velocity={0.03}>
                    {gallery.map((src, i) => (
                        <div
                            key={i}
                            className="relative w-48 h-64 shrink-0 mr-4 overflow-hidden bg-neutral-900 border border-neutral-800 group/image cursor-pointer"
                        >
                            <img
                                src={src}
                                alt="Portfolio"
                                className="w-full h-full object-cover grayscale group-hover/image:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover/image:scale-110 opacity-70 group-hover/image:opacity-100"
                            />
                        </div>
                    ))}
                </SeamlessMarquee>
            </div>
        </BentoCard>
    )
}

// --- NEW: Videography (Scrolling Videos) ---
const VideoItem = ({ src }: { src: string }) => {
    const videoRef = React.useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        videoRef.current?.play().catch(e => console.log("Autoplay prevented", e));
    };

    const handleMouseLeave = () => {
        videoRef.current?.pause();
        if (videoRef.current) videoRef.current.currentTime = 0;
    };

    return (
        <div
            className="relative w-48 h-64 shrink-0 mr-4 overflow-hidden bg-neutral-900 border border-neutral-800 group/video cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <video
                ref={videoRef}
                src={src}
                className="w-full h-full object-cover opacity-60 group-hover/video:opacity-100 transition-opacity duration-300"
                muted
                loop
                playsInline
            />
            {/* Play Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover/video:opacity-0 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Play size={16} className="fill-white text-white ml-1" />
                </div>
            </div>
        </div>
    )
}

const VideographyCard = () => {
    const videos = [
        "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4",
        "https://assets.mixkit.co/videos/preview/mixkit-tree-branches-in-the-breeze-1188-large.mp4",
        "https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-water-216-large.mp4",
        "https://assets.mixkit.co/videos/preview/mixkit-waves-coming-to-the-beach-5016-large.mp4",
        "https://assets.mixkit.co/videos/preview/mixkit-abstract-video-of-ink-in-water-218-large.mp4"
    ];
    // Duplicate for safety
    const gallery = [...videos, ...videos];

    return (
        <BentoCard
            title="Videography"
            icon={Video}
            description="Cinematic storytelling in motion."
            className="col-span-1 md:col-span-2 min-h-[300px]"
        >
            <div className="absolute inset-x-0 top-12 bottom-20 z-10">
                {/* Mask */}
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-neutral-950 to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-neutral-950 to-transparent z-20 pointer-events-none" />

                <SeamlessMarquee direction="left" velocity={0.03}>
                    {gallery.map((src, i) => (
                        <VideoItem key={i} src={src} />
                    ))}
                </SeamlessMarquee>
            </div>
        </BentoCard>
    )
}


// --- SERVICE 1: Web Designing (The Interactive Cursor & Layout) ---
const WebDesignCard = () => {
    return (
        <BentoCard
            title="Website Designing"
            icon={Monitor}
            description="Crafting pixel-perfect, responsive layouts."
            className="col-span-1 md:col-span-2 min-h-[300px]"
        >
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-neutral-900/50 border border-neutral-800 p-2 backdrop-blur-sm pointer-events-none">
                {/* Mockup Header */}
                <div className="flex gap-1.5 mb-3">
                    <div className="w-2 h-2 rounded-full bg-red-500/20" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                    <div className="w-2 h-2 rounded-full bg-green-500/20" />
                </div>

                {/* Mockup Grid */}
                <div className="grid grid-cols-3 gap-2 h-full">
                    {/* Sidebar */}
                    <motion.div
                        variants={{ hover: { width: "30%" } }}
                        className="col-span-1 bg-neutral-800/50 h-24 w-full"
                    />
                    {/* Main Content */}
                    <motion.div
                        variants={{ hover: { scale: 0.98 } }}
                        className="col-span-2 grid grid-rows-2 gap-2"
                    >
                        <div className="bg-white/10 h-16 w-full" />
                        <div className="grid grid-cols-2 gap-2">
                            <div className="bg-neutral-800/50 h-full" />
                            <div className="bg-neutral-800/50 h-full" />
                        </div>
                    </motion.div>
                </div>

                {/* Floating Cursor */}
                <motion.div
                    variants={{
                        initial: { x: 0, y: 0 },
                        hover: {
                            x: 120,
                            y: 40,
                            transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
                        }
                    }}
                    className="absolute top-10 left-10 z-20"
                >
                    <MousePointer2 className="text-white fill-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                </motion.div>
            </div>
        </BentoCard>
    );
};

// --- SERVICE 2: Brand Shoot (The Camera Shutter & Focus) ---
const BrandShootCard = () => {
    return (
        <BentoCard
            title="Brand Shoot"
            icon={Camera}
            description="High-fidelity photography for brand identity."
            className="col-span-1 min-h-[300px]"
        >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Viewfinder Corners */}
                <motion.div
                    className="relative w-48 h-32 border border-white/10"
                    variants={{ hover: { scale: 1.05 } }}
                >
                    {/* Top Left */}
                    <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white" />
                    {/* Top Right */}
                    <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white" />
                    {/* Bottom Left */}
                    <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white" />
                    {/* Bottom Right */}
                    <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white" />

                    {/* Center Aperture */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        variants={{
                            initial: { rotate: 0, opacity: 0.5 },
                            hover: { rotate: 90, opacity: 1 }
                        }}
                    >
                        <Aperture className="w-12 h-12 text-white" strokeWidth={1} />
                    </motion.div>

                    {/* Flash Effect */}
                    <motion.div
                        className="absolute inset-0 bg-white"
                        variants={{
                            initial: { opacity: 0 },
                            hover: { opacity: [0, 0.1, 0], transition: { duration: 0.5, repeat: Infinity, repeatDelay: 1 } }
                        }}
                    />
                </motion.div>
            </div>
        </BentoCard>
    );
};

// --- SERVICE 3: Digital Marketing (The Interactive Chart) ---
const DigitalMarketingCard = () => {
    // Data for the bars (height percentages)
    const bars = [20, 45, 30, 80, 55, 90, 70];

    return (
        <BentoCard
            title="Digital Marketing"
            icon={TrendingUp}
            description="Data-driven strategies for maximum reach."
            className="col-span-1 min-h-[300px]"
        >
            <div className="absolute inset-0 p-6 flex items-end justify-center pointer-events-none">

                {/* Background Grid Lines (Subtle) */}
                <div className="absolute top-1/4 left-6 right-6 bottom-6 flex flex-col justify-between opacity-10">
                    <div className="w-full h-[1px] bg-white" />
                    <div className="w-full h-[1px] bg-white" />
                    <div className="w-full h-[1px] bg-white" />
                    <div className="w-full h-[1px] bg-white" />
                </div>

                {/* Chart Container */}
                <div className="relative w-full h-32 flex items-end justify-between gap-2 z-10">
                    {/* SVG Overlay for Trend Line */}
                    <svg className="absolute inset-0 w-full h-full overflow-visible z-20" preserveAspectRatio="none" viewBox="0 0 100 100">
                        {/* Gradient Fill under the line */}
                        <defs>
                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="white" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        {/* Trend Line Path */}
                        <motion.path
                            d="M0 80 L16.6 55 L33.3 70 L50 20 L66.6 45 L83.3 10 L100 30"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                            initial={{ pathLength: 0, opacity: 0 }}
                            variants={{
                                hover: {
                                    pathLength: 1,
                                    opacity: 1,
                                    transition: { duration: 1, ease: "easeInOut", delay: 0.2 }
                                }
                            }}
                        />
                        {/* Area Fill */}
                        <motion.path
                            d="M0 80 L16.6 55 L33.3 70 L50 20 L66.6 45 L83.3 10 L100 30 L100 100 L0 100 Z"
                            fill="url(#chartGradient)"
                            stroke="none"
                            initial={{ opacity: 0 }}
                            variants={{
                                hover: {
                                    opacity: 1,
                                    transition: { duration: 0.5, delay: 0.5 }
                                }
                            }}
                        />
                    </svg>

                    {/* Bars */}
                    {bars.map((height, i) => (
                        <motion.div
                            key={i}
                            className="w-full bg-neutral-800 rounded-t-sm relative overflow-hidden"
                            initial={{ height: "10%", opacity: 0.6 }}
                            variants={{
                                hover: {
                                    height: `${height}%`,
                                    opacity: 1,
                                    backgroundColor: "#525252", // Lighter gray on hover
                                    transition: { delay: i * 0.05, type: "spring", damping: 15 }
                                }
                            }}
                        />
                    ))}
                </div>

                {/* Floating Stat Pills */}
                <motion.div
                    variants={{
                        initial: { opacity: 0, y: 10, scale: 0.8 },
                        hover: { opacity: 1, y: 0, scale: 1, transition: { delay: 0.8, type: "spring" } }
                    }}
                    className="absolute top-[20%] right-2 z-30"
                >
                    {/* Inner continuous float */}
                    <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="bg-white text-black text-[10px] font-bold px-3 py-1.5 rounded-sm shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    >
                        +124% ROI
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={{
                        initial: { opacity: 0, x: -10, scale: 0.8 },
                        hover: { opacity: 1, x: 0, scale: 1, transition: { delay: 1, type: "spring" } }
                    }}
                    className="absolute top-[40%] left-2 z-30"
                >
                    <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="bg-neutral-900 border border-neutral-700 text-neutral-300 text-[10px] font-medium px-2 py-1 rounded-sm flex items-center gap-1.5"
                    >
                        <Activity size={10} className="text-green-500" />
                        <span>Growth</span>
                    </motion.div>
                </motion.div>

            </div>
        </BentoCard>
    );
};

// --- SERVICE 4: Content Creation (The Typing/Media Interaction) ---
const ContentCreationCard = () => {
    return (
        <BentoCard
            title="Content Creation"
            icon={PenTool}
            description="Engaging copy and multimedia production."
            className="col-span-1 md:col-span-2 min-h-[300px]"
        >
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-full max-w-[300px] pointer-events-none">
                {/* Chat Bubbles */}
                <div className="space-y-3">
                    <motion.div
                        variants={{ initial: { x: -20, opacity: 0.5 }, hover: { x: 0, opacity: 1 } }}
                        className="flex gap-3"
                    >
                        <div className="w-8 h-8 rounded-none bg-neutral-800 flex items-center justify-center border border-neutral-700">
                            <MessageSquare size={14} className="text-neutral-400" />
                        </div>
                        <div className="bg-neutral-900 border border-neutral-800 p-3 rounded-lg rounded-tl-none text-xs text-neutral-300 w-[180px]">
                            <div className="h-2 w-full bg-neutral-800 rounded-sm mb-2" />
                            <div className="h-2 w-2/3 bg-neutral-800 rounded-sm" />
                        </div>
                    </motion.div>

                    <motion.div
                        variants={{ initial: { x: 20, opacity: 0.5 }, hover: { x: 0, opacity: 1, transition: { delay: 0.1 } } }}
                        className="flex gap-3 flex-row-reverse"
                    >
                        <div className="w-8 h-8 rounded-none bg-white flex items-center justify-center">
                            <PenTool size={14} className="text-black" />
                        </div>
                        <div className="bg-white text-black p-3 rounded-lg rounded-tr-none text-xs w-[180px]">
                            <span className="font-semibold">Drafting post...</span>
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                            >
                                |
                            </motion.span>
                        </div>
                    </motion.div>
                </div>

                {/* Media Files Floating */}
                <motion.div
                    variants={{ hover: { y: -15, rotate: -5, x: -5 } }}
                    className="absolute -right-4 top-12 w-16 h-20 bg-neutral-800 border border-neutral-600 rounded-sm shadow-2xl z-0"
                />
                <motion.div
                    variants={{ hover: { y: -20, rotate: 5, x: 5 } }}
                    className="absolute -right-8 top-16 w-16 h-20 bg-neutral-700 border border-neutral-500 rounded-sm shadow-2xl z-10"
                />
            </div>
        </BentoCard>
    );
};

// --- SERVICE 5: Social Media Handling ---
const SocialMediaHandlingCard = () => {
    return (
        <BentoCard
            title="Social Media Handling"
            icon={Smartphone}
            description="End-to-end management of your digital presence."
            className="col-span-1 md:col-span-2 min-h-[300px]"
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Mockup Phone Interface */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[80%] bg-neutral-900 border-t border-x border-neutral-800 rounded-t-lg p-4">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4 border-b border-neutral-800 pb-2">
                        <div className="w-8 h-8 rounded-none bg-neutral-800" />
                        <div className="w-20 h-2 bg-neutral-800 rounded-sm" />
                    </div>

                    {/* Feed Items */}
                    <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                className="flex gap-3 items-start p-2 rounded-sm bg-neutral-800/30"
                                variants={{
                                    hover: { y: -5, backgroundColor: "rgba(255,255,255,0.05)" }
                                }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="w-8 h-8 rounded-sm bg-neutral-700 shrink-0" />
                                <div className="flex-1 space-y-2 py-1">
                                    <div className="w-full h-2 bg-neutral-700 rounded-sm" />
                                    <div className="w-2/3 h-2 bg-neutral-700 rounded-sm" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Floating Reactions */}
                    <motion.div
                        className="absolute bottom-10 right-8"
                        initial={{ opacity: 0 }}
                        variants={{ hover: { opacity: 1 } }}
                    >
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                className="absolute bottom-0 right-0 text-red-500"
                                animate={{
                                    y: [0, -60 - (i * 20)],
                                    x: Math.sin(i) * 20,
                                    opacity: [0, 1, 0],
                                    scale: [0.5, 1, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.5,
                                    ease: "easeOut"
                                }}
                            >
                                <ThumbsUp size={16} fill="currentColor" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </BentoCard>
    );
};

// --- SERVICE 6: Product Shoots ---
const ProductShootsCard = () => {
    return (
        <BentoCard
            title="Product Shoots"
            icon={Package}
            description="Showcasing products in their best light."
            className="col-span-1 min-h-[300px]"
        >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Product Pedestal */}
                <div className="relative">
                    {/* The Product (Perfume Bottle Shape) */}
                    <motion.div
                        className="relative z-10 w-16 h-24 bg-gradient-to-br from-neutral-700 to-neutral-900 rounded-sm border border-neutral-600 flex items-center justify-center overflow-hidden"
                        variants={{ hover: { scale: 1.05, rotateY: 10 } }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        <div className="w-8 h-8 bg-neutral-800/50 rounded-sm border border-neutral-600" />

                        {/* Light Sweep */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                            initial={{ x: "-150%" }}
                            variants={{
                                hover: {
                                    x: "150%",
                                    transition: { duration: 1, repeat: Infinity, repeatDelay: 1 }
                                }
                            }}
                        />
                    </motion.div>

                    {/* Shadow/Platform */}
                    <motion.div
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black/50 blur-md rounded-[100%]"
                        variants={{ hover: { scale: 0.8, opacity: 0.5 } }}
                    />
                </div>
            </div>
        </BentoCard>
    );
};

// --- SERVICE 7: Influencer Marketing ---
const InfluencerMarketingCard = () => {
    return (
        <BentoCard
            title="Influencer Marketing"
            icon={Users}
            description="Connecting brands with key opinion leaders."
            className="col-span-1 min-h-[300px]"
        >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-full h-full">
                    {/* Central Node */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                        variants={{ hover: { scale: 1.1 } }}
                    >
                        <div className="w-16 h-16 rounded-none bg-neutral-800 border-2 border-white/20 flex items-center justify-center relative">
                            <Users size={24} className="text-white" />
                            {/* Verification Badge */}
                            <motion.div
                                className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-sm border-2 border-black flex items-center justify-center"
                                initial={{ scale: 0 }}
                                variants={{ hover: { scale: 1 } }}
                            >
                                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Orbiting Nodes */}
                    {[0, 120, 240].map((angle, i) => (
                        <motion.div
                            key={i}
                            className="absolute top-1/2 left-1/2 w-2 h-2"
                            initial={{ rotate: angle }}
                            animate={{ rotate: angle + 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        >
                            <motion.div
                                className="absolute -top-16 left-1/2 -translate-x-1/2 w-10 h-10 bg-neutral-900 border border-neutral-700 rounded-none flex items-center justify-center"
                                variants={{ hover: { scale: 1.2, borderColor: "rgba(255,255,255,0.5)" } }}
                            >
                                <div className="w-full h-[1px] bg-white/20 absolute top-1/2 left-1/2 w-[60px] origin-left rotate-90" style={{ transform: 'translate(-50%, 0) rotate(90deg) scaleX(0.5)' }} />
                            </motion.div>
                        </motion.div>
                    ))}

                    {/* Static connecting lines for visual grounding */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                        <circle cx="50%" cy="50%" r="64" fill="none" stroke="white" strokeDasharray="4 4" />
                    </svg>
                </div>
            </div>
        </BentoCard>
    );
};

// --- SERVICE 8: Advertisement Shoots ---
const AdvertisementShootsCard = () => {
    return (
        <BentoCard
            title="Advertisement Shoots"
            icon={Video}
            description="TVC and digital ad production."
            className="col-span-1 min-h-[300px]"
        >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    className="relative"
                    variants={{ hover: { scale: 1.05 } }}
                >
                    {/* Clapperboard Top */}
                    <motion.div
                        className="w-24 h-5 bg-white rounded-none origin-bottom-left relative z-10"
                        style={{ backgroundImage: "linear-gradient(135deg, transparent 50%, #171717 50%)", backgroundSize: "20px 20px" }}
                        variants={{
                            hover: {
                                rotate: [0, -25, 0],
                                transition: { duration: 0.8, repeat: Infinity, repeatDelay: 0.5 }
                            }
                        }}
                    />

                    {/* Clapperboard Bottom */}
                    <div className="w-24 h-16 bg-neutral-900 border-2 border-white rounded-none mt-1 flex flex-col items-center justify-center gap-1">
                        <div className="text-[8px] text-neutral-400 font-mono tracking-widest">PRODUCTION</div>
                        <div className="text-sm font-bold text-white tracking-widest">AD-01</div>
                        <div className="flex gap-2 w-full px-2 mt-1">
                            <div className="h-1 bg-white/20 w-1/3 rounded-none" />
                            <div className="h-1 bg-white/20 w-1/3 rounded-none" />
                            <div className="h-1 bg-white/20 w-1/3 rounded-none" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </BentoCard>
    );
};

// --- SERVICE 9: Celebrity Management ---
const CelebrityManagementCard = () => {
    return (
        <BentoCard
            title="Celebrity Management"
            icon={Crown}
            description="Talent coordination and PR management."
            className="col-span-1 min-h-[300px]"
        >
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
                {/* The Star */}
                <motion.div
                    className="relative z-10"
                    variants={{ hover: { scale: 1.1, rotate: 5 } }}
                >
                    <Star size={56} className="text-yellow-500 fill-yellow-500/20" strokeWidth={1.5} />
                </motion.div>

                {/* Paparazzi Flashes */}
                <motion.div
                    className="absolute inset-0 bg-white"
                    variants={{
                        initial: { opacity: 0 },
                        hover: {
                            opacity: [0, 0.8, 0, 0, 0.5, 0],
                            transition: {
                                duration: 0.5,
                                repeat: Infinity,
                                repeatDelay: 0.2,
                                times: [0, 0.1, 0.2, 0.5, 0.6, 1]
                            }
                        }
                    }}
                />

                {/* Spotlights (Optional cool effect) */}
                <div className="absolute top-0 left-0 w-full h-full mix-blend-overlay opacity-30">
                    <motion.div
                        className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,white_20deg,transparent_40deg)]"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </div>
        </BentoCard>
    );
};

// --- MAIN GRID LAYOUT ---
export function ServicesBentoGrid() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-8 flex items-center justify-center font-sans">
            <div className="max-w-[1600px] w-full mx-auto">
                <div className="mb-12">
                    <div className="flex items-center gap-4">
                        <h2 className="text-4xl font-bold tracking-tighter text-white mb-2">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400"> Services </span></h2>
                        <div className="hidden md:block w-24 h-px bg-white/20"></div>
                    </div>
                    <p className="text-neutral-500">Hover over the cards to explore our services.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">


                    {/* Row 0 - Previous Top Row */}
                    <ProductShootsCard />
                    <InfluencerMarketingCard />
                    <AdvertisementShootsCard />
                    <CelebrityManagementCard />

                    {/* Row 1 - New Top Layer */}
                    <PhotographyCard />
                    <VideographyCard />

                    {/* Row 2 - Mixed (Social Media + 2 Small) */}
                    <SocialMediaHandlingCard />
                    <BrandShootCard />
                    <DigitalMarketingCard />

                    {/* Row 3 - Large Cards */}
                    <ContentCreationCard />
                    <WebDesignCard />
                </div>
            </div>
        </div>
    );
}