import Link from 'next/link'

export default function NotFound(){
    return(
        <div className="not-found">
            <h1>Oooooops...</h1>
            <h2>Esta página no fue encontrada</h2>
            <p>Prueba con volver a la <Link href="/homepage"><a>Homepage</a></Link></p>
        </div>
    )
}