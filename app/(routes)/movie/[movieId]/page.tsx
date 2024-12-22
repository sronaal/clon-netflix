


export default function MovieId({ params }: {
    params : {movieId: string}
}) {
    
    console.log(params.movieId)
    return (
        <>
            <p className="text-4xl text-white">{params.movieId}</p>

        </>
    )
}
