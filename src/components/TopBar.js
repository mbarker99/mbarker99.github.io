import React from 'react';
import { FiBattery, FiWifi } from 'react-icons/fi';
import { BsBell } from 'react-icons/bs';

const TopBar = () => {
    const currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <div className="w-full h-6 bg-black text-white text-xs px-3 flex items-center justify-between font-mono select-none">
            {/* Time */}
            <div>{currentTime}</div>

            {/* Icons */}
            <div className="flex items-center gap-2">
                <BsBell className="text-white text-[12px]" />
                <FiWifi className="text-white text-[12px]" />
                <FiBattery className="text-white text-[12px]" />
            </div>
        </div>
    );
};

export default TopBar;
