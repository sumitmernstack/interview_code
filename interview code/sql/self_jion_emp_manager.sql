id	emp	    manager	
1	sumit	3
2	suraj	3	
3	ajay	4	
4   deepak  Null
5   raj     4

SELECT e.emp ,m.manager FROM employee e inner join employee m 

on e.id=m.id;