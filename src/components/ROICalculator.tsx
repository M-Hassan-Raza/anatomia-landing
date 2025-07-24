import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';
import { useGSAPAnimation } from './gsap/useGSAPAnimation';

const ROICalculator = () => {
  const [hospitalSize, setHospitalSize] = useState([500]);
  const [monthlyCallVolume, setMonthlyCallVolume] = useState([2000]);
  const [avgWage, setAvgWage] = useState([35]);
  const { animateScrollSections, gsap } = useGSAPAnimation();

  useEffect(() => {
    animateScrollSections();
  }, [animateScrollSections]);

  // Calculate savings
  const currentTimePerCall = 8; // minutes
  const anatomiaTimePerCall = 2; // minutes
  const timeSavedPerCall = currentTimePerCall - anatomiaTimePerCall; // 6 minutes
  const yearlyCalls = monthlyCallVolume[0] * 12;
  const totalTimeSavedMinutes = yearlyCalls * timeSavedPerCall;
  const totalTimeSavedHours = Math.round(totalTimeSavedMinutes / 60);
  const yearlySavings = Math.round(totalTimeSavedHours * avgWage[0]);
  const anatomiaAnnualCost = hospitalSize[0] <= 100 ? 1188 : hospitalSize[0] <= 500 ? 5988 : 15000; // Estimated based on tier
  const netSavings = yearlySavings - anatomiaAnnualCost;
  const roi = Math.round((netSavings / anatomiaAnnualCost) * 100);

  const animateNumbers = () => {
    gsap.to('.roi-number', {
      scale: 1.05,
      duration: 0.2,
      yoyo: true,
      repeat: 1
    });
  };

  useEffect(() => {
    animateNumbers();
  }, [hospitalSize, monthlyCallVolume, avgWage, gsap]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="animate-on-scroll text-center mb-16">
          <h2 className="font-display text-display-lg text-foreground mb-4">
            Calculate Your{' '}
            <span className="text-anatomia-success">ROI</span>
          </h2>
          <p className="text-body-lg text-anatomia-gray-700 max-w-3xl mx-auto">
            See exactly how much time and money Anatomia can save your organization. 
            Adjust the inputs below to match your current situation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Calculator Inputs */}
          <Card className="animate-on-scroll p-8 space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="font-display text-heading-lg text-foreground">
                ROI Calculator
              </h3>
            </div>

            {/* Hospital Size */}
            <div className="space-y-4">
              <label className="block text-heading-sm font-semibold text-foreground">
                Number of Staff Members
              </label>
              <div className="space-y-2">
                <Slider
                  value={hospitalSize}
                  onValueChange={setHospitalSize}
                  max={2000}
                  min={50}
                  step={50}
                  className="w-full"
                />
                <div className="flex justify-between text-body-sm text-anatomia-gray-600">
                  <span>50</span>
                  <span className="font-semibold text-primary">{hospitalSize[0]} staff</span>
                  <span>2000+</span>
                </div>
              </div>
            </div>

            {/* Call Volume */}
            <div className="space-y-4">
              <label className="block text-heading-sm font-semibold text-foreground">
                Monthly Patient Call Volume
              </label>
              <div className="space-y-2">
                <Slider
                  value={monthlyCallVolume}
                  onValueChange={setMonthlyCallVolume}
                  max={10000}
                  min={100}
                  step={100}
                  className="w-full"
                />
                <div className="flex justify-between text-body-sm text-anatomia-gray-600">
                  <span>100</span>
                  <span className="font-semibold text-primary">{monthlyCallVolume[0].toLocaleString()} calls/month</span>
                  <span>10,000+</span>
                </div>
              </div>
            </div>

            {/* Average Wage */}
            <div className="space-y-4">
              <label className="block text-heading-sm font-semibold text-foreground">
                Average Hourly Wage (Clinical Staff)
              </label>
              <div className="space-y-2">
                <Slider
                  value={avgWage}
                  onValueChange={setAvgWage}
                  max={75}
                  min={20}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-body-sm text-anatomia-gray-600">
                  <span>$20</span>
                  <span className="font-semibold text-primary">${avgWage[0]}/hour</span>
                  <span>$75+</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Results */}
          <Card className="animate-on-scroll p-8 bg-gradient-to-br from-primary/5 to-anatomia-success/5 border-primary/20">
            <div className="space-y-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-xl bg-anatomia-success/10 text-anatomia-success">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-display text-heading-lg text-foreground">
                  Your Annual Savings
                </h3>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-xl bg-background/80 backdrop-blur-sm">
                  <div className="roi-number text-display-md font-bold text-primary">
                    {totalTimeSavedHours.toLocaleString()}
                  </div>
                  <div className="text-body-sm text-anatomia-gray-700">Hours Saved</div>
                </div>
                
                <div className="text-center p-4 rounded-xl bg-background/80 backdrop-blur-sm">
                  <div className="roi-number text-display-md font-bold text-anatomia-success">
                    ${yearlySavings.toLocaleString()}
                  </div>
                  <div className="text-body-sm text-anatomia-gray-700">Cost Savings</div>
                </div>
              </div>

              {/* ROI Breakdown */}
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-body-md text-anatomia-gray-700">Annual Labor Savings</span>
                  <span className="font-semibold text-foreground">${yearlySavings.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-body-md text-anatomia-gray-700">Anatomia Annual Cost</span>
                  <span className="font-semibold text-foreground">-${anatomiaAnnualCost.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 bg-anatomia-success/10 px-4 rounded-xl">
                  <span className="font-semibold text-foreground">Net Annual Savings</span>
                  <span className="font-bold text-anatomia-success text-heading-sm">
                    ${netSavings.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* ROI Percentage */}
              <div className="text-center p-6 bg-gradient-primary rounded-xl text-primary-foreground">
                <div className="roi-number text-display-lg font-bold">
                  {roi}%
                </div>
                <div className="text-body-md opacity-90">Return on Investment</div>
              </div>

              {/* CTA */}
              <div className="space-y-4">
                <Button className="w-full btn btn-primary btn-lg">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Get Detailed ROI Report
                </Button>
                <p className="text-body-xs text-anatomia-gray-600 text-center">
                  Free personalized analysis with implementation timeline
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;