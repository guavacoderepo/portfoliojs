export const createEducationQuery = `
INSERT INTO education (userid, course, institution, grade, description, startDate, endDate) VALUES (?, ?, ?, ?, ?, ?, ?);
`;

export const getEducationQuery = `
SELECT * 
FROM education
WHERE id = ?;
`;
