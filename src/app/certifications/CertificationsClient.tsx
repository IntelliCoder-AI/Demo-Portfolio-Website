'use client';

import { motion } from 'framer-motion';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { CertificationCard } from '@/components/features/CertificationCard';
import { certificationsData as certifications } from '@/data/certifications';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 12 } as const,
  },
};

export default function CertificationsClient() {
  return (
    <PageWrapper>
      <Section className="pt-24 pb-20">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Certifications', href: '/certifications' }]} className="mb-8" />
          
          <div className="max-w-3xl mb-16">
            <AnimatedText 
              text="Certifications" 
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1E293B] to-[#7C3AED] dark:from-[#F1F5F9] dark:to-[#D4A843] mb-4"
            />
            <p className="text-lg text-slate-600 dark:text-slate-300">
              My commitment to continuous learning and professional development.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {certifications.map((certification, index) => (
              <motion.div key={certification.id || index} variants={itemVariants}>
                <CertificationCard certification={certification} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-24 p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-purple-50 dark:from-[#0F1D32]/80 dark:to-[#0F1D32] border border-purple-100 dark:border-purple-900/30 text-center"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Continuous Learning</h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Technology evolves rapidly, and I believe in staying at the forefront. 
              I am currently expanding my knowledge in advanced AI architectures and 
              cloud-native solutions to build more robust and scalable applications.
            </p>
          </motion.div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
