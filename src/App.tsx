import  Button  from "@/components/Button"
import { Card, CardContent } from "@/components/Card"
import { CheckCircle, BarChart, Users, TrendingUp, ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

interface CaseStudyCardProps {
  title: string
  description: string
}

interface PricingCardProps {
  title: string
  price: string
  features: string[]
  highlighted?: boolean
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#151515] text-gray-100 selection:bg-blue-900/75 selection:text-white">
      <header className="fixed top-0 left-0 right-0 px-4 lg:px-6 h-16 flex items-center backdrop-blur-sm bg-[#151515]/75 z-50 border-b border-gray-800/50">
        <a className="flex items-center justify-center" href="#">
          <div className="w-8 h-8 rounded-lg bg-blue-600" />
          <span className="ml-2 text-lg font-medium tracking-tight">VLine Example</span>
        </a>
        <nav className="ml-auto flex items-center gap-1 sm:gap-2">
          <a 
            className="px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors" 
            href="#services"
          >
            Services
          </a>
          <a 
            className="px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors" 
            href="#case-studies"
          >
            Case Studies
          </a>
          <a 
            className="px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors" 
            href="#pricing"
          >
            Pricing
          </a>
          <a 
            className="px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors" 
            href="#contact"
          >
            Contact
          </a>
          <div className="h-4 w-px bg-gray-800 mx-2" />
          <Button 
            variant="ghost" 
            className="text-gray-900 hover:text-white hover:bg-[#151515]"
          >
            Log in
          </Button>
          <Button 
            className="bg-white text-gray-900 hover:bg-gray-200 transition-colors ml-2"
          >
            Sign up
          </Button>
        </nav>
      </header>
      <main className="flex-1 pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Marketing that drives
                  <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    measurable growth
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Affordable, results-driven solutions for small and medium-sized businesses. Get enterprise-level marketing on a budget you can afford.
                </p>
              </div>
              <div className="space-x-4">
                <Button 
                  className=" text-gray-800 hover:text-gray-100 border-gray-700 hover:border-gray-600 hover:bg-gray-800/50 transition-colors"
                  size="lg" variant={"outline"}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  className="text-gray-800 hover:text-gray-100 border-gray-700 hover:border-gray-600 hover:bg-gray-800/50 transition-colors"
                  size="lg"
                >
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 border-t border-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<BarChart className="h-6 w-6 text-blue-400" />}
                title="Digital Marketing"
                description="Reach your target audience online with our cost-effective digital marketing strategies."
              />
              <ServiceCard
                icon={<Users className="h-6 w-6 text-blue-400" />}
                title="Social Media Management"
                description="Engage your customers and grow your brand with our expert social media services."
              />
              <ServiceCard
                icon={<TrendingUp className="h-6 w-6 text-blue-400" />}
                title="SEO Optimization"
                description="Improve your search engine rankings and drive more organic traffic to your website."
              />
            </div>
          </div>
        </section>
        <section id="case-studies" className="w-full py-12 md:py-24 lg:py-32 border-t border-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl text-center mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CaseStudyCard
                title="Local Bakery Increases Sales by 150%"
                description="Through targeted social media campaigns and local SEO optimization, we helped a family-owned bakery significantly boost their online presence and in-store sales."
              />
              <CaseStudyCard
                title="Tech Startup Achieves 10x ROI on Ad Spend"
                description="Our data-driven approach to PPC advertising helped a B2B SaaS startup maximize their marketing budget and acquire high-value clients at a fraction of the cost."
              />
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 border-t border-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl text-center mb-12">Simple, Transparent Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard
                title="Starter"
                price="$499/mo"
                features={[
                  "Social Media Management (2 platforms)",
                  "Basic SEO Optimization",
                  "Monthly Performance Report"
                ]}
              />
              <PricingCard
                title="Growth"
                price="$999/mo"
                features={[
                  "Social Media Management (4 platforms)",
                  "Advanced SEO Optimization",
                  "Google Ads Management",
                  "Bi-weekly Performance Report"
                ]}
                highlighted={true}
              />
              <PricingCard
                title="Premium"
                price="$1,999/mo"
                features={[
                  "Full-Service Digital Marketing",
                  "Social Media Management (all platforms)",
                  "Advanced SEO & Content Marketing",
                  "Weekly Performance Report & Strategy Call"
                ]}
              />
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t border-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Ready to Grow Your Business?</h2>
                <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch for a free consultation and let's create a marketing strategy tailored to your business goals and budget.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800/50 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700 transition-colors"
                    type="text"
                    placeholder="Your Name"
                  />
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800/50 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700 transition-colors"
                    type="email"
                    placeholder="Your Email"
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    Request Free Consultation
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-gray-800 bg-[#151515]/75 backdrop-blur-sm">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 px-4 md:px-6 mx-auto">
          <p className="text-xs text-gray-400">© 2024 GrowthBoost Marketing. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
            <a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="group relative overflow-hidden border-gray-800 bg-gray-800/50 hover:bg-gray-800/75 transition-colors">
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-lg font-medium tracking-tight mb-2 text-gray-300">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowRight className="h-4 w-4 text-gray-400" />
        </div>
      </CardContent>
    </Card>
  )
}

function CaseStudyCard({ title, description }: CaseStudyCardProps) {
  return (
    <Card className="group border-gray-800 bg-gray-800/50 hover:bg-gray-800/75 transition-colors">
      <CardContent className="p-6">
        <h3 className="text-lg font-medium tracking-tight mb-2 text-gray-300">{title}</h3>
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        <Button 
          variant="link" 
          className="px-4 py-2 h-auto text-blue-400 hover:text-blue-300 transition-colors bg-gray-800/75 mt-4"
        >
          Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}

function PricingCard({ title, price, features, highlighted = false }: PricingCardProps) {
  return (
    <Card className={`relative border-gray-800 ${
      highlighted 
        ? 'bg-blue-600 hover:bg-blue-700' 
        : 'bg-gray-800/50 hover:bg-gray-800/75'
    } transition-colors`}>
      <CardContent className="p-6">
        <h3 className={`text-lg font-medium tracking-tight mb-2 ${highlighted ? `text-gray-50` : `text-gray-400`}`}>{title}</h3>
        <p className={`text-3xl font-medium tracking-tight mb-4 ${highlighted ? `text-white` : `text-gray-300`}`}>{price}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <CheckCircle className={`mr-2 h-4 w-4 ${
                highlighted ? 'text-white' : 'text-blue-400'
              }`} />
              <span className={highlighted ? 'text-white' : 'text-gray-400'}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
        <Button className={`w-full ${
          highlighted 
            ? 'bg-white text-blue-600 hover:bg-gray-100' 
            : 'bg-gray-700 text-white hover:bg-gray-600'
        } transition-colors`}>
          Choose Plan
        </Button>
      </CardContent>
    </Card>
  )
}