import { UserController } from "../../controllers/user.controller";


export const userRoutes = [
    {
        method: "get",
        route: "/users",
        controller: UserController,
        action: "getAll"
    }, 
    {
        method: "get",
        route: "/users/:id",
        controller: UserController,
        action: "getOne"
    }, 
    {
        method: "post",
        route: "/users",
        controller: UserController,
        action: "create"
    }, 
    {
        method: "delete",
        route: "/users/:id",
        controller: UserController,
        action: "delete"
    }
]