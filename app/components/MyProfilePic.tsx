import Image from "next/image"

export default function MyProfilePic() {
    return (
        <section className="w-full mx-auto">
            <Image
                className="drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
                src="/images/myphoto_2025.jpg"
                width={200}
                height={200}
                alt="Cassper's profile picture"
                priority={true}
            />
        </section>
    )
}