import { DestinationController } from "../../controllers/destination.controller";

export const destinationRoutes = [
    {
        method: 'get',
        route: '/destinations',
        controller: DestinationController,
        action: 'getAll'
    },
    {
        method: 'post',
        route: '/destinations',
        controller: DestinationController,
        action: 'create'
    },
    {
        method: 'get',
        route: '/destinations/:id',
        controller: DestinationController,
        action: 'getOne'
    },
    {
        method: 'put',
        route: '/destinations/:id',
        controller: DestinationController,
        action: 'update'
    },
    {
        method: 'delete',
        route: '/destinations/:id',
        controller: DestinationController,
        action: 'delete'
    },
]