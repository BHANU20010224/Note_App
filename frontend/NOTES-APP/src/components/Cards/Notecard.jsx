import React from 'react';
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";

const Notecard = ({
    title,
    date,
    content,
    tag,
    isPinned,
    onEdit,
    onDelete,
    onPinNote
}) => {
    return (
        <div className="border rounded-2xl p-4 bg-white hover:shadow-xl hover:border-blue-400 transition-all">
            <div className="flex items-center justify-between">
                <div>
                    <h6 className="text-sm font-medium">{title}</h6>
                    <span className="text-xs text-slate-500">{date}</span>
                </div>
                <MdOutlinePushPin
                    className={`icon-btn cursor-pointer ${isPinned ? 'text-blue-500' : 'text-primary'}`}
                    onClick={onPinNote}
                />
            </div>
            <p className="text-xs text-slate-600 mt-2">
                {content?.slice(0, 60)}
            </p>
            <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-slate-500">{tag}</div>
                <div className="flex items-center gap-2">
                    <MdCreate
                        className="icon-btn hover:text-green-600 cursor-pointer"
                        onClick={onEdit}
                    />
                    <MdDelete
                        className="icon-btn hover:text-red-500 cursor-pointer"
                        onClick={onDelete}
                    />
                </div>
            </div>
        </div>
    );
};

export default Notecard;

