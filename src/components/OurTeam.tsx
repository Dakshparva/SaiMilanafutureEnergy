
import  { SetStateAction, useState } from 'react';
import teamMembers from "./TeamMembers";
import TeamMemberModal from "./TeamMemberModal";

const TeamMemberGrid = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (member: SetStateAction<null>) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null); 
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-wide">
          Meet Our Team
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          The minds behind our success
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl p-6 flex flex-col items-center"
            onClick={() => handleMemberClick(member)} 
          >
            <button
              className="group focus:outline-none flex justify-center"
            >
              <div className="relative w-32 h-32 flex justify-center">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-32 h-32 border-4 border-gray-200 shadow-md"
                />
              </div>
            </button>

            <div className="text-center mt-4">
              <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{member.designation}</p>
            </div>
          </div>
        ))}
      </div>

  
      {selectedMember && (
        <TeamMemberModal member={selectedMember} onClose={closeModal} />
      )}
    </div>
  );
};

export default TeamMemberGrid;

