import { SVGProps } from "react"
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import {
  faArrowRight,
  faChevronRight,
  faFolder,
  faLayerGroup,
  faLocationDot,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"

import { cn } from "@/lib/utils"

// Imported svg
// type Icon = Partial<SVGProps<SVGSVGElement>>

export const Icons = {
  twitter: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} icon={faXTwitter} />,
  github: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} icon={faGithub} />,
  linkedIn: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} icon={faLinkedin} />,
  externalLink: (props: Partial<FontAwesomeIconProps>) => (
    <FontAwesomeIcon {...props} className={cn(props.className, "-rotate-45")} icon={faArrowRight} />
  ),
  stack: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} icon={faLayerGroup} />,
  blog: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} icon={faNewspaper} />,
  location: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} icon={faLocationDot} />,
  project: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} icon={faFolder} />,
  chevronRight: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} icon={faChevronRight} />,
}
