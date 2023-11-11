import { faFigma, faGithub, faGooglePlay, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import {
  faArrowRight,
  faChevronLeft,
  faChevronRight,
  faFolder,
  faGlobe,
  faHeart,
  faLayerGroup,
  faLocationDot,
  faNewspaper,
  faPuzzlePiece,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"

import { cn } from "@/lib/utils"

// Imported svg
// type Icon = Partial<SVGProps<SVGSVGElement>>

export const Icons = {
  twitter: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} icon={faXTwitter} />,
  github: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} icon={faGithub} />,
  linkedIn: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} icon={faLinkedin} />,
  website: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} icon={faGlobe} />,
  figma: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} icon={faFigma} />,
  playStore: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} icon={faGooglePlay} />,
  plugin: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} icon={faPuzzlePiece} />,
  externalLink: (props: Partial<FontAwesomeIconProps>) => (
    <FontAwesomeIcon {...props} className={cn(props.className, "-rotate-45")} icon={faArrowRight} />
  ),
  stack: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} icon={faLayerGroup} />,
  blog: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} icon={faNewspaper} />,
  location: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} icon={faLocationDot} />,
  project: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} icon={faFolder} />,
  about: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} icon={faUserCircle} />,
  chevronRight: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} icon={faChevronRight} />,
  chevronLeft: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} icon={faChevronLeft} />,
  favorite: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} icon={faHeart} />,
}
