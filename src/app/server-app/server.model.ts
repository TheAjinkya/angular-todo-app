export interface Server {
    id: string;
    name: string;
    status: 'online' | 'offline' | 'maintenance';
}

export interface RebootSchedule {
    serverId: string;
    scheduledTime: Date;
    userId?: string;
}

export type RebootFormValue = {
    server: Server | null;
    time: Date | null;
};

export interface ScheduleResponse {
    success: boolean;
    message: string;
    scheduleId?: string;
}

export interface ServerListResponse {
    servers: Server[];
}