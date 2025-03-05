export const createAccountQuery = `
 INSERT INTO users (name, role, address, phone, email, linkedin, github, apikey) VALUES (?, ?, ?, ?, ?, ?, ?, ?);
`;

export const getAccountQuery = `
SELECT * 
FROM users
WHERE id = ?;
`;

export const getCurrentUserQuery = `
SELECT 
    u.*, 
    (
        SELECT JSON_ARRAYAGG(
            JSON_OBJECT(
                'id', p.id,
                'title', p.title,
                'description', p.description,
                'liveLink', p.liveLink,
                'github', p.github,
                'skills', IFNULL(
                    (
                        SELECT JSON_ARRAYAGG(
                            JSON_OBJECT(
                                'id', ps.id,
                                'skill_id', s.id,
                                'skill_title', s.title
                            )
                        )
                        FROM projectSkills AS ps
                        LEFT JOIN skills AS s ON s.id = ps.skillid
                        WHERE ps.projectid = p.id
                    ),
                    JSON_ARRAY()
                )
            )
        )
        FROM projects AS p
        WHERE p.userid = u.id
    ) AS projects,

    (
        SELECT JSON_ARRAYAGG(
            JSON_OBJECT(
                'id', s.id,
                'title', s.title,
                'rate', s.rate,
                'url', s.url
            )
        )
        FROM skills AS s
        WHERE s.userid = u.id
    ) AS skills,

    (
        SELECT JSON_ARRAYAGG(
            JSON_OBJECT(
                'id', ex.id,
                'title', ex.title,
                'organization', ex.organization,
                'description', ex.description,
                'startDate', ex.startDate,
                'endDate', ex.endDate
            )
        )
        FROM experience AS ex
        WHERE ex.userid = u.id
    ) AS experience,

    (
        SELECT JSON_ARRAYAGG(
            JSON_OBJECT(
                'id', e.id,
                'course', e.course,
                'institution', e.institution,
                'grade', e.grade,
                'description', e.description,
                'startDate', e.startDate,
                'endDate', e.endDate
            )
        )
        FROM education AS e
        WHERE e.userid = u.id
    ) AS education

FROM users AS u
WHERE u.apikey = ?;
`;

export const getCurrentUserQuery2 = `
SELECT *
FROM users
WHERE apikey = ?
GROUP BY u.id;
`;

// (
//     SELECT
//         ps.projectid,
//         JSON_ARRAYAGG(
//             JSON_OBJECT(
//                 'id', sk.id,
//                 'title', sk.title,
//                 'url', sk.url
//             )
//         ) AS skills
//     FROM projectSkills ps
//     LEFT JOIN skills sk ON sk.id = ps.skillid
//     GROUP BY ps.projectid
// ) AS skills_json ON skills_json.projectid = p.id
