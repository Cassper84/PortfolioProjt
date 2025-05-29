type Props = { 
    id: string
}

export default function Video({ id }: Props) {
    return (
        <div className="my-12 w-full max-w-3xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${id}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
        </div>
    )
}
