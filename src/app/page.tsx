import Heading from "@/components/heading.tsx";

export default function Home() {
  return (
    <main>
      <Heading className="text-8xl" el="h1">H1 Heading</Heading>
      <Heading className="text-7xl" el="h2">H2 Heading</Heading>
      <Heading className="text-6xl" el="h3">H3 Heading</Heading>
      <Heading className="text-5xl" el="h4">H4 Heading</Heading>
      <Heading className="text-4xl" el="h5">H5 Heading</Heading>
      <Heading className="text-3xl" el="h6">H6 Heading</Heading>
    </main>
  )
}
