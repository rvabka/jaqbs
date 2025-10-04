'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import {
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  FileText,
  UserCheck,
  GraduationCap,
  Briefcase,
  Heart,
  Shield,
  DollarSign,
  Calendar,
  Building2
} from 'lucide-react';

const onboardingSteps = [
  {
    id: 1,
    title: 'Application',
    description: 'Submit your application with required documents',
    icon: FileText,
    color: 'bg-red-700'
  },
  {
    id: 2,
    title: 'Interview',
    description: 'Phone or video interview with our HR team',
    icon: UserCheck,
    color: 'bg-red-800'
  },
  {
    id: 3,
    title: 'Training',
    description: 'Complete our comprehensive training program',
    icon: GraduationCap,
    color: 'bg-blue-700'
  },
  {
    id: 4,
    title: 'Start Working',
    description: 'Begin your career with Moving Mountain',
    icon: Briefcase,
    color: 'bg-blue-800'
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Salary',
    description: 'Above market rates with performance bonuses'
  },
  {
    icon: Heart,
    title: 'Health Insurance',
    description: 'Comprehensive medical, dental, and vision coverage'
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Industry-leading safety protocols and equipment'
  },
  {
    icon: Calendar,
    title: 'Flexible Schedule',
    description: 'Work-life balance with flexible scheduling options'
  }
];

const jobPositions = [
  {
    title: 'Long Haul Driver',
    location: 'Multiple Locations',
    type: 'Full-time',
    salary: '$65,000 - $85,000',
    requirements: [
      'CDL Class A License',
      '2+ years experience',
      'Clean driving record'
    ],
    description:
      'Join our team of professional long-haul drivers and see the country while earning competitive wages.'
  },
  {
    title: 'Local Delivery Driver',
    location: 'City Centers',
    type: 'Full-time',
    salary: '$45,000 - $60,000',
    requirements: [
      'CDL Class B License',
      '1+ years experience',
      'Local area knowledge'
    ],
    description:
      'Home every night with our local delivery routes. Perfect work-life balance.'
  },
  {
    title: 'Logistics Coordinator',
    location: 'Head Office',
    type: 'Full-time',
    salary: '$50,000 - $70,000',
    requirements: [
      "Bachelor's degree",
      'Logistics experience',
      'Strong communication skills'
    ],
    description:
      'Coordinate shipments and manage our logistics operations from our modern office.'
  },
  {
    title: 'Warehouse Supervisor',
    location: 'Distribution Centers',
    type: 'Full-time',
    salary: '$55,000 - $75,000',
    requirements: [
      'Management experience',
      'Warehouse operations',
      'Leadership skills'
    ],
    description:
      'Lead our warehouse teams and ensure efficient operations at our distribution centers.'
  }
];

export default function CareerPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % onboardingSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-red-800 text-white py-32 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[url('/abstract-logistics-pattern.png')] opacity-5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-red-700/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue-700/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium mb-8">
              <Building2 className="h-5 w-5" />
              <span>Od 2010 roku w branży spedycyjnej</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance">
              O nas
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto text-balance leading-relaxed">
              Stanowimy doskonale zgrany zespół młodych i dynamicznych ludzi,
              nastawionych na długoterminową współpracę
            </p>
          </div>

          {/* Stats */}
        </div>
      </section>

      {/* Onboarding Process */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-red-50 rounded-full px-4 py-2 text-sm font-medium text-red-800 mb-6">
              <div className="w-2 h-2 bg-red-700 rounded-full"></div>
              <span>Simple Process</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Your Journey to Success
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From application to your first day - our streamlined 4-step
              process gets you started in just 2 weeks.
            </p>
          </div>

          <div className="relative max-w-7xl mx-auto">
            {/* Progress Line */}
            <div className="absolute top-24 left-0 right-0 h-2 bg-gray-100 rounded-full transform z-0 hidden md:block mt-4"></div>
            <div
              className="absolute top-24 left-0 h-2 bg-gradient-to-r from-red-700 to-blue-700 rounded-full transform z-10 transition-all duration-1000 shadow-lg hidden md:block mt-4"
              style={{
                width: `${((activeStep + 1) / onboardingSteps.length) * 100}%`
              }}
            ></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 relative z-20">
              {onboardingSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`text-center transform transition-all duration-700 ${
                    index <= activeStep
                      ? 'scale-105 md:scale-110 -translate-y-2'
                      : 'scale-100'
                  }`}
                >
                  <div
                    className={`w-24 h-24 mx-auto ${
                      index <= activeStep ? step.color : 'bg-gray-200'
                    } rounded-full flex items-center justify-center mb-14 transition-all duration-700 shadow-xl hover:shadow-2xl ${
                      index <= activeStep ? 'animate-pulse-glow' : ''
                    }`}
                  >
                    <step.icon
                      className={`h-12 w-12 ${
                        index <= activeStep ? 'text-white' : 'text-gray-400'
                      } transition-all duration-300`}
                    />
                  </div>
                  <h3
                    className={`text-xl font-bold mb-3${
                      index <= activeStep ? 'text-gray-900' : 'text-gray-500'
                    } transition-colors duration-300`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed px-2 ${
                      index <= activeStep ? 'text-gray-600' : 'text-gray-400'
                    } transition-colors duration-300`}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-brand-blue-700/5 to-brand-red-700/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-brand-blue-50 rounded-full px-4 py-2 text-sm font-medium text-brand-blue-800 mb-6">
              <div className="w-2 h-2 bg-brand-blue-700 rounded-full"></div>
              <span>Employee Benefits</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Why Choose Moving Mountain?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Industry-leading benefits package with 95% employee satisfaction
              rate and award-winning workplace culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-2xl transition-all duration-500 group border-0 shadow-sm hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-red-50 to-brand-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <benefit.icon className="h-10 w-10 text-brand-red-800 group-hover:text-brand-red-900" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-brand-red-800 transition-colors">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Positions */}
      <section className="py-24 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-red-50 rounded-full px-4 py-2 text-sm font-medium text-red-800 mb-6">
              <div className="w-2 h-2 bg-red-700 rounded-full"></div>
              <span>Open Positions</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover opportunities across 15+ departments with competitive
              salaries and growth potential.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {jobPositions.map((job, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-500 border-0 shadow-sm hover:-translate-y-1 bg-white/80 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-3 hover:text-red-800 transition-colors">
                        {job.title}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4 flex-shrink-0" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4 flex-shrink-0" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 px-3 py-1 rounded-full whitespace-nowrap"
                    >
                      {job.salary}
                    </Badge>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {job.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="mb-6">
                    <h4 className="font-bold mb-3 text-gray-900">
                      Requirements:
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, reqIndex) => (
                        <li
                          key={reqIndex}
                          className="flex items-start space-x-3 text-sm text-gray-600"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full py-6">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-red-700 via-brand-red-800 to-brand-blue-800 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue-700/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-10 text-red-100 max-w-3xl mx-auto leading-relaxed">
            Join 10,000+ professionals who've built successful careers with
            Moving Mountain. Start your application today and take the first
            step towards your future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-brand-red-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-8 py-6 text-lg"
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-red-700 transition-all duration-300 rounded-full px-8 py-6 text-lg bg-transparent"
            >
              Contact Recruiter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
