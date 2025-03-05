export const createProjSkillsQuery = `
INSERT INTO projectSkills (projectid, skillid) VALUES (?, ?);
`;

export const getProjSkillsQuery = `
SELECT * 
FROM projectSkills
WHERE id = ?;
`;
