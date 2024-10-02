begin 
    begin try
        begin transation
            update  table  set name="raj"where id =5
            commit transation
    end try

    begin catch
         rollback
    end catch

end