"use client"

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Masonry work"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4">About Masonry Masters</h2>
            <p className="text-lg mb-4">
              With over 20 years of experience, Masonry Masters has been providing top-quality masonry services to residential and commercial clients. Our team of skilled craftsmen is dedicated to delivering exceptional results on every project.
            </p>
            <p className="text-lg">
              From intricate stonework to large-scale construction projects, we take pride in our attention to detail and commitment to customer satisfaction. Choose Masonry Masters for all your masonry needs and experience the difference that true craftsmanship can make.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}