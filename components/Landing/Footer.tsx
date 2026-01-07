import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#020617_0%,#042f2e_50%,#020617_100%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
            {/* <div className="flex items-center gap-2 text-white text-xl font-semibold"> */}
              <Image src="/logo.avif" alt="logo" width={80} height={30}/>
            {/* </div> */}

            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@xpaycheckout.com</span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  4th Floor, 1331 24th Main, HSR, Bengaluru
                </span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  1045 Elm Street, Suite 204 Manchester <br />
                  New Hampshire 03101
                </span>
              </div>
            </div>

            <Button
              variant="secondary"
              className="rounded-full px-6 font-medium"
            >
              Talk to Us →
            </Button>
          </div>

          {/* Explore */}
          <FooterColumn
            title="Explore"
            links={["Products", "FAQs", "Pricing", "Blogs", "Purpose Code"]}
          />

          {/* Solutions */}
          <FooterColumn
            title="Solutions"
            links={["Edtech", "SaaS", "Travel", "Digital", "Consumer"]}
          />

          {/* Policies */}
          <FooterColumn
            title="Policies"
            links={[
              "Terms and Conditions",
              "Privacy Policy",
              "Shipping Policy",
              "Cancellation and Refund Policy",
            ]}
          />
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-muted-foreground">
          <p>
            Go Global, Effortlessly – Experience the Future of International
            Expansion with xPay. © 2026. All rights reserved.
          </p>

          <Link
            href="#"
            className="text-muted-foreground hover:text-white transition"
          >
            in
          </Link>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: string[]
}) {
  return (
    <div className="space-y-4">
      <h4 className="text-sm font-medium text-white">{title}</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {links.map((link) => (
          <li key={link}>
            <Link
              href="#"
              className="hover:text-white transition"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
