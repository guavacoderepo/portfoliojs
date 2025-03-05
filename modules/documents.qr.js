export const createDocumentQuery = `
INSERT INTO documents (projectid, url, size) VALUES (?, ?, ?);
`;

export const getDocumentQuery = `
SELECT * 
FROM documents
WHERE id = ?;
`;
