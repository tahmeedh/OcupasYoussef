"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BadgeCheck, Zap, Scale, Clock } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function TrustBadges() {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const badges = [
    { icon: BadgeCheck, data: t.trust.badge1, color: "from-red-600/20 to-red-800/10", border: "border-red-600/20 hover:border-red-500/40", iconBg: "bg-red-600/20", iconColor: "text-red-400" },
    { icon: Scale,      data: t.trust.badge2, color: "from-white/[0.04] to-white/[0.01]", border: "border-white/[0.07] hover:border-red-500/30", iconBg: "bg-white/10", iconColor: "text-white" },
    { icon: Zap,        data: t.trust.badge3, color: "from-white/[0.04] to-white/[0.01]", border: "border-white/[0.07] hover:border-red-500/30", iconBg: "bg-white/10", iconColor: "text-white" },
    { icon: Clock,      data: t.trust.badge4, color: "from-white/[0.04] to-white/[0.01]", border: "border-white/[0.07] hover:border-red-500/30", iconBg: "bg-white/10", iconColor: "text-white" },
  ];

  return (
    <section className="py-16 px-4 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className={`relative bg-gradient-to-br ${badge.color} backdrop-blur-sm border ${badge.border} rounded-2xl p-6 transition-all duration-300 group`}
            >
              <div className={`w-12 h-12 ${badge.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <badge.icon className={`w-6 h-6 ${badge.iconColor}`} />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{badge.data.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{badge.data.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
