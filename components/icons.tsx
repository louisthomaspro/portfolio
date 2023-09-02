import { SVGProps } from "react"
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"

// Imported svg
// type Icon = Partial<SVGProps<SVGSVGElement>>

export const Icons = {
  twitter: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} icon={faXTwitter} />,
  github: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} icon={faGithub} />,
  linkedIn: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} icon={faLinkedin} />,
}
