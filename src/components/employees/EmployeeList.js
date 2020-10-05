import React, {useContext, useEffect} from "react"
import { EmployeeCard } from "./Employee"
import { EmployeeContext } from "./EmployeeProvider"



export const EmployeeList = () => {
    const {employees, getEmployees} = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <div className="employees">{
            employees.map(employee => {
                return <EmployeeCard key={employee.id} name={employee.name} location={employee.location.name} />
            })
        }
        </div>
    )
}