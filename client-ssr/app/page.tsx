import Layout from '@/components/layout'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-6xl font-bold text-center">Hello World</h1>
      </main>
    </Layout>
  )
}
