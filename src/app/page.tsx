import Link from "next/link";

export default function Index() {
	return (
		<div className="flex-1 w-full flex flex-col gap-20 items-center">
			<div className="text-center font-medium mt-32">
				<p className="text-6xl mb-3">Interview Confidence</p>
				<p className="text-6xl text-secondaryText">
					Crafted Just for You.
				</p>
			</div>

			<Link href="/dashboard" passHref>
				<p className="inline-flex items-center gap-2 py-3 px-6 bg-white text-secondaryText font-bold text-lg leading-6 rounded-md hover:bg-gray-100 transition-colors cursor-pointer">
					<span>Let's get started</span>
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
					</svg>
				</p>
			</Link>
			
		</div>
	);
}
