import Link from "next/link"

export default function AboutUs() {
    console.log('AboutUs Page')
    return <div>
        <Link href={'/about-us/company'}>Compayny</Link>

        <h1>About Us</h1>
    </div>
}