import { config } from "@fortawesome/fontawesome-svg-core"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import {
  faArrowLeft,
  faArrowRight,
  faBriefcase,
  faDownload,
  faFileLines,
  faLayerGroup,
  faLocationDot,
  faRocket,
  faSpinner,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"

import { cn } from "@/lib/utils"

config.autoAddCss = false

// Imported svg
// type Icon = Partial<SVGProps<SVGSVGElement>>

type IconProps = Partial<FontAwesomeIconProps>

export const Icons = {
  linkedIn: (props: IconProps) => <FontAwesomeIcon {...props} icon={faLinkedin} />,
  cv: (props: IconProps) => <FontAwesomeIcon {...props} icon={faFileLines} />,
  download: (props: IconProps) => <FontAwesomeIcon {...props} icon={faDownload} />,
  spinner: (props: IconProps) => <FontAwesomeIcon {...props} icon={faSpinner} />,
  arrowLeft: (props: IconProps) => <FontAwesomeIcon {...props} icon={faArrowLeft} />,
  arrowRight: (props: IconProps) => <FontAwesomeIcon {...props} icon={faArrowRight} />,
  externalLink: (props: IconProps) => (
    <FontAwesomeIcon {...props} className={cn(props.className, "-rotate-45")} icon={faArrowRight} />
  ),
  stack: (props: IconProps) => <FontAwesomeIcon {...props} icon={faLayerGroup} />,
  location: (props: IconProps) => <FontAwesomeIcon {...props} icon={faLocationDot} />,
  project: (props: IconProps) => <FontAwesomeIcon {...props} icon={faRocket} />,
  experience: (props: IconProps) => <FontAwesomeIcon {...props} icon={faBriefcase} />,
  about: (props: IconProps) => <FontAwesomeIcon {...props} icon={faUserCircle} />,
}
