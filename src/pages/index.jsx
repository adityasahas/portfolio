import Head from 'next/head'
import LandingSection  from '@/components/landing'
import AboutMeSection from '@/components/about'
import OrganizationsSection from '@/components/organizations'
export default function Home() {
  return (
    <>
      <Head>
        <title>Aditya Sahasranam's Portfolio</title>
        <meta name="description" content="https://adityasahas.tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingSection />
      <AboutMeSection />
      <OrganizationsSection />
    </>
  )
}
