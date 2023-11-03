import Image from "next/image"
import { StackItem } from "@/types"

export const StackCard = ({ stackItem }: { stackItem: StackItem }) => (
  <div className="py-2.5 justify-start items-center gap-4 inline-flex">
    <Image className="w-8 h-8" width={100} height={100} src={stackItem.logo} alt={stackItem.title} />
    <div className="text-sm">
      <div className="font-semibold">NextJS</div>
      <div>Framework built on top of React</div>
    </div>
  </div>
)
