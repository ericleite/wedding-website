import { useEffect, useState } from 'react';

export function useCountdownTimer(endDate: Date) {
  const [timers, setTimers] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function updateTimers() {
      const nowInUTC = new Date().toUTCString();
      const endDateInUTC = endDate.toUTCString();
      const diff = new Date(endDateInUTC).getTime() - new Date(nowInUTC).getTime();
      const diffSeconds = Math.floor(diff / 1000);
      const diffMinutes = Math.floor(diffSeconds / 60);
      const diffHours = Math.floor(diffMinutes / 60);
      const diffDays = Math.floor(diffHours / 24);

      setTimers({
        days: diffDays,
        hours: diffHours % 24,
        minutes: diffMinutes % 60,
        seconds: diffSeconds % 60,
      });
    }

    updateTimers();

    const intervalId = setInterval(updateTimers, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [endDate]);

  return timers;
}
