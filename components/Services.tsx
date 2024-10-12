"use client"

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Hammer, Building, Wrench, Ruler, Shovel, Concrete } from 'lucide-react';

const services = [
  { title: 'Demolition', description: 'Safe and efficient demolition services', Icon: Hammer },
  { title: 'Exterior Construction', description: 'Building beautiful and durable exteriors', Icon: Building },
  { title: 'Structural Work', description: 'Ensuring the integrity of your building', Icon: Wrench },
  { title: 'Screed and Levelling', description: 'Perfect flooring solutions', Icon: Ruler },
  { title: 'Formwork', description: 'Precise concrete forming services', Icon: Shovel },
  { title: 'Concrete Pouring', description: 'High-quality concrete solutions', Icon: Concrete },
];

export default function Services() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description, Icon, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card>
        <CardHeader>
          {Icon && <Icon className="w-12 h-12 mb-4 text-primary" />}
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}