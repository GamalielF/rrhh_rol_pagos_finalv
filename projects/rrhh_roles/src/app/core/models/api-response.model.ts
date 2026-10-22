export interface ApiResponse<T> {
    status: string;
    message: string;
    content: T;
    timestamp: string;
    success: boolean;
}