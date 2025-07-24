import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Clock, Phone, FileText, AlertTriangle, CheckCircle, Zap, Brain, Shield } from 'lucide-react';
import { useGSAPAnimation } from './gsap/useGSAPAnimation';

const ProblemSolutionSection = () => {
  const { animateScrollSections } = useGSAPAnimation();

  useEffect(() => {
    animateScrollSections();
  }, []);

  const challenges = [
    {
      icon: Clock,
      title: "Manual Documentation",
      description: "Nurses spend 45% of their time on paperwork instead of patient care",
      color: "text-anatomia-danger"
    },
    {
      icon: Phone,
      title: "Inconsistent Triage",
      description: "Human error leads to 23% of cases being incorrectly prioritized",
      color: "text-anatomia-warning"
    },
    {
      icon: FileText,
      title: "Data Fragmentation",
      description: "Critical patient information scattered across multiple systems",
      color: "text-anatomia-info"
    },
    {
      icon: AlertTriangle,
      title: "Compliance Gaps",
      description: "Manual processes create audit trails that are incomplete or missing",
      color: "text-anatomia-danger"
    }
  ];

  const solutions = [
    {
      icon: Zap,
      title: "Instant AI Processing",
      description: "Convert patient calls to structured data in under 45 seconds",
      color: "text-anatomia-success"
    },
    {
      icon: Brain,
      title: "Intelligent Triage",
      description: "AI-powered priority scoring with 96% accuracy vs. manual methods",
      color: "text-primary"
    },
    {
      icon: CheckCircle,
      title: "Unified Data Hub",
      description: "Single source of truth that integrates with all major EHR systems",
      color: "text-anatomia-success"
    },
    {
      icon: Shield,
      title: "Complete Audit Trail",
      description: "Every action tracked and logged for full HIPAA compliance",
      color: "text-anatomia-info"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="animate-on-scroll text-center mb-16">
          <h2 className="font-display text-display-lg text-foreground mb-4">
            Stop Fighting Healthcare's Biggest{' '}
            <span className="text-anatomia-danger">Challenge</span>
          </h2>
          <p className="text-body-lg text-anatomia-gray-700 max-w-3xl mx-auto">
            Traditional triage and documentation processes are broken. Healthcare organizations 
            lose millions annually to inefficient workflows and compliance risks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* The Challenge */}
          <div className="animate-on-scroll space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="font-display text-heading-lg text-foreground mb-4">
                The Challenge
              </h3>
              <p className="text-body-md text-anatomia-gray-700">
                Healthcare organizations struggle with outdated processes that hurt both 
                patient outcomes and operational efficiency.
              </p>
            </div>

            <div className="stagger-list space-y-6">
              {challenges.map((challenge, index) => (
                <Card key={index} className="stagger-item interactive-card p-6 hover:shadow-anatomia-md transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-background ${challenge.color}`}>
                      <challenge.icon className="w-6 h-6 card-icon" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-heading-sm text-foreground mb-2">
                        {challenge.title}
                      </h4>
                      <p className="text-body-sm text-anatomia-gray-700">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* The Anatomia Solution */}
          <div className="animate-on-scroll space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="font-display text-heading-lg text-foreground mb-4">
                The Anatomia Solution
              </h3>
              <p className="text-body-md text-anatomia-gray-700">
                Our AI-powered platform transforms every aspect of clinical workflow, 
                from the first patient call to final documentation.
              </p>
            </div>

            <div className="stagger-list space-y-6">
              {solutions.map((solution, index) => (
                <Card key={index} className="stagger-item interactive-card p-6 border-l-4 border-l-primary hover:shadow-anatomia-md transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-primary/10 ${solution.color}`}>
                      <solution.icon className="w-6 h-6 card-icon" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-heading-sm text-foreground mb-2">
                        {solution.title}
                      </h4>
                      <p className="text-body-sm text-anatomia-gray-700">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="animate-on-scroll text-center mt-16">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
            <div className="w-3 h-3 bg-anatomia-success rounded-full animate-pulse"></div>
            <span className="text-body-sm font-medium text-primary">
              See the transformation in action
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;