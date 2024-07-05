import { cn } from "@/lib/utils"
import { Link } from "@/navigation"
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

function SocialIcons({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-x-2", className && className)}>
      <Link href={"#"}>
        <InstagramLogoIcon className={"h-[20px] w-[20px]"} />
      </Link>

      <Link href={"#"}>
        <LinkedInLogoIcon className={"h-[20px] w-[20px]"} />
      </Link>
    </div>
  )
}

export default SocialIcons
