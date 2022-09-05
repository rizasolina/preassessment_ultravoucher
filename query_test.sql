SELECT 
c.id, 
c.name,
p.name AS parent_name
FROM parent_child c
LEFT JOIN parent_child p
ON c.parent_id = p.id
ORDER BY id;