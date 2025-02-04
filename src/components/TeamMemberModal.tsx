// import React from 'react';
// import saimilanalogo from "../assets/saimilanalogo.png";

// interface TeamMemberModalProps {
//   member: {
//     name: string;
//     designation: string;
//     photo: string;
//     newphoto:string;
//     summary: string;
//     experience: string;
//     keyAchievements: string;
//     projects: string;
//     education: string;
//   } | null; 
//   onClose: () => void; 
// }

// const TeamMemberModal: React.FC<TeamMemberModalProps> = ({ member, onClose }) => {
//   if (!member) return null; 

//   const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
//     if (event.currentTarget === event.target) {
//       onClose(); 
//     }
//   };

//   return (
//     <div
//       className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" 
//       onClick={handleBackdropClick} 
//     >
//       <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full overflow-hidden">
//         <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
//           &times;
//         </button>
//         <div className="flex flex-col items-center"  style={{
//       height: '100vh',
//       backgroundImage: `url(${saimilanalogo})`,
//       backgroundSize: 'contain', 
//       backgroundPosition: 'center',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       color: 'white', 
//     }}>
//           <img src={member.newphoto} alt={member.name} className="w-32 h-32 border-4 border-gray-200 shadow-md mb-4" />
//           <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
//           <p className="text-sm text-gray-600">{member.designation}</p>
//         </div>

//         <div className="mt-4 max-h-60 overflow-y-auto">
//           <h4 className="font-semibold">Summary</h4>
//           <p>{member.summary}</p>

//           <h4 className="font-semibold mt-2">Experience</h4>
//           <p>{member.experience}</p>

//           <h4 className="font-semibold mt-2">Key Achievements</h4>
//           <p>{member.keyAchievements}</p>

//           <h4 className="font-semibold mt-2">Projects</h4>
//           <p>{member.projects}</p>

//           <h4 className="font-semibold mt-2">Education</h4>
//           <p>{member.education}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamMemberModal;


import React from 'react';
import saimilanalogo from "../assets/saimilanalogo.png";

interface TeamMemberModalProps {
  member: {
    name: string;
    designation: string;
    photo: string;
    newphoto: string;
    summary: string;
    experience: string;
    keyAchievements: string;
    projects: string;
    education: string;
  } | null; 
  onClose: () => void; 
}

const TeamMemberModal: React.FC<TeamMemberModalProps> = ({ member, onClose }) => {
  if (!member) return null; 

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      onClose(); 
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" 
      onClick={handleBackdropClick} 
    >
      <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-md w-full overflow-hidden">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-800 hover:text-gray-900">
          &times;
        </button>
        <div 
          className="flex flex-col items-center"
          style={{
            backgroundImage: `url(${saimilanalogo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '200px',
            width: '100%',
            borderRadius: '8px',
            position: 'relative', 
          }}
        >
          <img src={member.newphoto} alt={member.name} className="w-32 h-32 border-4 border-gray-200 shadow-md mb-4" style={{ position: 'absolute', top: '45%',left:"68%", transform: 'translateY(-70%)' }} />
          
        </div>

        <div className="mt-4 max-h-60 overflow-y-auto p-4">
        <h3 className="text-xl font-bold text-black text-center">{member.name}</h3>
        <p className="text-sm text-black text-center">{member.designation}</p>
          <h4 className="font-semibold">Summary</h4>
          <p>{member.summary}</p>

          <h4 className="font-semibold mt-2">Experience</h4>
          <p>{member.experience}</p>

          <h4 className="font-semibold mt-2">Key Achievements</h4>
          <p>{member.keyAchievements}</p>

          <h4 className="font-semibold mt-2">Projects</h4>
          <p>{member.projects}</p>

          <h4 className="font-semibold mt-2">Education</h4>
          <p>{member.education}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberModal;
