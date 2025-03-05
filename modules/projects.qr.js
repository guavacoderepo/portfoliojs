export const createProjectQuery = `
INSERT INTO projects (userid, title, description, liveLink, github) VALUES (?, ?, ?, ?, ?);
`;

export const getProjectQuery = `
SELECT * 
FROM projects
WHERE id = ?;
`;

export const fetchProjectQuery = `
SELECT p.*,
    JSON_ARRAYAGG(
        JSON_OBJECT(
            'id', sk.id,
            'title', sk.title,
            'url', sk.url
        )
    ) AS skills
FROM projects AS p
LEFT JOIN projectSkills AS ps ON ps.projectid = p.id
LEFT JOIN skills AS sk ON ps.skillid = sk.id
WHERE p.userid = ?
GROUP BY p.id;
`;
