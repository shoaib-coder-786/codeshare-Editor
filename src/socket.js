import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        withCredentials: true,
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    };
    
    return io("", options);
};
