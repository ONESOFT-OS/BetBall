export const ROLES = {
    Employee: "Employee",
    Admin: "Admin",
    User: "Punter",
};
export const redirectPages: { [key: string]: string} = {
    Admin: '/adm/dashboard',
    Employee: '/dashboard',
    Punter: '/user/dashboard',
}