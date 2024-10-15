import React from 'react';
import '../css/TeamMembers.css'; 
import Image1 from './images/image1.jpg';
import Image2 from './images/image2.jpg';
import Image3 from './images/image3.jpg';
import Image4 from './images/image4.jpg';
import Image from './images/profile_picture.webp';

const teamMembers = [
    {
        name: 'Dipti Yadav',
        role: 'Owner',
        imgSrc: Image,
      },
      {
        name: 'Namrata Pawar',
        role: 'Owner',
        imgSrc: Image,
      },
  {
    name: 'V. Yadav',
    role: 'Production Manager and R & D Head',
    imgSrc: Image, 
  },

  {
    name: 'Sameet Pawar',
    role: 'Administration and Managing Head',
    imgSrc: Image,
  },
  {
    name: 'Ranjit Yadav',
    role: 'Analytical Head',
    imgSrc: Image,
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
