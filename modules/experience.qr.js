export const createExperienceQuery = `
INSERT INTO experience (userid, title, organization, description, startDate, endDate) VALUES (?, ?, ?, ?, ?, ?);
`;

export const getExperienceQuery = `
SELECT * 
FROM experience
WHERE id = ?;
`;
