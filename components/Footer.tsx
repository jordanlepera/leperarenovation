import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Masonry Masters</h3>
            <p className="text-sm text-muted-foreground">
              Expert masonry services for all your construction needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:underline">Home</Link></li>
              <li><Link href="/services" className="text-sm hover:underline">Services</Link></li>
              <li><Link href="/gallery" className="text-sm hover:underline">Gallery</Link></li>
              <li><Link href="/contact" className="text-sm hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-sm hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-sm hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Masonry Masters. All rights reserved.
        </div>
      </div>
    </footer>
  );
}