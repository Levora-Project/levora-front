import { BsLinkedin } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

export default function SocialAuth() {
  return (
    <div className="gap-3 grid grid-cols-2">
      <button
        type="button"
        className="flex justify-center items-center gap-2 border border-neutral-200 hover:border-neutral-400 rounded-sm h-11 font-medium text-neutral-800 text-sm transition-colors"
      >
        <FcGoogle className="text-lg" />
        Google
      </button>
      <button
        type="button"
        className="flex justify-center items-center gap-2 border border-neutral-200 hover:border-neutral-400 rounded-sm h-11 font-medium text-neutral-800 text-sm transition-colors"
      >
        <BsLinkedin className="text-[#0A66C2]" />
        LinkedIn
      </button>
    </div>
  );
}
