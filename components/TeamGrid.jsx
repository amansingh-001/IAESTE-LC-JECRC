import React from 'react';
import TeamCard from './TeamCard';
// Import team data - try relative path from components directory
import teamData from '../src/data/team.json';

export default function TeamGrid() {
  if (!teamData || !Array.isArray(teamData) || teamData.length === 0) {
    return (
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-10 sm:mb-12 text-center">
            CORE TEAM
          </h2>
          <p className="text-center text-gray-600">Loading team data...</p>
        </div>
      </section>
    );
  }

  const advisor = teamData.find(member => member.id === 'advisor');
  let teamMembers = teamData.filter(member => member.id !== 'advisor');
  
  // Separate senior board members and board members
  const seniorBoardRoles = ['President', 'Vice President', 'Chief Financial Officer'];
  const seniorBoardMembers = teamMembers.filter(member => 
    seniorBoardRoles.includes(member.role)
  );
  const boardMembers = teamMembers.filter(member => 
    !seniorBoardRoles.includes(member.role)
  );
  
  // Sort senior board: President, Vice President, CFO
  seniorBoardMembers.sort((a, b) => {
    const roleOrder = { 'President': 1, 'Vice President': 2, 'Chief Financial Officer': 3 };
    return (roleOrder[a.role] || 999) - (roleOrder[b.role] || 999);
  });

  // Split board members into rows: 4, 4, 3
  const row1 = boardMembers.slice(0, 4);
  const row2 = boardMembers.slice(4, 8);
  const row3 = boardMembers.slice(8, 11);

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-10 sm:mb-12 text-center">
          MEET OUR BOARD
        </h2>

        {/* Advisor Section */}
        {advisor && (
          <div className="mb-12 sm:mb-16 flex flex-col md:flex-row items-start gap-6 sm:gap-8">
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="relative w-[300px] h-[375px] overflow-hidden rounded-xl border-2 border-gray-900">
                <img
                  src={advisor.img}
                  alt={advisor.name}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="375"%3E%3Crect fill="%23e5e7eb" width="300" height="375"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="60" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3E' + encodeURIComponent(advisor.name.charAt(0)) + '%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#003F68] mb-2">
                {advisor.name}
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 mb-4">
                {advisor.role}
              </p>
              {advisor.bio && (
                <p className="text-gray-700 leading-relaxed text-base text-justify sm:text-lg">
                  {advisor.bio}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Senior Board Members - First Row (3 cards) */}
        {seniorBoardMembers.length > 0 && (
          <div className="mb-8 sm:mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {seniorBoardMembers.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        )}

        {/* Board Members - Second Row (4 cards) */}
        {row1.length > 0 && (
          <div className="mb-6 sm:mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {row1.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        )}

        {/* Board Members - Third Row (4 cards) */}
        {row2.length > 0 && (
          <div className="mb-6 sm:mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {row2.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        )}

        {/* Board Members - Fourth Row (3 cards) */}
        {row3.length > 0 && (
          <div className="mb-6 sm:mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {/* Empty spacer div to align 3 cards starting from position 2 in 4-column grid */}
              <div className="hidden md:block"></div>
              {row3.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

