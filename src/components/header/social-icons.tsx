import { cn } from "@/lib/utils";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

function SocialIcons({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-x-2", className && className)}>
      <Link href={"#"}>
        <InstagramLogoIcon className={"w-[20px] h-[20px]"} />
      </Link>

      <Link href={"#"}>
        <LinkedInLogoIcon className={"w-[20px] h-[20px]"} />
      </Link>
    </div>
  );
}

export default SocialIcons;
