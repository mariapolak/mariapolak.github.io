"use client";
import { useRouter } from 'next/navigation'

export default function Return() {
    const router = useRouter()
    return (
         <div className="block fixed top-0 flex pt-4 pl-7 text-gray-700 dark:text-white">
            <div onClick={() => router.back()} className="text-current hover:text-secondary transition-colors duration-200 cursor-pointer">Go back</div>
        </div>
    );
}