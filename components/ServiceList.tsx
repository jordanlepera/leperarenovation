"use client"

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Hammer, Building, Wrench, Ruler, Shovel } from 'lucide-react';

const services = [
  {
    title: 'Demolition',
    description: 'Safe and efficient demolition services for residential and commercial properties.',
    icon: Hammer,
    details: 'Our demolition services include structural demolition, interior demolition, and selective demolition. We use state-of-the-art equipment and follow strict safety protocols to ensure a smooth and secure demolition process.'
  },
  {
    title: 'Exterior Construction',
    description: 'Building beautiful and durable exteriors that stand the test of time.',
    icon: Building,
    details: 'From brick and stone facades to stucco and siding installation, our exterior construction services enhance the beauty and functionality of your property. We work with a variety of materials to achieve the perfect look for your building.'
  },
  {
    title: 'Structural Work',
    description: 'Ensuring the integrity and stability of your building with expert structural masonry.',
    icon: Wrench,
    details: 'Our structural work includes load-bearing wall construction, foundation repair, and reinforcement of existing structures. We use advanced techniques and high-quality materials to guarantee the longevity and safety of your building.'
  },
  {
    title: 'Screed and Levelling',
    description: 'Creating perfect flooring solutions for a smooth and even surface.',
    icon: Ruler,
    details: 'Our screed and levelling services provide a solid base for various flooring types. We use precision equipment to ensure a perfectly level surface, essential for tile installation, hardwood flooring, and other finish materials.'
  },
  {
    title: 'Formwork',
    description: 'Precise concrete forming services for complex architectural designs.',
    icon: Shovel,
    details: 'Our formwork services cater to both simple and complex concrete structures. We use innovative forming systems to create precise shapes and finishes, allowing for unique architectural elements in your construction project.'
  },
  {
    title: 'Concrete Pouring',
    description: 'High-quality concrete solutions for foundations, slabs, and decorative elements.',
    icon: Shovel,
    details: 'From residential driveways to large commercial foundations, our concrete pouring services deliver durable and attractive results. We offer various concrete finishes and can incorporate decorative elements to enhance the aesthetic appeal of your project.'
  },
];

export default function ServiceList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} index={index} />
      ))}
    </div>
  );
}

function ServiceCard({ title, description, icon: Icon, details, index }) {
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
          <Icon className="w-12 h-12 mb-4 text-primary" />
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{details}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}