import React from 'react';
import styles from '../styles/SkillSection.module.css'; // Import CSS Modules

const skills = [
  {
    title: "2D Design",
    description: "Creating visually compelling graphics and illustrations using software such as Adobe Photoshop, Illustrator, and CorelDRAW.",
    icon: "🎨",
  },
  {
    title: "3D Environment Design",
    description: "Designing immersive 3D environments for games and virtual reality using tools like Blender, Maya, and Unreal Engine.",
    icon: "🌐",
  },
  {
    title: "Artificial Intelligence Engineer",
    description: "Developing AI models and systems using Python, TensorFlow, and PyTorch for various applications including computer vision and natural language processing.",
    icon: "🤖",
  },
];

const SkillSection = () => {
  return (
    <section id="skills" className={styles.section}>
      <h2 className={styles.header}>Skills</h2>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <div className={styles.icon}>{skill.icon}</div>
            <h3 className={styles.skillTitle}>{skill.title}</h3>
            <p className={styles.skillDescription}>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
