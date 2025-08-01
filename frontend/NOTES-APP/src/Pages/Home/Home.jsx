import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Notecard from '../../components/Cards/Notecard';
import { MdAdd } from 'react-icons/md';
import AddEditNotes from './AddEditNotes';
import Modal from 'react-modal';




const Home = () => {

  const [openAddEditModal, setOpenAddEditModal] = useState ({
    isShown: false,
    type: "add",
    data: null,
}) ;
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <Notecard
            title="Meeting on 7th April"
            date="3rd Apr 2024"
            content="Meeting on 7th April Meeting on 7th April"
            tags="#Meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>
      <button
          className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-full fixed bottom-8 right-8 shadow-lg border border-transparent hover:shadow-xl hover:border-blue-400 transition-all"

          onClick={() => {setOpenAddEditModal({ isShown: true, type: "add", data: null });}}
        >
          <MdAdd className="text-[32px] text-white" />
        </button>
        <Modal
          isOpen={openAddEditModal.isShown}
          onRequestClose={() => setOpenAddEditModal({ ...openAddEditModal, isShown: false })}
          style={{
            overlay: {
              backgroundColor: "rgba(0,0,0,0.2)",
            },
          }}
          contentLabel="Add or Edit Note"
          className={"w-[40%] h-[85vh] bg-white rounded-4xl mx-auto mt-14 p-5 overflow-auto"}
        >
          <AddEditNotes />
        </Modal>
    </>
  );
};


export default Home;
