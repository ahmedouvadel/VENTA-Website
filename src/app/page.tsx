import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { RoleSection } from '@/components/RoleSection'
import { WhyChooseVenta } from '@/components/WhyChooseVenta'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <RoleSection />
        <WhyChooseVenta />
      </main>
      <Footer />
    </div>
  )
}

