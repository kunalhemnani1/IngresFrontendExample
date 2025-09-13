export default function Loading(){
    const isLoading = true
    return  (
    <div className={`fixed inset-0 bg-white dark:bg-slate-900 flex flex-col items-center justify-center z-[100] transition-opacity duration-500 ease-in-out ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="relative w-24 h-24 text-blue-600 dark:text-blue-400">
            <svg viewBox="0 0 80 92" className="w-full h-full">
                <defs>
                    <clipPath id="hexagon-clip">
                        <path d="M40 0 L80 23 V69 L40 92 L0 69 V23 Z" />
                    </clipPath>
                </defs>
                <g clipPath="url(#hexagon-clip)">
                    <path
                        id="wave-path"
                        d="M -40 60 Q -20 45, 0 60 T 40 60 T 80 60 T 120 60 V 100 H -40 Z"
                        fill="currentColor"
                        className="opacity-70 animate-wave"
                    />
                     <path
                        d="M -40 65 Q -20 50, 0 65 T 40 65 T 80 65 T 120 65 V 100 H -40 Z"
                        fill="currentColor"
                        className="opacity-40 animate-wave-slow"
                    />
                </g>
                 <path d="M40 0 L80 23 V69 L40 92 L0 69 V23 Z" fill="none" stroke="currentColor" strokeWidth="3" />
            </svg>
        </div>
        <p className="mt-6 text-sm text-slate-500 dark:text-slate-400 tracking-wider">
            FETCHING GROUNDWATER INSIGHTS...
        </p>
    </div>
);

}