export const userTable = `
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    apikey VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    role VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    phone VARCHAR(15) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    linkedin VARCHAR(50) DEFAULT NULL,
    github VARCHAR(100) DEFAULT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

export const projectsTable = `
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userid INT NOT NULL,
    title VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    liveLink VARCHAR(100) DEFAULT NULL,
    github VARCHAR(100) DEFAULT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userid) REFERENCES users (id)
)`;

export const skillsTable = `
CREATE TABLE IF NOT EXISTS skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userid INT NOT NULL,
    title VARCHAR(50) NOT NULL,
    rate INT NOT NULL,
    url VARCHAR(100) NOT NULL,
    size INT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userid) REFERENCES users (id)
)`;

export const experienceTable = `
CREATE TABLE IF NOT EXISTS experience (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userid INT NOT NULL,
    title VARCHAR(50) NOT NULL,
    organization VARCHAR(50) NOT NULL,
    description TEXT DEFAULT NULL,
    startDate VARCHAR(50) NOT NULL,
    endDate VARCHAR(50) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userid) REFERENCES users (id)
)`;

export const educationTable = `
CREATE TABLE IF NOT EXISTS education (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userid INT NOT NULL,
    course VARCHAR(50) NOT NULL,
    institution VARCHAR(50) NOT NULL,
    grade VARCHAR(10) DEFAULT NULL,
    description TEXT DEFAULT NULL,
    startDate VARCHAR(50) NOT NULL,
    endDate VARCHAR(50) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userid) REFERENCES users (id)
)`;

export const documentsTable = `
CREATE TABLE IF NOT EXISTS documents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    projectid INT NULL,
    url VARCHAR(100) NOT NULL,
    size INT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (projectid) REFERENCES projects (id)
)`;

export const projectSkillsTable = `
CREATE TABLE IF NOT EXISTS projectSkills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    projectid INT NOT NULL,
    skillid INT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (projectid) REFERENCES projects (id),
    FOREIGN KEY (skillid) REFERENCES skills (id)
)`;

export const activitiesTable = `
CREATE TABLE IF NOT EXISTS activities (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userid INT NOT NULL,
    location VARCHAR(20) NOT NULL,
    device VARCHAR(50) NOT NULL,
    ip VARCHAR(15) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userid) REFERENCES users (id)
)`;
