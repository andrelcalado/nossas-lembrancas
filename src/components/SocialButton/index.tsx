// Type
import { SocialButtonProps } from "@/types/layoutTypes"

// Styles
import { SocialButtonContent } from "./styles"

const SocialButton = ({ icon, url, target = '_blank' }: SocialButtonProps) => {
  return (
    <SocialButtonContent href={url} target={target}>
      {icon}
    </SocialButtonContent>
  )
}

export default SocialButton