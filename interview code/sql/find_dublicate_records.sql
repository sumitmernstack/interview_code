OrderID	CustomerID	EmployeeID	OrderDate	ShipperID
10248	90	5	1996-07-04	3
10249	81	6	1996-07-05	1
10250	34	4	1996-07-08	2
10251	84	3	1996-07-08	1
10251	84	3	1996-07-08	1
10252	76	4	1996-07-09	2
…	…	…	…	…
10443	66	8	1997-02-12	1



SELECT OrderID, COUNT(OrderID)
FROM Orders
GROUP BY OrderID
HAVING COUNT(OrderID) > 1
