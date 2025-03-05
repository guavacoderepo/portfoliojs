export const createSkillsQuery = `
INSERT INTO skills (userid, title, rate, url, size) VALUES (?, ?, ?, ?, ?);
`;

export const getSkillsQuery = `
SELECT * 
FROM skills
WHERE id = ?;
`;
