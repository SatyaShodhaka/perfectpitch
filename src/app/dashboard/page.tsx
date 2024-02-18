"use client";

import { useAuth } from "../../../firebase/auth";
import { useRouter } from "next/navigation";
import { db } from "../../../firebase/firebase";
import { ClockIcon } from "@heroicons/react/24/solid";

export default function Page() {
	const { authUser } = useAuth();

	console.log(authUser);

	return (
		<div className="p-12 flex items-center">
			<h1 className="text-secondaryText font-semibold text-3xl">
			Elevate Your Interview Skills, One Question at a Time.
			</h1>
		</div>
	);
}
