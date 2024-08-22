'use client';

import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import ModalPortal from './ModalPortal';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <ModalPortal>
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-black/50'
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                onClose();
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className='relative rounded-md bg-white p-16'
            >
              {children}
            </motion.div>
          </motion.section>
        </ModalPortal>
      )}
    </AnimatePresence>
  );
}
