// author: Khoa Phan <https://www.pldkhoa.dev>

"use client"


import { ScrollText } from "../../../shared/ui/base/scroll-text"
import Letter3DSwap from "../../../shared/ui/base/letter-3d-swap";
type ProductDescProps = {
    title: string;
    description: string;
    iconUrl?: string;
}

export default function ProductDesc({ title, description, iconUrl }: ProductDescProps) {

    return (
        <div className="py-12">
            <span className="flex justify-center items-center gap-2">
                {iconUrl && (
                    <img 
                        src={iconUrl} 
                        alt={`icon`} 
                        className="w-10 h-10 object-contain" 
                    />
                )}
            </span>
            <Letter3DSwap
                mainClassName="text-heading-section italic text-2xl bg-background text-center w-full justify-center py-2"
                frontFaceClassName={`bg-background  text-foreground`}
                secondFaceClassName={`bg-background text-foreground`}
                rotateDirection="top"
                staggerDuration={0.03}
                staggerFrom="first"
                transition={{ type: "spring", damping: 25, stiffness: 160 }}
            >{title}
            </Letter3DSwap>
            <ScrollText
                className="text-base-600 mt-2"
                text={description} />
        </div>
    )
}
