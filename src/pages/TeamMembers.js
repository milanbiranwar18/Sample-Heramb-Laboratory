import React from 'react';
import '../css/TeamMembers.css'; 
import Image1 from './images/image1.jpg';
import Image2 from './images/image2.jpg';
import Image3 from './images/image3.jpg';
import Image4 from './images/image4.jpg';


const teamMembers = [
    {
        name: 'Dipti Yadav & Namrata Pawar',
        role: 'Owner',
        imgSrc: Image2,
      },
  {
    name: 'V. Yadav',
    role: 'Production Manager and R & D Head',
    imgSrc: Image1, 
  },

  {
    name: 'Sameet Pawar',
    role: 'Administration and Managing Head',
    imgSrc: Image3,
  },
  {
    name: 'Ranjit Yadav',
    role: 'Analytical Head',
    imgSrc: Image4,
  },
];

const TeamMembers = () => {
  return (
    <div className="team-members-section"> {/* Updated class name */}
      <h2 className="team-members-title">Meet Our Team</h2> {/* Updated class name */}
      <div className="team-members-container"> {/* Updated class name */}
        {teamMembers.map((member, index) => (
          <div className="team-member-card" key={index}> {/* Updated class name */}
            <div className="team-member-image-container"> {/* Updated class name */}
              <img src={member.imgSrc} alt={member.name} className="team-member-image" /> {/* Updated class name */}
            </div>
            <h3 className="team-member-name">{member.name}</h3> {/* Updated class name */}
            <p className="team-member-role">{member.role}</p> {/* Updated class name */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
