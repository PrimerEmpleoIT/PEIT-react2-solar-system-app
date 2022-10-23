import Link from "next/link"

export default function Notfound(){
    return (
        <div className="not-found">
            <h1>Ooooooooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a>
            </Link> </p>
            
        </div>
    )
}