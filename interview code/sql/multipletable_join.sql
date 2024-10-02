--join and counting total no of male female in every dept

SELECT d.dept_name, g.gname, COUNT(*) AS total
FROM emp AS e
JOIN dept AS d ON e.deptid = d.deptid
JOIN gen AS g ON e.gender = g.GENID
GROUP BY d.dept_name, g.gname 

--join in multiple table

SELECT d.dept_name, g.gname,e.name
FROM emp AS e
JOIN dept AS d ON e.deptid = d.deptid
JOIN gen AS g ON e.gender = g.GENID


