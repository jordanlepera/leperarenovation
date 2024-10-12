import { Metadata } from 'next';
import ServiceList from '@/components/ServiceList';

export const metadata: Metadata = {
  title: 'Our Services | Masonry Masters',
  description: 'Explore our wide range of masonry services',
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <ServiceList />
    </div>
  );
}