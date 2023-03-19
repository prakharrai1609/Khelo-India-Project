import React from 'react';
import '../../styles/About.css';

const teamMembers = [
  {
    name: 'Prakhar Rai',
    image: 'prakhar.png',
    description: 'Full-stack developer.'
  },
  {
    name: 'Parilakshya Puri',
    image: 'pari.png',
    description: 'Full-stack developer.'
  },
  {
    name: 'Jai Sharma',
    image: 'jai.png',
    description: 'Frontend developer.'
  },
  {
    name: 'Pingaksh Pareek',
    image: 'pingu.png',
    description: 'Frontend developer.'
  },
];

const tech = [
  {
    name: 'TypeScript',
    image: 'typescript.png'
  },
  {
    name: 'Express.js',
    image: 'express.png'
  },
  {
    name: 'Node.js',
    image: 'node.jpg'
  },
  {
    name: 'MongoDB',
    image: 'mongo.jpg'
  },
  {
    name: 'Nest.js',
    image: 'nest.png'
  },
  {
    name: 'React.js',
    image: 'react.png'
  },
]

const About = () => {
  return (
    <div className="container">
      <h1>Team Members 🫂</h1>
      <div className="about">
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={require(`../../images/${member.image}`)} alt={member.name} />
              <h2>{member.name}</h2>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
      <h1>
        Tech Stack Used ⚒️
      </h1>
      <div className="about">
        <div className="team-members">
          {tech.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={require(`../../images/${member.image}`)} alt={member.name} />
              <h2>{member.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
