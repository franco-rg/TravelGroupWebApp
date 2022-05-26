import React from 'react';

const ContainerViews = ({ children }) => {
    return (
        <div className="relative p-3 m-auto sm:p-8 lg:px-10">
            <div className="h-auto p-8 overflow-x-hidden rounded-xl sm:mt-4 bg-white shadow-beautiful sm:overflow-auto">
                {children}
            </div>
        </div>
    );
}

export default ContainerViews;