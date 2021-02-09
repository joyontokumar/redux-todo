import { notification } from 'antd';
export const successNotification = (type, message) => {
    notification[type]({
        message: `${message}`,
    });
}
export const errorNotification = (type, message) => {
    notification[type]({
        message: `${message}`,
    });
}
