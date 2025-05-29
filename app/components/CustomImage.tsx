import Image from "next/image"

type Props = {
    src: string,
    alt: string,
    priority?: string,
}

export default function CustomImage({ src, alt, priority }: Props) {
    const prty = priority ? true : false

    return (
        <div className="my-12 w-full max-w-3xl mx-auto">
            <Image
                className="rounded-lg shadow-md"
                src={src}
                alt={alt}
                width={650}
                height={650}
                priority={prty}
            />
        </div>
    )
}
