import Link from "next/link";

export default function Header(){
  return(
    <header className="flex items-center justify-between py-4">
      <Link className="text-red-500 font-semibold text-2xl" href="/">ST PIZZA</Link>
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link href={''}>Home</Link>
        <Link href={'#menu'}>Menu</Link>
        <Link href={'#about'}>About</Link>
        <Link href={''}>Contact</Link>
        <Link href={''} className="bg-red-500 rounded-full text-white px-8 py-2">Login</Link>
      </nav>
    </header>
  )
}
