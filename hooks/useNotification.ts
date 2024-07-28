import { useNotifications } from "@utils/state";
import { Notification } from "@components/Notifications";
import useConfig from "@hooks/useConfig";

export default function useNotification() {
  const { notifications } = useConfig();
  const { setNotifications } = useNotifications();

  function loadNotifications() {
    notifications.forEach(showNotification);
  }

  function showNotification(options: Omit<Notification, "read">) {
    setNotifications((notifications) => {
      const index = notifications.findIndex((n) => n.id === options.id);

      if (index !== -1) {
        notifications[index] = { ...options, read: true };
        return notifications;
      }

      return [...notifications, { ...options, read: false }];
    });
  }

  return { loadNotifications, showNotification };
}
