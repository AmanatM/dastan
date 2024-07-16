import { cn } from "@/lib/utils"
import { Link } from "@/navigation"
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

function SocialIcons({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-x-2", className && className)}>
      <Link href={"https://www.instagram.com/dastanabik/"} target="_blank">
        <InstagramLogoIcon className={"h-[20px] w-[20px]"} />
      </Link>

      <Link href={"https://www.linkedin.com/in/dastanabik"} target="_blank">
        <LinkedInLogoIcon className={"h-[20px] w-[20px]"} />
      </Link>
    </div>
  )
}

export default SocialIcons
