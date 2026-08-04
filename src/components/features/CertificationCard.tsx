import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import type { Certification } from '@/types';

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <Card className="flex flex-col p-6 bg-white/10 dark:bg-slate-900/30 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl hover:shadow-[#B8860B]/10 dark:hover:shadow-[#D4A843]/10 transition-all group rounded-2xl h-full">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-inner" style={{ backgroundColor: certification.badgeColor ? `${certification.badgeColor}20` : '#B8860B20', color: certification.badgeColor || '#B8860B' }}>
          {certification.issuer.charAt(0)}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 line-clamp-2 group-hover:text-[#B8860B] dark:group-hover:text-[#D4A843] transition-colors">
            {certification.name}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">{certification.issuer}</p>
        </div>
      </div>
      
      <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400"><Calendar size={14} /> Issued: {certification.issuedDate}</div>
        </div>
        {certification.credentialId && (
          <div className="text-xs text-slate-400 dark:text-slate-500 font-mono break-all">
            ID: {certification.credentialId}
          </div>
        )}
        
        {certification.verifyUrl && (
          <a href={certification.verifyUrl} target="_blank" rel="noopener noreferrer" className="w-full mt-2">
            <Button variant="outline" size="sm" className="w-full border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 gap-2">
              <Award size={14} /> Verify Credential <ExternalLink size={14} />
            </Button>
          </a>
        )}
      </div>
    </Card>
  );
}
