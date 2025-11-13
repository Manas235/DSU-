import React from 'react';
import Button from '../UI/Button';
import { Trophy, CheckCircle } from 'lucide-react';

const AdmissionsInfo: React.FC = () => {
  const exams = [
    { name: "IIT JEE", color: "text-red-600", border: "border-red-200" },
    { name: "COMED-K", color: "text-blue-600", border: "border-blue-200" },
    { name: "UNI-GAUGE", color: "text-purple-600", border: "border-purple-200" },
    { name: "KCET", color: "text-green-600", border: "border-green-200" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Exam Highlight */}
          <div className="bg-blue-50 rounded-3xl p-8 lg:p-12 border border-blue-100 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-dsu-gold/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            
            <h2 className="text-3xl font-bold text-dsu-blue mb-6">
              B.Tech Admissions <span className="text-dsu-lightBlue">2026-27</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Secure your future with us. Admissions are based on the key scores of the following entrance exams:
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {exams.map((exam) => (
                <div key={exam.name} className={`bg-white p-4 rounded-xl shadow-sm border ${exam.border} flex items-center justify-center flex-col text-center`}>
                  <span className={`font-bold text-xl ${exam.color}`}>{exam.name}</span>
                  <span className="text-xs text-gray-400 mt-1">Entrance Exam</span>
                </div>
              ))}
            </div>
             <Button variant="secondary" fullWidth>Check Eligibility & Apply</Button>
          </div>

          {/* Right: Scholarship Callout */}
          <div className="lg:pl-8">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
                <Trophy size={16} />
                Scholarship Opportunity
             </div>
             <h2 className="text-3xl lg:text-4xl font-bold text-dsu-blue mb-6 leading-tight">
                Prestigious Merit Scholarship Based on <span className="bg-gradient-to-r from-dsu-gold to-yellow-500 bg-clip-text text-transparent">JEE Scores</span>
             </h2>
             <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                DSU rewards academic excellence. High achievers in JEE Mains/Advanced are eligible for substantial tuition fee waivers and exclusive mentorship programs.
             </p>
             
             <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                   <CheckCircle className="text-dsu-gold mt-1 mr-3 shrink-0" size={20} />
                   <span className="text-gray-700">Up to 100% Scholarship on Tuition Fees</span>
                </li>
                <li className="flex items-start">
                   <CheckCircle className="text-dsu-gold mt-1 mr-3 shrink-0" size={20} />
                   <span className="text-gray-700">Access to Advanced Research Labs</span>
                </li>
                <li className="flex items-start">
                   <CheckCircle className="text-dsu-gold mt-1 mr-3 shrink-0" size={20} />
                   <span className="text-gray-700">Placement Support in Tier-1 Companies</span>
                </li>
             </ul>

             <Button variant="primary">View Scholarship Details</Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdmissionsInfo;