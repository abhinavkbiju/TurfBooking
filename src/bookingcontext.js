import React, { createContext, useState } from 'react';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
    const [status, setStatus] = useState("");

    return (
        <BookingContext.Provider value={{ status, setStatus }}>
            {children}
        </BookingContext.Provider>
    );
};