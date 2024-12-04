import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { RoleSection } from '@/components/RoleSection'
import { WhyChooseVenta } from '@/components/WhyChooseVenta'
import { Footer } from '@/components/Footer'
import { ForClient } from '@/components/ForClient'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <RoleSection />
        <ForClient />
        <WhyChooseVenta />
      </main>
      <Footer />
    </div>
  )
}

