async function api(){
    let user=await User.findAll()
    let manager_1=await manager.findAll()
    let emp_1=await emp.findAll()
    return {user,manager_1,emp_1}
}

//optimized code

async function api() {
    // Execute all database queries concurrently
    const [user, manager_1, emp_1] = await Promise.all([
        User.findAll(),
        manager.findAll(),
        emp.findAll()
    ]);
    
    // Return the results
    return { user, manager_1, emp_1 };
}
