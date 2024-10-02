-- create
CREATE TABLE sal (
  empId INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  salary INTEGER
);

-- insert
INSERT INTO sal VALUES (1, 'Clark', 300);
INSERT INTO sal VALUES (2, 'Dave', 400); 
INSERT INTO sal VALUES (3, 'Ava', 500);
INSERT INTO sal VALUES (4, 'b', 2000);
INSERT INTO sal VALUES (5, 'c', 2100);
INSERT INTO sal VALUES (6, 'd', 3500);

SELECT DISTINCT salary	 from sal as emp1 WHERE 1-1=(
SELECT count(DISTINCT salary) from sal as emp2  where emp2.salary >emp1.salary
  
 )


SELECT DISTINCT salary 
FROM emp AS emp1 
WHERE  2-1 = (
    SELECT COUNT(DISTINCT salary) 
    FROM emp AS emp2 
    WHERE emp2.salary > emp1.salary
);


