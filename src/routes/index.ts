import { destinationRoutes } from "./routers/destination.routes";
import { userRoutes } from "./routers/user.routes";

export const Routes = [
    ...userRoutes,
    ...destinationRoutes
]