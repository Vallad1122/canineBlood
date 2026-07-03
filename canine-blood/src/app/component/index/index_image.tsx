import Image from "next/image";

export default function index_body() {
    return (
        <div>
            <Image src="/images/dog_avatar_example.webp" alt="Dog Avatar" className="flex position-relative" width={128} height={128} />
        </div>

    )
}