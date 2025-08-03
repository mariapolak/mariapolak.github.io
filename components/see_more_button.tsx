// import { motion } from "motion/react"

import Link from "next/link";

export function SeeMoreButton({ className, link }: { className: string, link: string }) {
    return (
        <div className={className}>
            <Link
            href={link}
            className="text-xs underline text-current hover:text-secondary transition-colors duration-200"
            style={{ minWidth: 24, minHeight: 24, padding: "0px 4px 4px 0px" }}
            >
            see more...
            </Link>
        </div>

    )
}
