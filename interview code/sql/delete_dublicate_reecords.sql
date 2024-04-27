id   name   age    salary
1   sumit   20      2000
2   amit    30      5000
3   sumit   20      2000
4   amit    30      5000
5   sumit   20      2000
6   amit    30      5000


id   name  
1   sumit   -----> min id  for sumit
2   amit    -----> min id  for amit
3   sumit   
4   amit   
5   sumit   
6   amit   


delete from emp where id not in(select min(id) from emp group by name)