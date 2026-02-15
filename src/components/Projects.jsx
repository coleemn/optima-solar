import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop', // Residential (Known working)
            title: 'Residential Installation',
            location: 'Nairobi',
            size: '5kW System',
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1509389928833-fe62aef36deb?q=80&w=800&auto=format&fit=crop', // Commercial
            title: 'Commercial Solar',
            location: 'Mombasa',
            size: '50kW System',
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1594818379496-da1e345b0ded?q=80&w=800&auto=format&fit=crop', // Farm/Field
            title: 'Farm Irrigation',
            location: 'Nakuru',
            size: '15kW Pump',
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1617269778723-73a40cf299bd?q=80&w=800&auto=format&fit=crop', // Villa/Roof
            title: 'Luxury Villa',
            location: 'Karen',
            size: '10kW Hybrid',
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=800&auto=format&fit=crop', // School/Large
            title: 'School Project',
            location: 'Kisumu',
            size: '20kW Backup',
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1589201529153-5297335c1684?q=80&w=800&auto=format&fit=crop', // Apartment/Panels
            title: 'Apartment Block',
            location: 'Kilimani',
            size: 'Water Heating',
        },
    ];

    return (
        <section id="projects" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Recent Projects</h2>
                    <p className={styles.subtitle}>See how we are empowering homes and businesses across Kenya.</p>
                </div>

                <div className={styles.grid}>
                    {projects.map((project) => (
                        <div key={project.id} className={styles.card}>
                            <img src={project.image} alt={project.title} className={styles.image} />
                            <div className={styles.overlay}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDetail}>{project.location} • {project.size}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
