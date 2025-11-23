
import React from 'react';
import { useLanguage } from '../App';
import { Icon, IconName } from '../constants/icons';

const RuleCard: React.FC<{ ruleId: string; icon: IconName }> = ({ ruleId, icon }) => {
  const { t } = useLanguage();
  const ruleContent = t.rules[ruleId as keyof typeof t.rules] as { title: string; description: string };
  return (
    <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-lg shadow-md border border-devotional-gold/20">
      <div className="flex-shrink-0 bg-devotional-maroon text-devotional-gold rounded-full p-3">
        <Icon name={icon} className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-lg font-bold font-serif-display text-devotional-maroon">{ruleContent.title}</h3>
        <p className="text-devotional-text/90">{ruleContent.description}</p>
      </div>
    </div>
  );
};


const RulesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif-display text-center text-devotional-maroon border-b-2 border-devotional-gold pb-2">
        {t.rules.title}
      </h2>
      <div className="space-y-4">
        {t.rules.rulesList.map((rule) => (
          <RuleCard key={rule.id} ruleId={rule.id} icon={rule.icon as IconName} />
        ))}
      </div>
    </div>
  );
};

export default RulesSection;
