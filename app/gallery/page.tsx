import { Metadata } from 'next';
import GalleryCarousel from '@/components/GalleryCarousel';

export const metadata: Metadata = {
  title: 'Gallery | Masonry Masters',
  description: 'View our portfolio of masonry projects',
};

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Gallery</h1>
      <GalleryCarousel />
    </div>
  );
}