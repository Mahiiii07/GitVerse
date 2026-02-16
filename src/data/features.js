import { NotepadText, RefreshCcw, Zap } from "lucide-react";

const features = [
    {
        title: "Smooth Topic Navigation",
        subtitle: "Smart scrolling",
        icon: NotepadText,
        description:
            "Move seamlessly across topics with smooth scrolling. Active sections stay highlighted so you never lose context.",
        gradient: "hover:from-blue-500/20 hover:to-cyan-400/20",
        iconGradient: "from-blue-500 to-cyan-400",
    },
    {
        title: "Structured Git Learning",
        subtitle: "Concept-based modules",
        icon: RefreshCcw,
        description:
            "Learn Git and GitHub through a clear, structured flow. Topics are organized to make complex ideas easy to follow.",
        gradient: "hover:from-cyan-400/20 hover:to-purple-400/20",
        iconGradient: "from-cyan-400 to-purple-400",
    },
    {
        title: "Clean Developer UI",
        subtitle: "Modern experience",
        icon: Zap,
        description:
            "A modern, responsive interface built for developers. Designed to stay fast, clean, and distraction-free.",
        gradient: "hover:from-purple-500/20 hover:to-blue-500/20",
        iconGradient: "from-purple-400 to-blue-500",
    },
];

export default features;